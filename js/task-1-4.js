// 4-е задание

const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
console.log(message);

// Write code under this line
if (orderPieces === 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else if (orderPieces === 1) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else if (orderPieces === 4) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else if (orderPieces === 7) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else if (orderPieces === 8) {
  message = ACCESS_DENIED;
  console.log(message);
} else if (orderPieces === 10) {
  message = ACCESS_DENIED;
  console.log(message);
} else if (orderPieces === 12) {
  message = ACCESS_DENIED;
  console.log(message);
} else if (orderPieces === null) {
  message = CANCELED_BY_USER;
  console.log(message);
}
console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
