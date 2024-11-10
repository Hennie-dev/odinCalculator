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
const backSpaceButton = document.querySelector('#backSpaceButton');
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
                outputString.textContent = NaN;
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

    console.log(e);
    const event = e.target;
    console.log(event);
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
            if(activeNumber == 1 && number1.includes('.') == false){
                if(number1.length <= 18){
                    number1 = number1 + '.';
                    outputString.textContent = number1;}
                    else break;
            }else{
                if(activeNumber == 2 && number2.includes('.')==false){
                    if(number2.length <= 18){
                        number2 = number2 + '.';
                        outputString.textContent = number2;}
                        else break;
                }
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

const processKeydown = (e) => {

        e.preventDefault();
        const event = e.key;
        switch(event){
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
                if(activeNumber == 1 && number1.includes('.') == false){
                    console.log(number1.includes('.'));
                    if(number1.length <= 18){
                        number1 = number1 + '.';
                        outputString.textContent = number1;}
                        else break;
                }else{
                    if(number2.includes('.') == false){
                        console.log(number1.includes('.'));
                        if(number2.length <= 18){
                            number2 = number2 + '.';
                            outputString.textContent = number2;}
                            else break;
                    }
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
                break;

            case 'Enter':
                console.log('number1: '+ number1);
                console.log('number2: '+ number2);
                console.log('currfunction: '+ currentFunction);
                operate(number1, number2, currentFunction);
                break;
            case 'Backspace':
                eraseLast();
                break;
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

const eraseLast = () => {
    if(activeNumber == 1){
        if(number1.length > 1){
        number1 = number1.slice(0,-1);
        outputString.textContent = number1;
        }else{
            number1 = '';
            outputString.textContent = '0';
        }
    } 
    else if(activeNumber ==2){
        if(number2.length >1 ){
            number2 = number2.slice(0,-1);
            outputString.textContent = number2;
        }else{
            number2 = '';
            outputString.textContent = '0';
        }
    }
}

//Event listeners
buttonContainer.addEventListener('click',(e)=>processInput(e));
clearButton.addEventListener('click', clear);
clearEverythingButton.addEventListener('click',clearEverything);
backSpaceButton.addEventListener('click', eraseLast);
window.addEventListener('keydown', (e) =>{processKeydown(e)});