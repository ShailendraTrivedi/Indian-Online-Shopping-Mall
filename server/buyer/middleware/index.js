const express = require("express");
const cors = require("cors");
const { Router } = express;

const Middlewares = Router();

Middlewares.use(express.json());
Middlewares.use(cors());
Middlewares.use(express.urlencoded({ extended: true }));

module.exports = Middlewares;
