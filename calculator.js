function calcular(){
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;
    var operator = document.getElementById('operador').value;

    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);

    if(operator == '+'){
        var resultado = num1 + num2;
    }

    if(operator == '-'){
        var resultado = num1 - num2;
    }

    if(operator == '/'){
        var resultado = num1 / num2;
    }

    if(operator == '*'){
        var resultado = num1 * num2;
    }

    document.getElementById("result-num").textContent = resultado;
    document.querySelector(".div-result").style.display = "flex";
    console.log(resultado)
}