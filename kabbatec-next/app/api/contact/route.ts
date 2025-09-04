import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
    }

    // Aqui poderíamos integrar com e-mail, CRM ou webhook
    console.log("Nova mensagem de contato:", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Erro ao enviar" }, { status: 500 });
  }
}


