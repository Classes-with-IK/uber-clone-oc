import {pgTable, serial, varchar, text, timestamp} from "drizzle-orm/pg-core";
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length:100 }).notNull(),
    email: varchar('email', { length:150}).notNull(),
    passwordHash: text('password_hash').notNull(),
    role: varchar('role', {length:10}).notNull(),
    createdAt: timestamp('created_at').defaultNow(),








});