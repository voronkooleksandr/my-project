function multiply() { 
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num1 = document.getElementById("n2").value;
    num1 = parseInt(num2);

    result = num1 * num2;

    document.getElementById("out").innerHTML = result;
    
}