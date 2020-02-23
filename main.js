// console.log("Witaj Świecie!")

// let a = 8;
// let b = 10;
let a;
let b;

const sumFunc = (a, b) => {
    let x = 2;
    a = parseInt(a);
    b = parseInt(b);
    let summ = a + b;
    // console.log(summ);
    const res = document.getElementById("result");
    // console.log(a,b);
    res.textContent = "Wynnik to: " + summ;
    return summ;
}

// sumFunc(2,7);
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function onInputA(event) {
    a = event.target.value;
    console.log(a)
}

function onInputB(event) {
    b = event.target.value;
    console.log(b)
}

input1.addEventListener("input", onInputA);
input2.addEventListener("input", onInputB);
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    sumFunc(a, b);
});