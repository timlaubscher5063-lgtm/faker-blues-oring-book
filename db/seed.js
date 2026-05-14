import db from "#db/client";

import { createTool } from "#db/queries/tools";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createTool("Gamma Ray", "1209XB", 228, "PRB", 7, 200, 150);
  await createTool("RBT", "2122PB", 312, "CCR", 12, 350, 120);
  await createTool("MVT", "4253XA", 310, "MVT", 8, 180, 45);
  await createTool("ZDL", "4223XB", 228, "PRB", 10, 400, 150);
}
