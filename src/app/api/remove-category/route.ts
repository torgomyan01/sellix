import { NextResponse } from "next/server";
import mysql, { Connection, QueryResult } from "mysql2/promise";
import { getDbConnection, SQL } from "@/utils/consts";

export const dynamic = "force-dynamic";

export async function POST(request: any) {
  try {
    const requestData: {
      id: string;
    } = await request.json();
    const db: Connection = await mysql.createConnection(getDbConnection());

    const [getAllCategories]: QueryResult | any = await db.execute(
      SQL.REMOVE_CATEGORY(requestData.id),
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
