import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const requiredText = z.string().trim().min(1);
const projectSchema = z.object({
  title: requiredText.max(30),
  description: requiredText,
  tags: z.array(requiredText),
  link: z.url(),
  source: z.enum(["OPEN_SOURCE", "CLOSED_SOURCE"]),
});
export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Body musi być poprawnym JSON-em" },
        { status: 400 },
      );
    }
    const result = projectSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          message: "Niepoprawne dane projektu.",
          errors: result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
            code: issue.code,
          })),
        },
        { status: 400 },
      );
    }
    const data = result.data;

    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        tags: data.tags,
        link: data.link,
        source: data.source,
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Nie udało się dodać projektu," },
      { status: 500 },
    );
  }
}
