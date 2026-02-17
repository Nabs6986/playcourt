import { Resend } from "resend";

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
};

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

export async function sendEmail(input: SendEmailInput) {
  if (!resend) {
    return { id: "noop", skipped: true };
  }

  const from = process.env.EMAIL_FROM ?? "no-reply@example.com";
  const result = await resend.emails.send({
    from,
    to: input.to,
    subject: input.subject,
    html: input.html
  });

  return { id: result.data?.id ?? null, skipped: false };
}

export function bookingConfirmationTemplate(clubName: string, startAtISO: string) {
  return `<p>Your booking at <strong>${clubName}</strong> is confirmed for ${startAtISO}.</p>`;
}

export function reminderTemplate(clubName: string, startAtISO: string) {
  return `<p>Reminder: your booking at <strong>${clubName}</strong> starts in 24 hours (${startAtISO}).</p>`;
}

export function cancellationTemplate(clubName: string, startAtISO: string) {
  return `<p>Your booking at <strong>${clubName}</strong> on ${startAtISO} has been cancelled.</p>`;
}
