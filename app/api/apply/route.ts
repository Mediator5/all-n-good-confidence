import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, name, email, phone, linkedin, why, extra } = body;

    if (!name || !email || !why) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"All N' Good Confidence Careers" <${process.env.GMAIL_USER}>`,
      to: "allngoodconfidence@gmail.com",
      replyTo: email,
      subject: `New Application: ${role}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#F2E5D3;border-radius:12px;">
          <h1 style="color:#1E4D8C;margin-top:0;">New Application — ${role}</h1>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:bold;color:#2A1A0F;width:160px;">Name</td>
              <td style="padding:8px 0;color:#2A1A0F;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;color:#2A1A0F;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1E4D8C;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;color:#2A1A0F;">Phone</td>
              <td style="padding:8px 0;color:#2A1A0F;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;color:#2A1A0F;">LinkedIn / Portfolio</td>
              <td style="padding:8px 0;color:#2A1A0F;">${linkedin ? `<a href="${linkedin}" style="color:#1E4D8C;">${linkedin}</a>` : "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <h3 style="color:#1E4D8C;margin-bottom:8px;">Why do you want to join?</h3>
            <p style="color:#2A1A0F;white-space:pre-wrap;margin:0;">${why}</p>
          </div>
          ${extra ? `
          <div style="margin-top:24px;">
            <h3 style="color:#1E4D8C;margin-bottom:8px;">Anything else we should know?</h3>
            <p style="color:#2A1A0F;white-space:pre-wrap;margin:0;">${extra}</p>
          </div>` : ""}
          <hr style="margin-top:32px;border:none;border-top:1px solid #8C6A4A44;" />
          <p style="color:#8C6A4A;font-size:12px;margin:12px 0 0;">Sent from the All N' Good Confidence careers form.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json(
      { error: "Failed to send application. Please try again." },
      { status: 500 }
    );
  }
}
