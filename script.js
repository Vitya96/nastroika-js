

const potato = 20;
const peelPotato = function (a) {
    if (a > 0) {
        console.log("Картошка №" + a + "почищена");
    }
}

peelPotato(potato);

var a = 10;
var b = 20;
function plus(first, second, third, about) {
    var c = first + second + third;
    console.log(about + c + "");
};
function minus(first, second) {
    var c = first - second;
    console.log("result = " + c + "");
};

function stepenb(number, stepen) {
    console.log("number" + Math.pow(number, stepen));
}
stepenb(5, 3);



plus(50.8, 40.12, 60.68, "посчитать хрень = ");




//let lang = prompt('ru, en', "en");//Вивел переменну юкоторая принимает 2 значения ru en
//console.log(lang);


let screens = prompt("Введите название типов екранов ");
console.log(" Длинна строки " + screens.length);          //Вывести в консоль длину строки screens
console.log(" Строка  с нижним регистром " + screens.toLowerCase());
console.log("Розьив строки на масив" + screens.split());
let title = prompt("строка с названием проект");
console.log("Назвние проекта " + title);

let screenPrice = prompt("любое число");
console.log("Любое число " + screenPrice);


let fullPrice = prompt("сколько хотите заработать");
console.log("Хочу столько заработаь " + fullPrice);

console.log("Любые числа вместе " + screenPrice + fullPrice);

let adaptive = prompt("булевое значение");
console.log("Значение да нет " + adaptive);

let rollback = prompt("Какой процент отката?");
console.log("Такой процент отката" + rollback);

let otkat = prompt("Процент отката посреднику ");
console.log(fullPrice * (rollback / 100));