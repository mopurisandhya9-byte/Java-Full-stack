let num = "sana";
var age = 20;
const height = "5.9";
console.log(name);
console.log(age);
console.log(height);
console.log(age + 3);
console.log(age - 8);
console.log(age * 2);
console.log(age / 2);
age += 5;
console.log(age);
age -= 3;
console.log(age);
age *= 2;
console.log(age);
let age1 = 25;
let age2 = 30;
let sum = age1 + age2;
console.log(age1 > age2);
console.log(age1 < age2);
console.log(age1 == age2);
console.log(age1 != age2);
console.log(age1 >= age2);
console.log(age1 <= age2);
console.log(age1 == age2);
console.log(age1 !== age2);
let food = "pizza";
let break_fast = "bread";
let food2 = "burger";
let food3 = "dosa";
let food4 = "idli";
if (food === break_fast) {
    console.log("Both are the same");
}
else if (food === food2) {
    console.log("Food 1 and Food 2 are the same");
}
else if (food === food3) {
    console.log("Food 1 and Food 3 are the same");
}
else if (food != food4) {
    console.log("Food 1 and Food 4 are different");
}
else {
    console.log("They are different");
}



let amount = 52100;
let notes500 = 0;
let notes200 = 0;
let notes100 = 0;
if (amount >= 500) {
    notes500 = Math.floor(amount / 500);
    amount = amount % 500;
}
if (amount >= 200) {
    notes200 = Math.floor(amount / 200);
    amount = amount % 200;
}
if (amount >= 100) {
    notes100 = Math.floor(amount / 100);
    amount = amount % 100;
}
console.log("500 notes = " + notes500);
console.log("200 notes = " + notes200);
console.log("100 notes = " + notes100);*/


for (let i = 1; i <= 5; i++) {
    console.log(i);
}
for (let i = 1; i <= 30; i++) { console.log("day " + i + " is completed"); }
for (let i = 1; i <= 15; ++i) {
    console.log("day " + i + " is completed");
}

const persons = [1, 2, 3, 4, 5];
const totalGifts = 30;
let index = 0;
let lastReceiver;
for (let i = 1; i <= totalGifts; i++) {
    lastReceiver = persons[index];
    console.log("Gift " + i + " goes to Person " + lastReceiver);
    index = (index + 2) % persons.length;
}
console.log("Last gift goes to Person " + lastReceiver);


function cook() {
    console.log("Pour the batter into the pan.");
    console.log("Rub it round order with gareta");
    console.log("spill some oil above it then wait");
    console.log("Twist it with dosa gareta");
    console.log("At last gently serve it to anyone");
}
for (i = 1; i <= 9; i++) {
    cook();
}



function num(n) {
    if (n > 10) {
        return;
    }
    console.log(n);
    n += 1;
    num(n);
}
num(1);