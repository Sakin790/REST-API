import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import  {router} from "./routes/HealthRoute.js"

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(rateLimit());
app.use(cookieParser());
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  message: "To many request...!",
});
app.use(rateLimiter);

//routes

app.use("/api/user/v1",router)


export default app;
