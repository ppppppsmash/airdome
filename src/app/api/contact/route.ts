import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: Request, response: Response) {
  const transporter = createTransport({
    service: "Gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    }
  });

  //const data = JSON.parse(request.body);
  const data = await request.text();
  const parsedData = JSON.parse(data);

  const sendGmail = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: [parsedData.mail, process.env.NEXT_PUBLIC_MAIL_USER],
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    お名前
    ${parsedData.name}

    会社
    ${parsedData.company}
    
    メールアドレス
    ${parsedData.mail}
    
    お問い合わせ内容
    ${parsedData.message}
    `,
  });

  console.log(sendGmail)

  //return NextResponse.json({ sendGmail })
  return NextResponse.json({sendGmail})
}