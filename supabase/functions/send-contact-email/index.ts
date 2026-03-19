import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  fullName: string;
  phone: string;
  email: string;
  unitType: string;
  city: string;
  eventDate: string;
  duration: string;
  details: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: ContactPayload = await req.json();
    const { fullName, phone, email, unitType, city, eventDate, duration, details } = payload;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    await supabase.from("contact_inquiries").insert({
      full_name: fullName,
      phone,
      email,
      unit_type: unitType,
      city,
      event_date: eventDate || null,
      duration,
      details,
    });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Resend API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0031e2; border-bottom: 2px solid #0031e2; padding-bottom: 10px;">New Quote Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Name</td><td style="padding: 8px 0; color: #555;">${fullName}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Phone</td><td style="padding: 8px; color: #555;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email</td><td style="padding: 8px 0; color: #555;">${email}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Unit Type</td><td style="padding: 8px; color: #555;">${unitType || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">City</td><td style="padding: 8px 0; color: #555;">${city || 'Not specified'}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Event Date</td><td style="padding: 8px; color: #555;">${eventDate || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Duration</td><td style="padding: 8px 0; color: #555;">${duration || 'Not specified'}</td></tr>
        </table>
        ${details ? `<div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 8px;"><strong>Additional Details:</strong><br/>${details}</div>` : ''}
        <p style="margin-top: 20px; font-size: 12px; color: #999;">This inquiry was submitted via the D Bros Portables website.</p>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "D Bros Portables <noreply@dbrosportables.com>",
        to: ["dbrosportables@gmail.com"],
        subject: `New Quote Request from ${fullName}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const resendError = await resendRes.text();
      console.error("Resend error:", resendError);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
