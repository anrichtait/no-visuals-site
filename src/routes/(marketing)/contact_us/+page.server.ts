import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

export const actions = {
  submitContactUs: async ({ request, locals: { supabaseServiceRole }, getClientAddress }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const firstName = formData.get("first_name")?.toString() ?? ""
    if (firstName.length < 2) {
      errors["first_name"] = "First name is required"
    }

    const lastName = formData.get("last_name")?.toString() ?? ""
    if (lastName.length < 2) {
      errors["last_name"] = "Last name is required"
    }

    const email = formData.get("email")?.toString() ?? ""
    if (email.length < 6 || !email.includes("@")) {
      errors["email"] = "Valid email is required"
    }

    const companyName = formData.get("company_name")?.toString() ?? ""
    const phone = formData.get("phone")?.toString() ?? ""
    const message = formData.get("message")?.toString() ?? ""

    if (message.length < 10) {
      errors["message"] = "Please provide more details about your project"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Get user's IP and user agent for tracking
    const userAgent = request.headers.get("user-agent")
    const ipAddress = getClientAddress()

    // Save to database with enhanced tracking
    const { error: insertError } = await supabaseServiceRole
      .from("contact_submissions")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company_name: companyName,
        phone,
        message,
        source: 'website',
        user_agent: userAgent,
        ip_address: ipAddress,
        status: 'new'
      })

    if (insertError) {
      console.error("Error saving contact request", insertError)
      return fail(500, { errors: { _: "Error saving request. Please try again." } })
    }

    // Send admin notification
    await sendAdminEmail({
      subject: "New contact request",
      body: `New contact request from ${firstName} ${lastName}

Email: ${email}
Phone: ${phone}
Company: ${companyName}

Message:
${message}

Source: Website Contact Form
User Agent: ${userAgent}
IP: ${ipAddress}`
    })

    return { success: true }
  }
}
