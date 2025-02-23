import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Ստանալ request-ի տվյալները
    const requestData: { id: number } = await request.json();

    // Ստուգել, արդյոք id-ն կա
    if (!requestData?.id) {
      return NextResponse.json({
        data: {},
        error: "Id not found",
      });
    }

    // Ջնջել բոլոր ենթակատեգորիաները
    await prisma.category.deleteMany({
      where: { parent_id: requestData.id },
    });

    // Ջնջել հիմնական կատեգորիան
    const remove = await prisma.category.delete({
      where: { id: requestData.id },
    });

    // Վերադարձնել հաջողության պատասխան
    return NextResponse.json({
      data: remove,
      error: "",
    });
  } catch (error) {
    // Վերադարձնել սխալի պատասխան
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
