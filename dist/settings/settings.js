//Get Env Vars
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();
const settingsEnv = () => {
    return {
        PORT: process.env.PORT || 5000,
        APPLICATION_STATE: process.env.APPLICATION_STATE,
        DATABASE_URL: process.env.DATABASE_URL,
        CLIENT: new PrismaClient()
    };
};
export const settings = settingsEnv();
//# sourceMappingURL=settings.js.map