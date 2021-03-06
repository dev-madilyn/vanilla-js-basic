// 상수 선언
const a = 6;
const b = 2;

// 변수 선언
let myName = "madilyn";

// var도 가능... 근데 옛날에만 쓰고 이제는 const/let으로 분리하여 사용

// 콘솔 찍기
console.log(5423423);
console.log('냐냐냐');

// 연산, 변수 사용
console.log(a + b);
console.log(a * b);
console.log("hello " + myName);

myName = "jungbin"
console.log("hi " + myName);

// Boolean
const amIFat = false;
console.log(amIFat);

// Null
const mySchool = null; // defined
console.log("my school ", mySchool);

let something; // undifined
console.log("someting ", something);

// Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];
const nonsense = [1, "aa", undefined, null, false, "a"];

console.log(daysOfWeek[4]);
console.log(nonsense);

console.log(daysOfWeek);

daysOfWeek.push("sat");
console.log(daysOfWeek);

daysOfWeek.pop();
console.log(daysOfWeek);

// Object
const player = {
    name: "jungbin",
    points: 9999,
    isGood: true,
};

console.log(player);
console.log(player.name);
console.log(player["isGood"]);

player.secondName = "madilyn"; // 없던 프로퍼티도 추가 가능
console.log(player);

// 궁금한 점
// 왜 var는 안 쓰지?
// 왜 ; 세미콜론은 써도 안 써도 상관없지?

// Function
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello(player.name, 23);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(1, 4);

player.sayHalo = function(otherPersonsName) {
    console.log("halo! " + otherPersonsName)
}

player.sayHalo("친구야..");

console.log(player)

// Example: Calculator
const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiple: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    pow: function(a, b) {
        return a ** b;
    }
}

console.log(calculator.plus(1, 3));
console.log(calculator.minus(5, 2));
console.log(calculator.multiple(5, 10));
console.log(calculator.divide(10, 2));
console.log(calculator.pow(5, 3));

// If
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

/// parseInt: String -> Number
/// NaN: Not A Number
/// isNaN(): Number가 아니면 true, Number면 false를 return

if(isNaN(age) || age < 0) {
    console.log("Please enter a positive number");
} else if(age < 18) {
    console.log("You are too young. ", age);
} else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
} else {
    console.log("You can drink but be careful.");
}