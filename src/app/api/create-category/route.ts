import { NextResponse } from "next/server";
import mysql, { Connection, OkPacket, FieldPacket } from "mysql2/promise";
import { getDbConnection, SQL } from "@/utils/consts";

export const dynamic = "force-dynamic";

interface CategoryRequestData {
  nameCategory: string;
  icon_name: string;
  icon_code: string;
}

export async function POST(request: Request) {
  try {
    const requestData: CategoryRequestData = await request.json();

    const db: Connection = await mysql.createConnection(getDbConnection);

    const [createCategory]: [OkPacket, FieldPacket[]] = await db.execute(
      SQL.CREATE_CATEGORY(requestData),
    );

    // Փակում ենք կապը
    await db.end();

    return NextResponse.json({
      data: createCategory.affectedRows,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
