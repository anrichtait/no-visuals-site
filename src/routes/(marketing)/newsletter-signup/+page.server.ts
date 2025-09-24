import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

export const actions = {
  subscribe: async ({ request, locals: { supabaseServiceRole }, getClientAddress }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const email = formData.get("email")?.toString() ?? ""

    if (email.length < 6 || !email.includes("@")) {
      errors["email"] = "Please enter a valid email address"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Get tracking data
    const userAgent = request.headers.get("user-agent")
    const ipAddress = getClientAddress()
    const referrer = request.headers.get("referer")

    // Save to newsletter subscribers table
    const { error: insertError } = await supabaseServiceRole
      .from("newsletter_subscribers")
      .insert({
        email,
        source: 'newsletter-signup',
        user_agent: userAgent,
        ip_address: ipAddress,
        referrer,
        subscribed_at: new Date().toISOString(),
        is_active: true
      })

    if (insertError) {
      // Check if it's a duplicate email error
      if (insertError.code === '23505') {
        return fail(400, { errors: { email: "This email is already subscribed" } })
      }
      console.error("Error saving newsletter subscription", insertError)
      return fail(500, { errors: { _: "Error processing subscription. Please try again." } })
    }

    // Send admin notification
    await sendAdminEmail({
      subject: "New newsletter subscriber",
      body: `New newsletter subscription: ${email}

Source: Newsletter Signup Page
User Agent: ${userAgent}
IP: ${ipAddress}
Referrer: ${referrer}
Subscribed: ${new Date().toLocaleString()}`
    })

    return { success: true }
  }
}
