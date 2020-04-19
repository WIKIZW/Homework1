'use strict'

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
};

// Variant with for:
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

appData.moneyPerDay = appData.budget/ 30;

alert("Everyday budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium level");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level");
} else {
    console.log("Something went wrong!");
}