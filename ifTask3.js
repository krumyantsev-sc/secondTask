//Даны координаты вершин треугольника и координаты точки. Нужно определить, лежит ли точка внутри треугольника, на стороне треугольника или вне треугольника.
function calculateProductVector(dot, triangleVertex1, triangleVertex2, triangleVertex3) {
    let firstProduct = (triangleVertex1.x - dot.x) * (triangleVertex2.y - triangleVertex1.y) - (triangleVertex2.x - triangleVertex1.x) * (triangleVertex1.y - dot.y);
    let secondProduct = (triangleVertex2.x - dot.x) * (triangleVertex3.y - triangleVertex2.y) - (triangleVertex3.x - triangleVertex2.x) * (triangleVertex2.y - dot.y);
    let thirdProduct = (triangleVertex3.x - dot.x) * (triangleVertex1.y - triangleVertex3.y) - (triangleVertex1.x - triangleVertex3.x) * (triangleVertex3.y - dot.y);
    return [firstProduct, secondProduct, thirdProduct];
}

function belongsToTriangle(dot, triangleVertex1, triangleVertex2, triangleVertex3) {
    let products = calculateProductVector(dot, triangleVertex1, triangleVertex2, triangleVertex3);
    if (((products[0]) > 0 && (products[1] > 0) && (products[2] > 0)) || ((products[0]) < 0 && (products[1] < 0) && (products[2] < 0))) {
        console.log("Точка внутри");
    } else if ((products[0]) === 0 || (products[1] === 0) || (products[2] === 0)) {
        console.log("Точка на стороне");
    } else {
        console.log("Точка не принадлежит");
    }
}

belongsToTriangle({x:3,y:3},{x:1,y:1},{x:5,y:1},{x:1,y:5});
belongsToTriangle({x:3,y:2},{x:1,y:1},{x:5,y:1},{x:1,y:5});
belongsToTriangle({x:3,y:0},{x:1,y:1},{x:5,y:1},{x:1,y:5});