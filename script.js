"use strict";



let title = prompt("Как называется ваш проект?", "newproject");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?", "Простые");
console.log(screens);

let screenPrice = prompt("Сколько будет стоить данная работа?", "500");
console.log(screenPrice);

let adaptive = confirm("Нужен ли адаптив на сайте?","Да");
console.log(!!"");


let service1 = prompt("Какой дополнительный тип услуги нужен?","Корекция");
console.log(service1);
let servicePrice1 = prompt("Сколько это будет стоить?","100");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?","Доставка");
console.log(service2);
let servicePrice2 = prompt("Сколько это будет стоить?","50");
console.log(servicePrice2);

let srvPrice = 10.5;
console.log(parseFloat(srvPrice));

let fullPrice = screenPrice + servicePrice1 + servicePrice2 + adaptive;
console.log(fullPrice);


let servicePresentPrice = confirm("servicePercentPrice = fullPrice - srvPrice");
console.log(servicePresentPrice);



/*
esli (vuhodn) {radyemsya i spim;
               potyagivaemsa;
            }
               inahe {
                   ymuvaemsya;
                   odevaemsya;
                   rabitaem;
               }

*/

