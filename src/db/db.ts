// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";


// import { users } from "./dbSchema";
import * as process from "process";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);