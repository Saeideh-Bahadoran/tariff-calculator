const router = require("express").Router();
const tariff = require("../data/tariff.json");
const { tariffCalculator } = require("../logic/calculate");
router.get("/", (req, res) => {
  res.json(tariff);
});
router.post("/", (req, res) => {
  console.log(req.body);
  const result= tariffCalculator(req.body.consumption)
  
  res.json({name: "Tariff A",annualCosts: result, currency: "EUR"});
});

module.exports = router;
