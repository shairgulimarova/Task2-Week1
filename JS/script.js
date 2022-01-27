let symbols = 'ddd@bbb@ccc'
symbols = symbols.replace(/[@]/gi, '!');
console.log(symbols)



let task = 'js'
console.log(task.toUpperCase());

let taskJs= 'JS';
console.log(taskJs.toLowerCase());

let hero="I'm a hero"
console.log(hero.length);

let cardNumber = prompt("Напишите номер Вашей кредитной карты")
document.write("<h1> Номер вашей крединой карты: " + "************" + cardNumber.slice(12,16)+ "</h1>" + "<br>");