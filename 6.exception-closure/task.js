function parseCount(meaning) {

    if (isNaN(parseInt(meaning))) {
        throw new Error("Невалидное значение");
    } else return parseInt(meaning)
}

function validateCount(meaning) {
    try {
        return parseCount(meaning)
    } catch(err) {
       return err
    }
}

class Triangle {
    constructor(a, b, c) {

        if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }

    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC)
    }

    getArea() {
        let perimeter = this.getPerimeter() * 0.5;
        return parseFloat((Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC))).toFixed(3))
    }
};

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c)
    } catch {
        let triangleErr = {};
        triangleErr.getArea =  function() {return "Ошибка! Треугольник не существует"};
        triangleErr.getPerimeter = function() { return "Ошибка! Треугольник не существует"};
        return triangleErr

    }}