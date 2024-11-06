//Declaration of number variables
let number1 = '';
let number2 = '';
let currentFunction = '';
let result = '';
//Number swop variable
let activeNumber = 1;
//Control variables
const buttonContainer = document.querySelector('#inputButtons');
const outputString = document.querySelector('#displayArea');
const clearButton = document.querySelector('#clearButton');
const clearEverythingButton = document.querySelector('#clearEverythingButton');
//Setting initial display value
outputString.textContent = 0;
//Calculate result
const operate = (num1, num2, func) => {

    switch(func){
        case "+":
            result = String(Number(num1)+Number(num2));
            activeNumber = 1;
            if(result.length > 10){
                result = Number(result).toExponential(3);
            }
            outputString.textContent = result;
            number1 = '';
            number2 = '';
            currentFunction ='';
            break;
        case "-":
            result = String(Number(num1)-Number(num2));
            activeNumber = 1;
            outputString.textContent = result;
            if(result.length > 10){
                result = Number(result).toExponential(3);
            }
            number1 = '';
            number2 = '';
            currentFunction ='';
            break;
        case "/":
            result = String(Number(num1)/Number(num2));
            activeNumber = 1;
            if(result.length > 10){
                result = Number(result).toExponential(3);
            }
            outputString.textContent = result;
            number1 = '';
            number2 = '';
            currentFunction ='';
            break;
        case "*":
            result = String(Number(num1)*Number(num2));
            activeNumber = 1;
            if(number2 == '0' || number2 == ''){
                outputString.textContent = Nan;
                number1 = '';
                number2 = '';
                currentFunction ='';
            }else
            if(result.length > 10){
                result = Number(result).toExponential(3);
            }
            outputString.textContent = result;
            number1 = '';
            number2 = '';
            currentFunction ='';
            break;              
    }
}

//Events
const processInput = (e) => {

    const event = e.target;
    switch(event.id){
        case '1':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '1';
                    outputString.textContent = number1;} 
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '1';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '2':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '2';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '2';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '3':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '3';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '3';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '4':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '4';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '4';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '5':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '5';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '5';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '6':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '6';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '6';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '7':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '7';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '7';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '8':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '8';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '8';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '9':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '9';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '9';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '0':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '0';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '0';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '.':
            if(activeNumber == 1){
                if(number1.length <= 18){
                    number1 = number1 + '.';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(number2.length <= 18){
                    number2 = number2 + '.';
                    outputString.textContent = number2;}
                    else break;
            }
            break;
        case '+':
            if(outputString.textContent == result){
                number1 = result;
                activeNumber = 2;
                currentFunction = '+';
            }
            else if(activeNumber == 2){
                number1 = Number(number1) + Number(number2);
                outputString.textContent = number1;
                number2 = '';
            }
            else{
                currentFunction = '+';
                activeNumber = 2;
            }
            break;
        case '-':
            if(outputString.textContent == result){
                number1 = result;
                activeNumber = 2;
                currentFunction = '-';
            }
            else if(activeNumber == 2){
                number1 = Number(number1) - Number(number2);
                outputString.textContent = number1;
                number2 = '';
            }
            else{
                currentFunction = '-';
                activeNumber = 2;
            }
            break;
        case '*':
            if(outputString.textContent == result){
                number1 = result;
                activeNumber = 2;
                currentFunction = '*';
            }
            else if(activeNumber == 2){
                number1 = Number(number1) * Number(number2);
                outputString.textContent = number1;
                number2 = '';
            }
            else {
                currentFunction = '*';
                activeNumber = 2;
            }
            break;
        case '/':
            if(outputString.textContent == result){
                number1 = result;
                activeNumber = 2;
                currentFunction = '/';
            }
            else if(activeNumber == 2){
                number1 = Number(number1) / Number(number2);
                outputString.textContent = number1;
                number2 = '';
            }
            else{
                currentFunction = '/';
                activeNumber = 2;
            }
            break;
        case '=':
            operate(number1, number2, currentFunction);
        }         
    }


const clear = () => {
    if(activeNumber == 1){
        number1 ='';
        outputString.textContent = '0';
    }else
    number2 = '';
    outputString.textContent = '0';
}

const clearEverything = () => {
    number1 = '';
    number2 = '';
    currentFunction ='';
    activeNumber = 1;
    outputString.textContent = '0';
}

//Event listeners
buttonContainer.addEventListener('click',(e)=>processInput(e));
clearButton.addEventListener('click', clear);
clearEverythingButton.addEventListener('click',clearEverything);