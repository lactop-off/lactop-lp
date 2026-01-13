import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL || "noreply@example.com";
const adminEmail = process.env.ADMIN_EMAIL || "";

export interface ContactData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  lp: "LP制作",
  webapp: "Webアプリ開発",
  maintenance: "運用保守",
  other: "その他・相談",
};

const budgetLabels: Record<string, string> = {
  "~30": "〜30万円",
  "30-50": "30〜50万円",
  "50-100": "50〜100万円",
  "100-300": "100〜300万円",
  "300~": "300万円以上",
  undecided: "未定",
};

export async function sendAdminNotification(data: ContactData) {
  if (!adminEmail) {
    console.warn("ADMIN_EMAIL is not set, skipping admin notification");
    return;
  }

  const serviceLabel = serviceLabels[data.service] || data.service;
  const budgetLabel = data.budget ? budgetLabels[data.budget] || data.budget : "未選択";

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: adminEmail,
    subject: `【お問い合わせ】${data.name}様より`,
    html: `
      <h2>新しいお問い合わせがありました</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold; width: 30%;">お名前</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">メールアドレス</td>
          <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">会社名</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.company || "未入力"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">ご検討中のサービス</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${serviceLabel}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">ご予算</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${budgetLabel}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">お問い合わせ内容</td>
          <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${data.message}</td>
        </tr>
      </table>
    `,
  });

  if (error) {
    console.error("Failed to send admin notification:", error);
    throw error;
  }
}

export async function sendUserConfirmation(data: ContactData) {
  const serviceLabel = serviceLabels[data.service] || data.service;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: data.email,
    subject: "【LACTOP】お問い合わせありがとうございます",
    html: `
      <div style="max-width: 600px; margin: 0 auto; font-family: sans-serif;">
        <h2 style="color: #333;">${data.name} 様</h2>
        <p>この度はお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>

        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px;"><strong>ご検討中のサービス:</strong> ${serviceLabel}</p>
          <p style="margin: 0 0 10px;"><strong>お問い合わせ内容:</strong></p>
          <p style="margin: 0; white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 4px;">${data.message}</p>
        </div>

        <p>内容を確認の上、2営業日以内にご連絡いたします。</p>
        <p>しばらくお待ちくださいませ。</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

        <p style="color: #666; font-size: 14px;">
          ※このメールは自動送信されています。<br />
          ※本メールにお心当たりのない場合は、お手数ですが削除してください。
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Failed to send user confirmation:", error);
    throw error;
  }
}
