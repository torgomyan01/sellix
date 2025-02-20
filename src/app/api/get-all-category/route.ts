import { NextResponse } from "next/server";
import mysql, { Connection, QueryResult } from "mysql2/promise";
import { getDbConnection, SQL } from "@/utils/consts";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db: Connection = await mysql.createConnection(getDbConnection());

    const [getAllCategories]: QueryResult | any = await db.execute(
      SQL.GET_ALL_CAT,
    );

    await db.end();

    return NextResponse.json({
      data: getAllCategories,
      error: "",
    });
  } catch (error) {
    return NextResponse.json({
      status: 0,
      error,
    });
  }
}
