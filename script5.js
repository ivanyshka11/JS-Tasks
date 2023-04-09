// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function sumParams(a, b) {
    if (b == undefined || a == undefined) {
        return 'введите два параметра'
    } else if (typeof b !== 'number' || typeof a !== 'number') {
        return 'введенные данные не являются числами'
    } else { return a + b }
}

console.log(sumParams(1, 'b'))

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
function square(a) {
    if (typeof a !== 'number') {
        return console.error
    } else { console.log(a * a) }
}

square(5)

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let userNumber = prompt('введите число от 1 до 10');
Number(userNumber)

let userGame = (userNumber) => {
    let randomInteger = getRandomInteger(1, 10)
    if (userNumber <= 0 || userNumber > 10) {
        return console.log('ваше число меньше 1 или больше 10')
    } else if (userNumber == randomInteger) {
        return console.log('вы выйграли')
    } else {
        return console.log(`вы проиграли, ваше число ${userNumber}, а выпало число ${randomInteger}`)
    }
}

userGame(userNumber)

// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const array = ['Ivan', 'Artem', 'Alexandr', 'Daniel', 'Tom', 'Martin'];

const newArray = array.map(copyArr = item => item)

console.log(newArray);


// Задание 5

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:


let objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}



sumObjectValues = (object) => {
    let sum = 0;
    for (let property in object) {
        if (typeof object[property] == 'number') {
            sum = sum + object[property]
        }
    }
    return sum
}

console.log(sumObjectValues(objectWithNumbers))