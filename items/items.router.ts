/* === Imports === */
import { Router } from "express";
import { index, show, create, update, destroy } from "./item.controller";

/* === Router === */
export const itemsRouter = Router();

/* === Controllers === */
// GET items

itemsRouter.get("/", index);

// GET items/:id

itemsRouter.get("/:id", show);

// POST items

itemsRouter.post("/", create);

// PUT items/:id

itemsRouter.put("/:id", update);

// DELETE items/:id

itemsRouter.delete("/:id", destroy);
