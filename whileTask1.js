//Найти 15 первых натуральных чисел, делящихся нацело на 19 и находящихся в интервале, левая граница которого равна 100.
function findNumbers() {
    let k = 0;
    let num = 100;
    let numbers = [];
    while(k < 15) {
        if (num % 19 === 0) {
            k++;
            numbers.push(num);
        }
        num++;
    }
    return numbers
}
console.log(findNumbers());