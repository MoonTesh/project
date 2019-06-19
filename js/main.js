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

let expense1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer1 = prompt( "Во сколько обойдется?", ''),
    expense2 = prompt( "Введите обязательную статью расходов в этом месяце", '' ),
    answer2 = prompt( "Во сколько обойдется?", '');


appData.expenses.expense1 = answer1;
appData.expenses.expense2 = answer2;


alert(appData.budget / 30);

let a = 1; let b = 2;
 console.log( a && b ); 