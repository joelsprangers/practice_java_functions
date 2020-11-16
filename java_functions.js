/*
buy ingredients
slice the bread
take the cheese
serve the meal
*/

//declare
let makeSandwich = function (topping) {

    console.log('buy ingredients');
    console.log('slice the bread');
    console.log('take the ' + topping);
    console.log('serve the sandwich with ' + topping);

}

//call
makeSandwich('cheese');
makeSandwich('bacon');



let calculateDiscountedPrice = function (totalAmount, discount) {
    let newPrice = totalAmount - discount;
    return Math.round(newPrice);
}

let calculateDiscountedPrice_25 = function (totalAmount, discount) {

    if (totalAmount >= 25) {
        let newPrice = totalAmount - discount;
        return Math.round(newPrice);
    }
    else {
        return totalAmount;
    }
}

console.log(calculateDiscountedPrice(100, 19.20));
console.log(calculateDiscountedPrice_25(25, 19.20));