// 1° - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World");

// 2° - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 56;
const numberTwo = 43;
const sum = numberOne + numberTwo;
alert(`A soma de ${numberOne} + ${numberTwo} = ${sum}`);

/* 3° - Crie um script que declare uma variável e verifique se o seu valor é um número. 
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
  Dica: Para saber o tipo de dado você pode usar o operador `typeof`
*/

const number = 3;
const typeOfNumber = typeof number === "number";
const checkNumber = typeOfNumber ? "É um número" : "Não é um número";
alert(number + ": " + checkNumber);

// 4° - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const string = "três";
const typeOfString = typeof string === "string";
const checkString = typeOfString ? "É uma string" : "Não é uma string";
alert(string + ": " + checkString);

// 5° - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const boolean = true;
const isBoolean = typeof boolean === "boolean";
const checkBoolean = isBoolean ? alert("É um booleano") : alert("Não é um booleano");

// 6° - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num1 = 9;
let num2 = 3;
let subtraction = num1 - num2;
alert(`A subtração entre ${num1} - ${num2} = ${subtraction}`);

// 7° - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let n1 = 90;
let n2 = 24;
let multipliction = n1 * n2;
alert(`A multiplicação entre ${n1} - ${n2} = ${multipliction}`);

// 8° - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let number1 = 78;
let number2 = 8;
let division = number1 / number2;
alert(`A divisão entre ${number1} - ${number2} = ${division}`);

// 9° - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const input = 55;
const isPair = input % 2 === 0 ? alert(input + " É um número par") : alert(input + " Não é um número par");

// 10° - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const userNumber = 11;
if (userNumber % 2 === 1) {
  alert(userNumber + " É um número ímpar");
} else {
  alert(userNumber + " Não é um número ímpar");
}