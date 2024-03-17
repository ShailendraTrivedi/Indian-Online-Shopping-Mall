const express = require("express");
const mongoose = require("mongoose");
const { PORT, COMPASS_MONGODB } = require("./constant");
const Routers = require("./routes");
const {Middlewares} = require("./middleware");
const app = express();

app.get("/", (req, res) => {
  res.send("Buyer Backend is Working...");
});

app.use(Middlewares);
app.use("/api", Routers);

// ! ------------------------------ MongoDB and Server Connection ------------------------------

mongoose
  .connect(COMPASS_MONGODB)
  .then((result) => {
    console.log("MongoDB is connected successfully");
  })
  .catch((err) => {
    console.log(`🚀 ~ file: index.js:23 ~ mongoose.connect ~ err:\n =>`, err);
  });

try {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} catch (error) {
  console.log(`🚀 ~ file: index.js:31 ~ error:\n =>`, error);
}
