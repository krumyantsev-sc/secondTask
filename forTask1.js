//Получить сумму кубов первых n натуральных чисел
function countSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
console.log(countSum(2));