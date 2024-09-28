// Функция для отображения типов данных и их пределов
function displayTypes() {
    // Создаем переменные разных типов
    let numberVar = 42; // Числовой тип данных (Number)
    let stringVar = "Привет"; // Строковой тип данных (String)
    let boolVar = true; // Логический тип данных (Boolean)
    let nullVar = null; // Null (пустое значение)
    let undefinedVar; // Undefined (неопределенное значение)
    
    // Получаем минимальные и максимальные значения для типа Number
    let maxNumber = Number.MAX_VALUE; // Максимальное значение для типа Number
    let minNumber = Number.MIN_VALUE; // Минимальное значение для типа Number
    // Секцию для вывода информации на страницу
    let output = document.getElementById("output");
    // Выводим типы данных на страницу
    output.innerHTML = `
        <p>Тип переменной numberVar: ${typeof numberVar} (Число)</p>
        <p>Тип переменной stringVar: ${typeof stringVar} (Строка)</p>
        <p>Тип переменной boolVar: ${typeof boolVar} (Логический)</p>
        <p>Тип переменной nullVar: ${typeof nullVar} (Null)</p>
        <p>Тип переменной undefinedVar: ${typeof undefinedVar} (Undefined)</p>
        <hr>
        <p>Максимальное значение для Number: ${maxNumber}</p>
        <p>Минимальное значение для Number: ${minNumber}</p>
    `;
}
/*
 Обоснование максимальных и минимальных значений для Number:
 1. Максимальное значение (Number.MAX_VALUE) представляет собой наибольшее положительное число, которое можно хранить в типе данных Number.
    Оно равно 1.7976931348623157e+308. Это связано с тем, что тип Number реализован как число с плавающей точкой двойной точности (64 бита).
 2. Минимальное положительное значение (Number.MIN_VALUE) — это самое маленькое положительное число (5e-324), которое можно выразить в типе Number. 
    Оно связано с точностью числа с плавающей точкой, которое может быть очень малым, но не равным нулю.
*/