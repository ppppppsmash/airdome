import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function GET(request: Request, response: Response) {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    }
  });

  const bodyText = await request.text();
  const data = JSON.parse(bodyText);

  const mailSend = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: data.email,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    お名前
    ${data.name}

    会社
    ${data.company}
    
    メールアドレス
    ${data.mail}
    
    お問い合わせ内容
    ${data.message}
    `,
  });

  return NextResponse.json({ mailSend })
}