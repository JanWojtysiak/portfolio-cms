import { getIronSession, type SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export type SessionData = {
  isAdmin?: boolean;
};

function getSessionOptions(): SessionOptions {
  const password = process.env.SESSION_SECRET;

  if (!password || password.length < 32) {
    throw new Error(
      "SESSION_SECRET musi mieć co najmniej 32 znaki. Skopiuj .env.example do .env.",
    );
  }

  return {
    password,
    cookieName: "portfolio_admin",
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  };
}

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), getSessionOptions());
}

export async function isAdminAuthenticated() {
  try {
    const session = await getSession();
    return Boolean(session.isAdmin);
  } catch {
    return false;
  }
}
