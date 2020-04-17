'use strict'

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
        question2 = prompt("Во сколько обойдется?");

        appData.expenses[question1] = question2;
}

alert(appData.budget/ 30);