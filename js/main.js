'use strict'

let money, time;

function start() {
    money = +prompt ('Ваш бюджет на месяц?', '');
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ('Ваш бюджет на месяц?', '');
    }

}
start();

let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:true
    
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt( "Во сколько обойдется?", '');

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' ) {
            console.log ('done');
            appData.expenses[a] = b;
        }else{   
            i--;
        }
         
    };
}
chooseExpenses();


// let i=0;
// while (i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt( "Во сколько обойдется?", '');
//        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '') {
//         console.log ('done');
//         appData.expenses[a] = b;
//        } else {
//            console.log ('error');
//            i--;
//        }
//     i++;
// };


// let i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt( "Во сколько обойдется?", '');
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '') {
//         console.log ('done');
//         appData.expenses[a] = b;
//        } else {
//            console.log ('error');
//            i--;
//        }
//     i++;
// }
// while (i<2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ('Бюджет на день составляет: ' + appData.moneyPerDay + 'грн');
}
detectDayBudget();

 
function detectLevel() {
    if (appData.moneyPerDay < 500) {
        console.log ('Бедняга!');
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
        console.log ('Терпимо');
    } else if (appData.moneyPerDay > 1000) {
        console.log ('Хорошо живешь!');
    } else {
        console.log ('Ошибочка!');
    } 
}

function detectLevel()

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();