const express = require("express");
const config = require("config");
const cors = require("cors");
const app = express();

const ImageRouter = require("./src/modules/image.route");
const HomeController = require("./src/controllers/home");

app.use(cors());

app.use("/images", express.static("src/assets"));

app.get("/", HomeController.getHome);

app.use("/api", ImageRouter);

const port = process.env.PORT || config.get("port");
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
