// Мастям игральных карт условно присвоены следующие порядковые номера: масти "пики" — 1, масти "трефы" — 2, масти "бубны" — 3,
// масти "червы" — 4, а достоинству карт: "валету" — 11, "даме" — 12, "королю" — 13, "тузу" — 14
// (порядковые номера карт остальных достоинств соответствуют их названиям: "шестерка", "девятка" и т. п.). По заданным номеру масти m (1 m 4) и
// номеру достоинства карты k (6 k 14) определить полное название (масть и достоинство) соответствующей карты в виде "Дама пик", "Шестерка бубен" и т. п.
function countCardName(num) {
    switch (num) {
        case 6:
            return "шестёрка";
        case 7:
            return "семёрка";
        case 8:
            return "восьмёрка";
        case 9:
            return "девятка";
        case 10:
            return "десятка";
        case 11:
            return "валет";
        case 12:
            return "дама";
        case 13:
            return "король";
        case 14:
            return "туз";
        default:
            return "Неверный номер";
    }
}

function calculateSuitName(num) {
    switch (num) {
        case 1:
            return "пик";
        case 2:
            return "треф";
        case 3:
            return "бубен";
        case 4:
            return "черв";
    }
}

function printCardName(cardNum, suitNum) {
    console.log(countCardName(cardNum) + " " + calculateSuitName(suitNum));
}

printCardName(11, 2);
printCardName(6, 4);
printCardName(12, 1);
