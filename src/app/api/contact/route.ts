import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient, ContactSubmission } from "@/lib/supabase";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data: ContactSubmission = result.data;

    // Insert into Supabase
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("contacts").insert([data]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save contact" },
        { status: 500 }
      );
    }

    // Send email notifications (don't fail the request if email fails)
    try {
      await Promise.all([
        sendAdminNotification(data),
        sendUserConfirmation(data),
      ]);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue anyway - the contact was saved successfully
    }

    return NextResponse.json(
      { message: "Contact submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
