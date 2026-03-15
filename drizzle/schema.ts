import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const tools = sqliteTable("tools", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  url: text("url").notNull(),
  description: text("description"),
  shortDesc: text("short_desc"),
  category: text("category"),
  pricingModel: text("pricing_model"), // 'free', 'freemium', 'paid'
  monthlyCostMin: real("monthly_cost_min"),
  monthlyCostMax: real("monthly_cost_max"),
  isVerified: integer("is_verified", { mode: "boolean" }).default(false),
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
  indieMade: integer("indie_made", { mode: "boolean" }).default(false),
  tags: text("tags"), // JSON array
  logoUrl: text("logo_url"),
  affiliateUrl: text("affiliate_url"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
});

export const submissions = sqliteTable("submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  toolName: text("tool_name"),
  url: text("url"),
  description: text("description"),
  submitterEmail: text("submitter_email"),
  submitterNote: text("submitter_note"),
  status: text("status").default("pending"), // 'pending', 'approved', 'rejected'
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  icon: text("icon"),
  sortOrder: integer("sort_order").default(0),
});