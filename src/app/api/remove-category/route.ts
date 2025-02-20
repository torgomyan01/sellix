import { NextResponse } from "next/server";
import mysql, { Connection, FieldPacket, QueryResult } from "mysql2/promise";
import { getDbConnection, SQL } from "@/utils/consts";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const requestData: {
      id: string;
    } = await request.json();

    const db: Connection = await mysql.createConnection(getDbConnection());

    const [result]: [QueryResult, FieldPacket[]] = await db.execute(
      SQL.REMOVE_CATEGORY(requestData.id),
    );

    // Փակում ենք տվյալների բազայի կապը
    await db.end();

    return NextResponse.json({
      data: result, // Վերադարձնում ենք հարցման արդյունքը
      error: "",
    });
  } catch (error) {
    console.error("Error removing category:", error); // Սխալի լոգավորում
    return NextResponse.json({
      status: 0,
      error: (error as Error).message || "Unknown error",
    });
  }
}
