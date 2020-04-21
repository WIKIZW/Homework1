'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
            question2 = prompt("Во сколько обойдется?");
    
        if ( (typeof(question1))=== 'string' && (typeof(question1)) != null && (typeof(question2)) != null
            && question1 != '' && question2 != '' && question1.length < 50)  {
                console.log("done");
                appData.expenses[question1] = question2;
        } else {
            console.log("Error!");
        }
    }
}
chooseExpenses();

// Variant with while:
// let i = 0;
// while (i < 2) {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
//         question2 = prompt("Во сколько обойдется?");
    
//         if ( (typeof(question1))=== 'string' && (typeof(question1)) != null && (typeof(question2)) != null
//         && question1 != '' && question2 != '' && question1.length < 50)  {
//             console.log("done");
//             appData.expenses[question1] = question2;
//     } else {
//         console.log("Error!");
//     }

//     i++;
// }

// Variant with do...while:
// let i = 0;
// do {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
//         question2 = prompt("Во сколько обойдется?");

//     if ( (typeof(question1))=== 'string' && (typeof(question1)) != null && (typeof(question2)) != null
//         && question1 != '' && question2 != '' && question1.length < 50)  {
//             console.log("done");
//             appData.expenses[question1] = question2;
//     } else {
//         console.log("Error!");
//     }

//     i++;
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/ 30).toFixed();

    alert("Everyday budget: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimal level");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Medium level");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High level");
    } else {
        console.log("Something went wrong!");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
    }
}
checkSavings();

let optionalExpensesAnsw;

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        optionalExpensesAnsw = prompt("Статья необязательных расходов?");
        if (typeof(optionalExpensesAnsw) === "string" && typeof(optionalExpensesAnsw) != null && typeof(optionalExpensesAnsw) != '') {
            appData.optionalExpenses[i] = optionalExpensesAnsw;
        } else {
            alert("Информация введена неверно!");
            i--;
        }
    }
}
chooseOptExpenses();