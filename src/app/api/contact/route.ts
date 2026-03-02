import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.warn('RESEND_API_KEY is not set. Email not actually sent. Please add your key to .env.local');

            return NextResponse.json({ success: true, warning: 'No API key configured.' });
        }


        const data = await resend.emails.send({
            from: 'Türkoğlu İletişim Formu <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL_TO || "[EMAIL_ADDRESS]",
            replyTo: email,
            subject: `Yeni İletişim Formu Mesajı: ${subject || 'Konu Yok'}`,
            html: `
        <h2>Yeni web sitesi mesajı</h2>
        <p><strong>Gönderen:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${subject || 'Belirtilmedi'}</p>
        <br/>
        <h3>Mesaj İçeriği:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Beklenmeyen bir hata oluştu.' },
            { status: 500 }
        );
    }
}
