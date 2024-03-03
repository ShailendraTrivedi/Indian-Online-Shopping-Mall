const dotenv = require("dotenv");
dotenv.config();
const { PORT, COMPASS_MONGODB } = process.env;
module.exports = { PORT, COMPASS_MONGODB };
