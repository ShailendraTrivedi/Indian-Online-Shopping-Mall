const dotenv = require("dotenv");
dotenv.config();
const { PORT, COMPASS_MONGODB, SECRET_JWT_KEY } = process.env;
module.exports = { PORT, COMPASS_MONGODB, SECRET_JWT_KEY };
