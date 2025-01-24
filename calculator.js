function validar(){
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;
    var operator = document.getElementById('operador').value;

    if(num1 != '' && num2 != ''){
        var resultado = this.calcular(num1, num2, operator);
        document.getElementById("result-num").textContent = resultado;
        document.querySelector(".div-result").style.display = "flex";
        document.querySelector(".null").style.display = "none";
    }else{
        document.querySelector(".div-result").style.display = "none";
        document.querySelector(".null").style.display = "flex";
    }
}

function calcular(num1, num2, operator){

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

    return resultado;
}