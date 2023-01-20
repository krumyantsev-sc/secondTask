//Дано натуральное число. Определить, является ли оно членом последовательности Фибоначчи
// (первый и второй члены последовательности равны 1, каждый следующий равен сумме двух предыдущих).

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function isFibNumber(num) {
    let k = 1;
    let fibNum = fib(1);
    while (fibNum <= num) {
        fibNum = fib(k);
        if (fibNum === num) {
            return true;
        }
        k++;
    }
    return false;
}

console.log(isFibNumber(4));
console.log(isFibNumber(5));