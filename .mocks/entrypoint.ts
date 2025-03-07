import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { handlers } from "./handlers";
import { createMiddleware } from "@mswjs/http-middleware";

console.log("Going to run Mock server...");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(createMiddleware(...handlers));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Mock Server is running on http://localhost:${PORT}`);
});
