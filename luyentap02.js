function squareNumber(n) {
    n = parseFloat(n);
    let sqrt = n * n;
    document.getElementById("result").innerHTML = "Bình phương = " + sqrt;
    sqrt;
}

function circleArea(radius) {
    radius = document.getElementById("radius").value;
    let area = Math.PI * radius * radius;
    document.getElementById("area").innerHTML = "Diện tích bằng : " + area;
}

function circlePerimeter(radius) {
    radius = document.getElementById("radius").value;
    let perimeter = Math.PI * 2 * radius;
    document.getElementById("perimeter").innerHTML =
        "Chu vi  bằng : " + perimeter;
}

function factorialNumber(number) {
    do {
        number = prompt("Input number want to factorials ");
        number = Number(number);
    } while (isNaN(number) || !Number.isInteger(number) || number <= 0);

    let factorial = 1;

    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    if (number > 0) {
        document.getElementById("factorial").innerHTML = "Giai thừa = " + factorial;
    } else {
        document.getElementById("factorial").innerHTML = "Nhập vào số nguyên > 0";
    }

    return factorial;
}

function checkNumber(num) {
    num = prompt("Input a number");
    num = Number(num);
    if (isNaN(num)) {
        alert("Bạn nhập vào không phải là số");
    } else alert("Bạn nhập vào là số");
}

function inputNumber(n1, n2, n3) {
    do {
        n1 = prompt("Input number1");
        n1 = Number(n1);
    } while (isNaN(n1) || !Number.isInteger(n1));

    do {
        n2 = prompt("Input number2");
        n2 = Number(n2);
    } while (isNaN(n2) || !Number.isInteger(n2));

    do {
        n3 = prompt("Input number3");
        n3 = Number(n3);
    } while (isNaN(n3) || !Number.isInteger(n3));
    max = n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
    min = n1 < n2 ? (n1 < n3 ? n1 : n3) : n2 < n3 ? n2 : n3;
    document.getElementById("max").innerHTML = "max = " + max;
    document.getElementById("min").innerHTML = "min = " + min;
}

function checkPositiveInteger(numb) {
    numb = prompt("Enter a positive Integer");
    numb = Number(numb);
    if (Number.isInteger(numb) && numb > 0) {
        alert("TRUE ");
    } else alert("FALSE");
}

function changPlace(n1, n2) {
    do {
        n1 = prompt("Input number 1 is integer");
        n1 = Number(n1);
    } while (isNaN(n1) || !Number.isInteger(n1));

    do {
        n2 = prompt("Input number 2 is integer");
        n2 = Number(n2);
    } while (isNaN(n2) || !Number.isInteger(n2));

    let t;
    t = n1;
    n1 = n2;
    n2 = t;
    document.getElementById("num1").innerHTML = "number1 = " + n1;
    document.getElementById("num2").innerHTML = "number2 = " + n2;
    return n1, n2;
}

function reverseArray(arr) {
    arr = [];
    for (i = 1; i <= 10; i++) {
        do {
            input = prompt("Input a integer" + i);
            input = Number(input);
        } while (isNaN(input) || !Number.isInteger(input));
        arr.push(input);
    }

    let newArray = arr.reverse();
    document.getElementById("array").innerHTML = newArray.join(" ");
}

function checkFrequency(character) {
    let arr1 = prompt("Enter a string character");
    arr1 = arr1.split("");
    character = prompt("Enter a character: ");
    count = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (character == arr1[i]) {
            count++;
        }
    }
    if (count > 0) {
        alert(`số lần xuất hiện của ký tự ${character} là ${count} lần`);
    } else {
        alert(`Không có kí tự ${character} trong mảng`);
    }
}