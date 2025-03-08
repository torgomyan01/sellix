"use server";

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { isTokenExpired } from "@/utils/helpers";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GetUserInfo(token: string) {
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

  const res: IDBUser = { ...userInfo };
  delete res.password;

  return {
    status: 1,
    data: res,
  };
}
