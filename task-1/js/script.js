// Функция, использующая prompt и alert для приветствия
function greetUserPrompt() {
    // prompt выводит окно для ввода имени
    let username = prompt("Введите ваше имя:");
    // Если пользователь ввел имя
    if (username) {
        // alert выводит приветствие
        alert(`Привет, ${username}!`);
    } else {
        // Если пользователь ничего не ввел
        alert("Вы не ввели имя.");
    }
}
// Функция для вывода имени из input в тег <p> на странице
function greetUserInput() {
    // Получаем значение из поля input
    let username = document.getElementById("username").value;
    // Проверяем, ввел ли пользователь имя
    if (username) {
        // Если имя введено, выводим его в тег <p>
        document.getElementById("greeting").innerText = `Привет, ${username}!`;
    } else {
        // Если поле пустое, просим ввести имя
        document.getElementById("greeting").innerText = "Пожалуйста, введите ваше имя.";
    }
}