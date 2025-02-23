import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const res = await prisma.category.findMany();

    return NextResponse.json({
      data: res,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
