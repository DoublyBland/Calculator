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
    let num1, num2, operator, temp;
    let textDisplay = "0"; // hold input to use as displayf

    let display = document.getElementById("display-value");
    //console.log(num1);
    container.addEventListener('click', (e) => {
        
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton){
            return;
        }
        if(event.target.className == "number"){
    if(textDisplay == "0"){
        textDisplay = event.target.textContent;
        display.innerHTML = textDisplay;
    }
    else {
        textDisplay += event.target.textContent;
    display.innerHTML = textDisplay;
    }
        }
        else if(event.target.className == "operator"){
            if(num1 == null){
                operator = event.target.textContent;
                num1 = textDisplay;
                //display = document.getElementById("display-value");
                display.textContent = textDisplay;
                textDisplay = "0";
            }
            else {
                temp = textDisplay;
                num1 = operate(num1, temp, operator);
                operator = event.target.textContent;
                display.textContent = num1;
                textDisplay = "0";
            }
        }
        else if(event.target.className == "equals"){
            num2 = textDisplay;
            textDisplay = operate(num1, num2, operator);
            display.textContent = textDisplay;
            textDisplay = "0";
        }
        else if(event.target.className == "clear"){
            num1 = null;
            num2 = null;
            operator = null;
            textDisplay = "0"
            temp = null;
            display.textContent = textDisplay;
        }
    });
};

takeInput();