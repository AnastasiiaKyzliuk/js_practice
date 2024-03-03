let baseIncome = 100;
let taxPercentage;
let afterTaxIncome;

if (baseIncome >= 10000 && baseIncome <= 50000) {
    taxPercentage = 5;
    console.log(taxPercentage, baseIncome, afterTaxIncome = baseIncome * 0.95);
} else if (baseIncome > 50000 && baseIncome <= 100000) {
    taxPercentage = 10;
    console.log(taxPercentage, baseIncome, afterTaxIncome = baseIncome * 0.90);
} else if (baseIncome > 100000 && baseIncome <= 200000) {
    taxPercentage = 15;
    console.log(taxPercentage, baseIncome, afterTaxIncome = baseIncome * 0.85);
} else if (baseIncome > 200000) {
    taxPercentage = 25;
    console.log(taxPercentage, baseIncome, afterTaxIncome = baseIncome * 0.75);
} else {
    console.log("Invalid baseIncome value or range");
}


