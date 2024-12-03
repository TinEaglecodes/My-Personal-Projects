const display = document.getElementById("display");
function appendNumber(number){
    display.value += number;
}
function appendOperator(operator){
    display.value += operator;
}
function appendDot(){
    if (! display.value.includes('.')){
        display.value += '.';
    }
}
function clearDisplay(){
    display.value='';
}
function deleteLast(){
    display.value= display.value.slice(0, -1);
}
function calculate(){
    try {
        display.value= eval(display.value);
    } catch(e){
        display.value='ERROR'
    }   
}
function Percentage(){
    display.value= display.value/100
}