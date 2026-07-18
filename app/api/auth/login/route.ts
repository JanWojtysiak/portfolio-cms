import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = typeof body.password === "string" ? body.password : "";

    if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
      console.error("Brak ADMIN_PASSWORD lub SESSION_SECRET w zmiennych środowiskowych.");
      return NextResponse.json(
        { message: "Logowanie nie jest skonfigurowane." },
        { status: 500 },
      );
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { message: "Nieprawidłowe hasło." },
        { status: 401 },
      );
    }

    const session = await getSession();
    session.isAdmin = true;
    await session.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Nie udało się zalogować." },
      { status: 500 },
    );
  }
}
