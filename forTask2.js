//Вычислить n!
function countFactorial(n) {
    let factorial = n;
    for (let i = n - 1; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(countFactorial(6));