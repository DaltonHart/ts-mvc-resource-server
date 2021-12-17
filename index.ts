/* === Modules === */
import express, { Application, Request, Response } from "express";

import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { itemsRouter } from "./items/items.router";

/* === Server Config === */
dotenv.config();
const app: Application = express();
const port: number = parseInt(process.env.PORT as string);

/* === Middleware === */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* === Routes ===*/
app.get("/", async function (req: Request, res: Response): Promise<Response> {
  return res.status(200).json({
    message: "Hello World!",
  });
});

app.use("/api/menu/items", itemsRouter);

// 404
app.get("/*", async function (req: Request, res: Response): Promise<Response> {
  return res.status(404).json({
    message: "Route you are requesting is not found",
  });
});

// 405
app.use("/*", async function (req: Request, res: Response): Promise<Response> {
  return res.status(405).json({
    message: "The method that you are using is not allowed.",
  });
});

/* === Server Listener === */
try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
