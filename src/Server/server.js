import express from "express";
import compression from "compression";
import home from "./routes/routes";
const app = express();

app.use(compression());
app.use(express.static("build"));

app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});