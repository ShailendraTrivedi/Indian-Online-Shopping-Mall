const express = require("express");
const cors = require("cors");
const { Router } = express;

const Middlewares = Router();
const middlewareCredentials = {
  origin: true,
  credentials: true,
};

Middlewares.use(express.json());
Middlewares.use(cors(middlewareCredentials));
Middlewares.use(express.urlencoded({ extended: true }));

module.exports = Middlewares;
