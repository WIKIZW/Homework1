'use strict'

var money,
    time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses : {question1 : "question12"},
    optionalExpenses : {},
    income : [],
    savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question12 = prompt("Введите обязательную статью расходов в этом месяце");
let question22 = prompt("Во сколько обойдется?");

appData.expenses[question1] = question2;
appData.expenses[question12] = question22;

alert(appData.budget/ 30);
console.log(appData);
