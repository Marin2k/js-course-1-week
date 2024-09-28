// Функция для расчета объема икосаэдра на основе длины ребра
function calculateIcosahedronVolume(edgeLength) {
    // Формула для объема икосаэдра: (5 * (3 + sqrt(5)) / 12) * edgeLength^3
    return (5 * (3 + Math.sqrt(5)) / 12) * Math.pow(edgeLength, 3);
}

// Основная функция для обработки ввода и отображения результата
function calculateVolume() {
    // Получаем длину ребра из поля ввода
    let edgeLength = document.getElementById("edgeLength").value;

    // Преобразуем строку в число
    edgeLength = parseFloat(edgeLength);

    // Проверяем, введено ли значение и корректно ли оно
    if (isNaN(edgeLength) || edgeLength <= 0) {
        // Если значение некорректно, выводим сообщение об ошибке
        document.getElementById("result").innerHTML = "Пожалуйста, введите корректную длину ребра.";
        return; // Прекращаем выполнение, если значение некорректно
    }

    // Вызываем функцию для расчета объема с введённой длиной ребра
    let volume = calculateIcosahedronVolume(edgeLength);

    // Выводим результат на страницу с округлением до 2 знаков после запятой
    document.getElementById("result").innerHTML = "Объем икосаэдра: " + volume.toFixed(2) + " куб. ед.";
}
