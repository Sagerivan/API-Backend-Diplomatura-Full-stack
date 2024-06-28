import express from "express";
import cors from "cors";
import { router as eventRouter } from "./route/events.js";

const app = express();
app.disable("x-powered-by");
app.use(express.json()); 
app.use(cors());




app.use("/events", eventRouter);
const PORT = 5000;
app.listen(PORT, (err) => {
  console.log(err ? err : `Server running on http://localhost:${PORT}`);
});
