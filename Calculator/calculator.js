let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let sign = document.querySelector("#sign");
let equal = document.querySelector("#equal");
let ans = document.querySelector("#ans");
var res;

equal.addEventListener('click', function calc(){
    if (num1.value == "" || num2.value == ""){
        alert("Please input a Number!");
    }else {
        switch(sign.value){
            case "+":
                res = parseInt(num1.value) + parseInt(num2.value);
                break;

            case "-":
                res = parseInt(num1.value) - parseInt(num2.value);
                break;

            case "*":
                res = parseInt(num1.value) * parseInt(num2.value);
                break;

            case "/":
                res = parseInt(num1.value) / parseInt(num2.value);
                break;

            case "%":
                res = parseInt(num1.value) % parseInt(num2.value);
                break;

            default:
                res = "error!";
                break;
        }
    }ans.innerHTML = res;
});
