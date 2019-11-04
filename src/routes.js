const express = require("express");
const PatologiaMentalController = require("./controllers/PatologiaMentalController");

const routes = express.Router();

routes.get("/patologiasmentais", PatologiaMentalController.index);
routes.post("/patologiasmentais", PatologiaMentalController.store);

module.exports = routes;