const tariff= require("../data/tariff.json")

const tariffCalculator = (consumption)=>{
 const annualCosts= tariff[0].baseCost * 12 + consumption * (tariff[0].additionalKwhCost * 0.01)  
console.log(tariff[0].baseCost)
return annualCosts
}

module.exports = { tariffCalculator }

