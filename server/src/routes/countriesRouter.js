const { Router } = require("express");
const {
  getCountriesHandlers,
  getCountriesByIdHandlers,
} = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandlers);

countriesRouter.get("/:idPais", getCountriesByIdHandlers);

module.exports = countriesRouter;
