//logical or
console.log(true || true);
console.log(false || true);
console.log(1 || false);
console.log(false || false);

let hasReservation = true;
let acceptingwalkIns = false;
const hasAccessToTable = hasReservation || acceptingwalkIns;
console.log(hasAccessToTable);
//logical and
console.log(true && true);
console.log(false & true);
console.log(1 & false);
console.log(false & false);

let age = 16;
let hasCar = true;
const canDrive = age > 16 && hasCar;
console.log(canDrive);
//logical not
console.log(!true);
let isClosedOnsunday = true;
const isRestaurant = !isClosedOnsunday;
console.log(isRestaurant);

let a = null;
const result = a ?? false;
console.log(result);
let n = 5 + 5 * 4;
console.log(n);
