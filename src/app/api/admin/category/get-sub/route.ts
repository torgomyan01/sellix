import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        status: 0,
        error: "ID parameter is missing",
      });
    }

    const res = await prisma.category.findMany({
      where: {
        parent_id: parseInt(id),
      },
    });

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
