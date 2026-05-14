import express from "express";
const router = express.Router();
export default router;

import { getTools, getToolById } from "#db/queries/tools";

import requireUser from "#middleware/requireUser";

router.use(requireUser);

router.get("/", async (req, res) => {
  const tools = await getTools();
  res.send(tools);
});

router.param("id", async (req, res, next, id) => {
  const tool = await getToolById(id);
  if (!tool) return res.status(404).send("Tool not found.");
  req.tool = tool;
  next();
});

router.get("/:id", (req, res) => {
  res.send(req.tool);
});
