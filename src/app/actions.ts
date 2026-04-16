"use server";

export async function submitContactForm(data: Record<string, any>) {
  try {
    const res = await fetch("https://wompwomp.academy/webhook/140348ac-2b05-45c6-a23b-81ded7d3cf26", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Webhook responded with status:", res.status);
      return { success: false, error: `Status: ${res.status}` };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Webhook submission error:", error);
    return { success: false, error: error.message };
  }
}
