// Даны длины трех отрезков. Определить, можно ли построить из них треугольник.

function isPossibleTriangle(sides) {
    return ((sides[0] + sides[1] > sides[2]) && (sides[0] + sides[2] > sides[1]) && (sides[1] + sides[2] > sides[0]));
}

console.log(isPossibleTriangle([6,6,6]));
console.log(isPossibleTriangle([8,1,5]));
console.log(isPossibleTriangle([-1,6,6]));
console.log(isPossibleTriangle([6,4,9]));
console.log(isPossibleTriangle([1,4,5]));