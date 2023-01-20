//Дано целое число k (1 <= k <= 365). Определить, каким будет k-й день года: выходным (суббота и воскресенье) или рабочим, если 1 января — понедельник.
function isWeekend(day) {
    return ((day % 7 === 0) || (day % 7 === 6));
}

console.log(isWeekend(1));
console.log(isWeekend(2));
console.log(isWeekend(3));
console.log(isWeekend(6));
console.log(isWeekend(7));
console.log(isWeekend(11));
console.log(isWeekend(13));
console.log(isWeekend(14));