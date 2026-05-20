import express from "express";
const router = express.Router();
export default router;

import { getTools, getToolById, createTool } from "#db/queries/tools";

import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";

router.use(requireUser);

router.get("/", async (req, res) => {
  const tools = await getTools();
  res.send(tools);
});

router.post(
  "/",
  requireBody([
    "name",
    "series",
    "oring",
    "connection",
    "length",
    "weight",
    "voltage",
  ]),
  async (req, res) => {
    const { name, series, oring, connection, length, weight, voltage } =
      req.body;

    const tool = await createTool(
      name,
      series,
      oring,
      connection,
      length,
      weight,
      voltage,
    );

    res.status(201).send(tool);
  },
);

router.param("id", async (req, res, next, id) => {
  const tool = await getToolById(id);
  if (!tool) return res.status(404).send("Tool not found.");
  req.tool = tool;
  next();
});

router.get("/:id", (req, res) => {
  res.send(req.tool);
});
