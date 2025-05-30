"use server"

interface EarlyAccessFormData {
  name: string
  email: string
  role: string
  interest: string
}

export async function submitEarlyAccess(formData: FormData) {
  try {
    const data: EarlyAccessFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      interest: formData.get("interest") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.role) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // API call for teable to add the new user
    const TableID = "tblHLbw0rxqKLJ6QdQ2"
    const response = await fetch(`https://app.teable.io/api/table/${TableID}/record`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEABLE_ADD_LEAD_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              Role: data.role,
              Interest: data.interest,
              SubmittedAt: new Date(),
            },
          },
        ],
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong")
    }

    return {
      success: true,
      message: "You're in! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Early access submission error:", error)
    return {
      success: false,
      error: "Oops, something went wrong. Please try again.",
    }
  }
}
