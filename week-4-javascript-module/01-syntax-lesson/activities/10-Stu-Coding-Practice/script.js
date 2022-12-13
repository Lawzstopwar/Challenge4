let playerSalary1 = 20_000_000;
let playerSalary2 = 20_000_000;
let playerSalary3 = 20_000_000;

let spendingLimit = 40_000_000;


let taxRate = 0.18;

let totalplayerSalary = playerSalary1 + playerSalary2 + playerSalary3


if (totalSalarys > spendingLimit){

    let taxableSalary = totalSalarys -spendingLimit;
    let amountTaxOwed = taxableSalary * taxRate
    console.log("amount of taxes owed:" + amountTaxOwed)

}
else {

    console.log("no luxury taxes owed!")
}



