import db from "#db/client";

export async function createTool(
  name,
  series,
  oring,
  connection,
  length,
  weight,
  voltage,
) {
  const sql = `
    INSERT INTO tools
    (name, series, oring, connection, length, weight, voltage)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `;

  const {
    rows: [tool],
  } = await db.query(sql, [
    name,
    series,
    oring,
    connection,
    length,
    weight,
    voltage,
  ]);
  return tool;
}

export async function getTools() {
  const sql = `
    SELECT * FROM tools;
    `;

  const { rows: tools } = await db.query(sql);
  return tools;
}

export async function getToolById(id) {
  const sql = `
  SELECT * FROM tools
  WHERE id = $1
  `;
  const {
    rows: [tool],
  } = await db.query(sql, [id]);
  return tool;
}
