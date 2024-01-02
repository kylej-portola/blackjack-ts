import {InferInsertModel, InferSelectModel} from "drizzle-orm";
import * as schema from "../dbSchema";
// import {db} from "../db";

export type NewUser = InferInsertModel<typeof schema.users>
export type User = InferSelectModel<typeof schema.users>;


// async function createUser(user: NewUser) {
//     const response = await db.insert(schema.users).values(user).returning();
//
//     // we know that the response will be an array of one element
//     return response[0].id;
// }
