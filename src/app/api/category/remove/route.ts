import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const requestData: {
      id: string;
    } = await request.json();

    await prisma.category.deleteMany({ where: { parent_id: requestData.id } });

    const remove = await prisma.category.delete({
      where: requestData,
    });

    return NextResponse.json({
      data: remove,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
