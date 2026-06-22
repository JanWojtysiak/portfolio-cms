import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message:
        "Endpoint istnieje, ale zapis projektu nie został jeszcze zaimplementowany.",
    },
    { status: 501 },
  );
}
