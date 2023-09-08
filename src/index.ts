/**
 * create an express server
 */
import cors from "cors";

import express, { type Express, type Request, type Response } from "express";
import fileUpload from "express-fileupload";

import Blogs from "./routes/blogs.js";
import Users from "./routes/users.js";
import { settings } from "./settings/settings.js";

// require PORT
const PORT = settings.PORT || 7900;

// initailize app
const app: Express = express();

/** cors setup for express app */
// TODO: reconfigure cors to use allowed domains
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  }),
);
// use body parser
app.use(express.json({ limit: "50mb" }));
/** user express fileupload */
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);

async function main() {
  // use blogs routes
  app.use("/blogs", Blogs);

  // use user routes
  app.use("/users", Users);

  app.get(
    "/",
    (req: Request, res: Response): Response<any, Record<string, any>> => {
      return res.json({ message: "application started" });
    },
  );
}

main()
  .then(async () => {
    await settings.CLIENT.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await settings.CLIENT.$disconnect();
    process.exit(1);
  });
// listen to port
app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
