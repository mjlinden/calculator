
const display = document.querySelector('.calculator__display');
const keys = document.querySelector('.calculator__keys');

let displayedNum='0';
let operator = null;
let firstValue= null;
let secondValue= null;

keys.addEventListener('click', eventHandler);

function eventHandler(event)
{
    switch(event.target.id)
    {
        case 'add': 
            console.log('add');
            handleOperator(event.target,'add');
            break;
        case 'subtract':
            console.log('subtract');
            handleOperator(event.target,'subtract');
            break;
        case 'multiply':
            console.log('multiply');
            handleOperator(event.target,'multiply');
            break;
        case 'divide':
            console.log('divide');
            handleOperator(event.target,'divide');
            break;
        case 'decimal':
            handleDecimal();
            console.log('decimal');
            break;
        case 'clear':
            handleClear();
            console.log('clear');
            break;
        case 'calculate':
            console.log('calculate');
            handleCalculate();
            break;
        default:
            handleNumber(event.target.innerHTML)
            console.log(event.target.innerHTML);
            break;
    }
}
function handleOperator(target, op)
{
    operator=op;
    showNoOperator();
    target.classList.add('is-depressed');
}

function handleDecimal()
{
    //alleen een dot toevoegen als het de eerste is
    if(!displayedNum.includes('.'))
        displayedNum+='.';
    showDisplay();
}

function handleNumber(n)
{
    if(operator!=null && firstValue===null)
    {
        showNoOperator();
        //bewaar het eerste getal uit de display
        firstValue=displayedNum
        displayedNum='0';
    }
   
    if(displayedNum==='0') {
        displayedNum=n;
        showDisplay();
    } else {
        displayedNum+=n;
        showDisplay();
    }
}

function handleCalculate()
{
    let result;
    //bewaar het tweede getal uit de display 
    secondValue=displayedNum;
    switch(operator)
    {
        case 'add':
            result=parseFloat(firstValue)+parseFloat(secondValue);
            break;
        case 'subtract':
            result=result=parseFloat(firstValue)-parseFloat(secondValue);
            break;
        case 'multiply':
            result=parseFloat(firstValue)*parseFloat(secondValue);
            break;
        case 'divide':
            result=parseFloat(firstValue)+parseFloat(secondValue);
            break;
    }
    console.log(result);
    displayedNum=result;
    showDisplay();
    let buttons=keys.querySelectorAll('button');

    for(let i=0;i<buttons.length;i++) {
        buttons[i].disabled=true;
    }
    keys.querySelector('#clear').disabled=false;
}

function handleClear()
{
    firstValue=null;
    operator=null;
    secondValue=null;
    displayedNum='0';
    let buttons=keys.querySelectorAll('button');

    for(let i=0;i<buttons.length;i++) {
        buttons[i].disabled=false;
    }
    showNoOperator();
    showDisplay();
}

function showDisplay()
{
    display.innerHTML=displayedNum;
}

function showNoOperator()
{
    keys.querySelector('#add').classList.remove('is-depressed');
    keys.querySelector('#multiply').classList.remove('is-depressed');
    keys.querySelector('#divide').classList.remove('is-depressed');
    keys.querySelector('#subtract').classList.remove('is-depressed');
}