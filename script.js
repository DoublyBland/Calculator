function add(a,b) {
    return (parseInt(a)+parseInt(b));
}
function subtract(a,b) {
    return (parseInt(a)-parseInt(b));
}
function multiply(a,b) {
    return (parseInt(a)*parseInt(b));
}
function divide(a,b) {
    return (parseInt(a)/parseInt(b));
}
function power(a,b) {
    return (parseInt(a)**parseInt(b));
}
function operate(num1, num2, operator) {
    let result;
    if(operator == "+"){
        result = add(num1, num2)
    }
    else if (operator == "-"){
        result = subtract(num1, num2)
    }
    else if (operator == "x"){
       result =  multiply(num1, num2)
    }
    else if (operator == "%"){
       result = divide(num1, num2)
    }
    else if (operator == "^"){
        result = power(num1, num2);
    }
    else {
        return "ERROR";
    }
    return result;
}


function takeInput(){
    const container = document.getElementById("calculator");
    let num1, num2, operator;
    //console.log(num1);
    container.addEventListener('click', (e) => {
        
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton){
            return;
        }
        if(event.target.className == "number"){
    const display = document.getElementById("display-value");
    if(display.textContent == "0"){
        display.innerHTML = event.target.textContent;
    }
    else {
    display.innerHTML += event.target.textContent;
    }
        }
        else if(event.target.className == "operator"){
            if(num1 == null){
                operator = event.target.textContent;
                num1 = display.textContent;
                display = document.getElementById("display-value");
                display.textContent = "0";
            }
        }
        else if(event.target.className == "equals"){
            num2 = display.textContent;
            display = document.getElementById("display-value");
            display.textContent = operate(num1, num2, operator);
        }
        else if(event.target.className == "clear"){
            num1 = null;
            num2 = null;
            operator = null;
            display = document.getElementById("display-value");
            display.textContent = "0";
        }
    });
};

takeInput();