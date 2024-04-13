import express from "express";
import { healthCheck } from "../controllers/HealthCheck.js";

const router = express.Router();

router.route("/healthCheck").get(healthCheck);

export { router };
