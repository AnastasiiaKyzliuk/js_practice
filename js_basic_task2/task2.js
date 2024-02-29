let basePrice = 100000;
let finalPrice = basePrice;

let yearOfManufacture = 1000;
let isUsed = false;
let usageKm = 75000;
let hasClimateControl = false;
let hasExtraSafety = true;
let isElectro = false;

console.log(`Base price of the car: $${basePrice.toFixed(2)}`);

if (yearOfManufacture >= 2009 && yearOfManufacture <= 2022) {
    finalPrice *= 1.10;
    console.log(`Because car was manufactured during 2019-2022, the final price has increased by 10% to $${finalPrice.toFixed(2)}`);
}

if (isUsed && usageKm >= 50000 && usageKm <= 100000) {
    finalPrice *= 0.95;
    console.log(`Because car has usage between 50,000 km and 100,000 km, the final price has decreased by 5% to $${finalPrice.toFixed(2)}`);
}

if (hasClimateControl) {
    finalPrice *= 1.07;
    console.log(`Because car has climate control, the final price has increased by 7% to $${finalPrice.toFixed(2)}`);
}

if (hasExtraSafety) {
    finalPrice *= 1.08;
    console.log(`Because car has an extra Safety Package, the final price has increased by 8% to $${finalPrice.toFixed(2)}`);
}

if (isElectro) {
    finalPrice *= 1.15;
    console.log(`Because car is electro, the final price has increased by 15% to $${finalPrice.toFixed(2)}`);
}

console.log(`Final price of the car: $${finalPrice.toFixed(2)}`);
