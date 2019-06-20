let money = +prompt ('Ваш бюджет на месяц?', '');
let time = prompt ('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:false
};





alert(appData.budget / 30);


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt( "Во сколько обойдется?", '');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' ) {
        console.log ('done');
        appData.expenses[a] = b;
    }else{
        console.log ('error');
        i--;
    }
     
};


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

appData.moneyPerDay = appData.budget / 30;

alert ('Бюджет на день составляет: ' + appData.moneyPerDay + 'грн');

if (appData.moneyPerDay < 500) {
    console.log ('Бедняга!');
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log ('Терпимо');
} else if (appData.moneyPerDay > 1000) {
    console.log ('Хорошо живешь!');
}