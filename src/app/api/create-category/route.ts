import { NextResponse } from "next/server";
import mysql, { Connection, QueryResult } from "mysql2/promise";
import { getDbConnection, SQL } from "@/utils/consts";

export const dynamic = "force-dynamic";

export async function POST(request: any) {
  try {
    const requestData: any = await request.json();
    const db: Connection = await mysql.createConnection(getDbConnection());

    const [createCategory]: QueryResult | any = await db.execute(
      SQL.CREATE_CATEGORY(requestData),
    );

    await db.end();

    return NextResponse.json({
      data: 1,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error,
    });
  }
}
