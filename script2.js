// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let random = prompt("");
if (random == 'hidden') {
    let random = visible;
}
if (random !== 'hidden') {
    let random = 'hidden';
};

// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let myNumber = prompt('');

if (myNumber === 0) {
    myNumber = 1
};
if (myNumber < 0) {
    myNumber = 'Less then zero'
};
if (myNumber > 0) {
    myNumber = myNumber * 10;
};

alert(myNumber)
//Запросите у пользователя число и запишите его в переменную. 

//(Не забывайте, что от пользователя мы всегда получаем строку).

//Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.

let userNumber = prompt('Введите число');

Number(userNumber);

let result = 12;

if (userNumber < 5) {
    result = 0;
} else {
    result = 1;
};

alert(result);

// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел

let userNumberСomparison = prompt('Введите число');
let userNumberСomparison2 = prompt('Введите число');

Number(userNumberСomparison);

Number(userNumberСomparison2);

if (userNumberСomparison > userNumberСomparison2) {
    console.log(userNumberСomparison)
} else {
    console.log(userNumberСomparison2)
}
if (userNumberСomparison === userNumberСomparison2) {
    console.log('Числа равны')
};

//Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = prompt("Число");
let num2 = prompt('число');

Number(num1);
Number(num2);

if (num1 % num2 == 0) {
    console.log('Кратное')
} else {
    console.log("Некратное")
};

//Запросить у пользователя средний балл, записать в переменную.

//Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let averageScore = prompt("Средний балл")

Number(averageScore);

if (averageScore < 5) {
    console.log('Двоечник, иди учись!')
};

if (averageScore > 4 < 9) {
    console.log("Неплохо, но давай еще поднажмем!")
};

if (averageScore > 8) {
    console.log("Ого, да ты настоящий отличник!")
};

// Запросить у пользователя ответы на 2 вопроса:

// - балл за экзамен (от 0 до 100)

// - количество выполненных проектов (от 0 и больше)

// Вывести в консоль общий выпускной балл в соответствии с этими значениями:

// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let userExam = prompt("- балл за экзамен (от 0 до 100)");
let userProject = prompt("- количество выполненных проектов (от 0 и больше)");

Number(userExam);
Number(userProject);

if (userExam > 90, userProject > 10) {
    console.log("Общий балл 100")
};
if (userExam < 90 > 75, userProject > 5) {
    console.log("Общий балл 90")
};
if (userExam > 50 < 75, userProject > 2) {
    console.log("Общий балл 75")
} else {
    console.log("Общий балл 0")
}

// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let Days = prompt("Введите кол-во дней");

let PriceDay = 40 * Days;

Number(Days);
Number(PriceDay);

if (Days > 2 < 7) {
    PriceDay = 40 * Days - 20;
}
if (Days > 6) {
    PriceDay = 40 * Days - 50;
}
if (Days < 3) {
    PriceDay = 40 * Days;
}

//Создать переменную num и записать в нее число, например 10.

// С помощью цикла 10 раз увеличивать значение этой переменной на 1. Итоговый результат вывести в консоль.

for (let num = 10; num < 20; num++) {
    console.log(num + 1)
}

// Увеличивая счетчик цикла на 2, нужно 5 раз выполнить действия:

// - запрашивать у пользователя ввод числа

// - проверять, равно ли это число 10. Если равно, выводить в консоль "Равно 10". Иначе выводить "Не равно 10"

for (let i = 0; i < 10; i = i + 2) {
    let userNumber10 = prompt('Число');
    Number(userNumber10);
    if (userNumber10 == 10) {
        console.log('Равно 10');
    } else {
        console.log('Не равно 10')
    };
}

// С помощью цикла вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...


// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

for (let y = 0; y < 100; y++) {
    console.log(y ** 2)
}

//Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for (let p = 1; p <= 100; p++) {

    if (p % 3 == 0 && p % 5 == 0) {

        console.log('FizzBuzz');
    } else if (p % 3 == 0) {

        console.log('Fizz');
    } else if (p % 5 == 0) {

        console.log('Buzz');
    } else {
        console.log(p)
    }
}