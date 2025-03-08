"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function UserLogin(userLogin: { phone_number: string; password: string }) {
  console.log(userLogin, "222");

  // ✅ Ստուգում ենք, որ բոլոր դաշտերը լրացված են
  if (!userLogin.phone_number || !userLogin.password) {
    return {
      status: 0,
      message: "Դաշտերը պետք է պարտադիր լրացվեն"
    };
  }


  const getUser = await prisma.user.findFirst({
    where: {
      phone_number: userLogin.phone_number,
    }
  })

  if(!getUser){
    return {
      status: 0,
      message: "Նշվծ տվյալներով օգտատեր գոյություն չունի"
    };
  }

  const passwordMatch = await bcrypt.compare(userLogin.password, getUser.password);
  if (!passwordMatch) {
    return { status: 0, message: "Սխալ գաղտնաբառ" };
  }

  const token = jwt.sign(
    {
      id: getUser.id,
      name: getUser.name,
      phone_number: getUser.phone_number,
    },
    JWT_SECRET, // Գաղտնի բանալին
    { expiresIn: "15d" } // Տոկենի վավերականությունը (7 օր)
  );

  return {
    status: 1,
    data: {
      token: token,
      user: {
        id: getUser.id,
        name: getUser.name,
        phone_number: getUser.phone_number,
      },
    }
  };
}
