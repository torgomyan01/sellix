"use server";

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { isTokenExpired } from "@/utils/helpers";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function UpdateUserInfo(token: string, userData: IDBUser) {
  if (!token) {
    return {
      status: 0,
      message: "No token provided",
    };
  }

  const jwtRes = isTokenExpired(token);

  if (jwtRes) {
    return {
      status: 444,
      message: "No token time",
    };
  }

  const jwtInfo = jwt.verify(token, JWT_SECRET) as { id: number };

  const userInfo = await prisma.user.findFirst({
    where: { id: jwtInfo.id },
  });

  if (!userInfo) {
    return {
      status: 0,
      message: "No result, check again",
    };
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: jwtInfo.id },
      data: {
        name: userData.name,
        phone_number: userData.phone_number,
        email: userData.email,
        image_path: userData.image_path,
        its_company: userData.its_company,
        whats_app: userData.whats_app,
        telegram: userData.telegram,
        viber: userData.viber,
        fb_link: userData.fb_link,
        insta_link: userData.insta_link,
        linkedin_link: userData.linkedin_link,
        updatedAt: new Date(),
      },
    });

    return {
      status: 1,
      message: "Տվյալները հաջողությամբ պահպանվել են",
      data: updatedUser,
    };
  } catch (error) {
    return {
      status: 0,
      message: "Error updating user",
      error: (error as Error).message,
    };
  }
}
