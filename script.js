//constants
const calculatorKeys=document.querySelectorAll('.key')
const numberKeys=document.querySelectorAll('.number')
const actionKeys=document.querySelectorAll('.action')
const multiplier=document.querySelector('#times')
const divider=document.querySelector('#divide')
const minus=document.querySelector('#minus')
const plus=document.querySelector('#plus')
const equals=document.querySelector('#equals')
const allClear=document.querySelector('#AC')
const percent=document.querySelector('#percent')
let inputHolder='';
let expressionHolder='';
let newNumber=false;
let calculatorWindow=document.querySelector('#window');

//functions
const numberPress=function(){
    if(expressionHolder!=''&&newNumber===true){
        calculatorWindow.textContent=`${this.textContent}`
        newNumber=false;
    }
    else{
        if(calculatorWindow.textContent.length<13){
            calculatorWindow.textContent=`${calculatorWindow.textContent}${this.textContent}`
        }
        else{
            calculatorWindow.textContent='INPUT OVERFLOW!'
        }
        
    }
}
    

const colorChange=function(){
    this.style.background='grey';
}

const colorRevert=function(){
    this.style.background='lightgrey';
}

const colorChangeRed=function(){
    this.style.background='palevioletred';
}

const colorRevertRed=function(){
    this.style.background='red';
}

const evaluate=function(){
    if(expressionHolder==='+'){
        let numVersion=parseFloat(inputHolder)+parseFloat(calculatorWindow.textContent);
        inputHolder=calculatorWindow.textContent;
        calculatorWindow.textContent=numVersion;
        return numVersion;
    }
    else if(expressionHolder==='-'){
        let numVersion=parseFloat(inputHolder)-parseFloat(calculatorWindow.textContent)
        inputHolder=calculatorWindow.textContent;
        calculatorWindow.textContent=numVersion;
        console.log(numVersion);
        return numVersion;
    }
    else if(expressionHolder==='/'){
        let numVersion=parseFloat(inputHolder)/parseFloat(calculatorWindow.textContent)
        inputHolder=calculatorWindow.textContent;
        calculatorWindow.textContent=numVersion;
        console.log(numVersion);
        return numVersion;
    }
    else if(expressionHolder==='x'){
        let numVersion=parseFloat(inputHolder)*parseFloat(calculatorWindow.textContent)
        inputHolder=calculatorWindow.textContent;
        calculatorWindow.textContent=numVersion;
        console.log(numVersion);
        return numVersion;
    }
}

//event listeners

numberKeys.forEach(key => {
    key.addEventListener('click',numberPress);
});

numberKeys.forEach(number => {
    number.addEventListener('mousedown',colorChange);
    number.addEventListener('mouseup',colorRevert);
});

actionKeys.forEach(action => {
    action.addEventListener('mousedown',colorChangeRed);
    action.addEventListener('mouseup',colorRevertRed);
});

plus.addEventListener('click', function(){
    evaluate;
    inputHolder=calculatorWindow.textContent;
    expressionHolder='+'
    newNumber=true;
})

minus.addEventListener('click', function(){
    evaluate;
    inputHolder=calculatorWindow.textContent;
    expressionHolder='-'
    newNumber=true;
})

divider.addEventListener('click', function(){
    evaluate;
    inputHolder=calculatorWindow.textContent;
    expressionHolder='/'
    newNumber=true;
})

multiplier.addEventListener('click', function(){
    evaluate;
    inputHolder=calculatorWindow.textContent;
    expressionHolder='x'
    newNumber=true;
})

percent.addEventListener('click', function(){
    calculatorWindow.textContent=calculatorWindow.textContent/100;
})

percent.addEventListener('click', function(){
    calculatorWindow.textContent=calculatorWindow.textContent/100;
})

dot.addEventListener('click', function(){

})

equals.addEventListener('click', function(){
    evaluate();
})

allClear.addEventListener('click', function(){
    calculatorWindow.textContent='';
    expressionHolder='';
    newNumber=true;
})








