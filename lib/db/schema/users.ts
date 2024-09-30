import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

import { createInsertSchema } from 'drizzle-zod';
import { relations } from 'drizzle-orm/relations';

export const users = pgTable('users', {
  id: text('id').primaryKey().notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: timestamp('email_verified', {
    precision: 6,
    withTimezone: true,
  }),
  image: text('image'),
  name: text('name'),
  created: timestamp('created', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull(),
  updated: timestamp('updated', { precision: 6, withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const userRelations = relations(users, () => ({}));

export const insertUserSchema = createInsertSchema(users).omit({
  created: true,
  updated: true,
});

// Types for users - used to type API request params and within Components
export type UserType = typeof users.$inferSelect;
