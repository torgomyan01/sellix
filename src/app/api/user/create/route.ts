import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const requestData: IDBUser = await request.json();

    if (
      !requestData.name ||
      !requestData.phone_number ||
      !requestData.password
    ) {
      return NextResponse.json({
        status: 0,
        error: "Missing required fields (name, phone_number, password)",
      });
    }

    const existingUser = await prisma.user.findMany({
      where: { phone_number: requestData.phone_number },
    });

    if (existingUser.length) {
      return NextResponse.json({
        status: 0,
        error: "Այս հեռախոսահամարը արդեն գրանցված է։",
      });
    }

    // Hash անում ենք գաղտնաբառը
    const hashedPassword = await bcrypt.hash(requestData.password, 10);

    // Ստեղծում ենք նոր օգտվող
    const newUser = await prisma.user.create({
      data: {
        name: requestData.name,
        phone_number: requestData.phone_number,
        email: "",
        password: hashedPassword,
        image_path: "",
        its_company: false,
        whats_app: false,
        telegram: false,
        viber: false,
        fb_link: "",
        insta_link: "",
        linkedin_link: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      data: newUser,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
