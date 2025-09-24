import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

/** @type {import('./$types').Actions} */
export const actions = {
  subscribe: async ({ request }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const email = formData.get("email")?.toString() ?? ""
    
    // Validate email
    if (email.length < 6) {
      errors["email"] = "Email is required"
    } else if (email.length > 500) {
      errors["email"] = "Email too long"
    } else if (!email.includes("@") || !email.includes(".")) {
      errors["email"] = "Please enter a valid email address"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Send admin notification email
    await sendAdminEmail({
      subject: "New newsletter subscriber",
      body: `New newsletter subscription from: ${email}\n\nSubscribed at: ${new Date().toLocaleString()}\n\nYou can manually add this email to your newsletter platform.`,
    })

    // Return success
    return { success: true }
  },
}
