/* Дано целое число k (1 k 365). Определить, каким днем недели (понедельником, вторником, ..., субботой или воскресеньем)
является k-й день невисокосного года, в котором 1 января – понедельник */

function calculateWeekDay(day) {
    switch (day % 7) {
        case 1:
            return "понедельник";
        case 2:
            return "вторник";
        case 3:
            return "среда";
        case 4:
            return "четверг";
        case 5:
            return "пятница";
        case 6:
            return "суббота";
        case 0:
            return "воскресенье";
    }
}

console.log(calculateWeekDay(1));
console.log(calculateWeekDay(2));
console.log(calculateWeekDay(3));
console.log(calculateWeekDay(6));
console.log(calculateWeekDay(7));
console.log(calculateWeekDay(11));
console.log(calculateWeekDay(13));
console.log(calculateWeekDay(14));