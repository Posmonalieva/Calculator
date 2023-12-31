let a = '';  //first number
let b = '';  //second number
let sign = '';  // operation sign - операция белгиси
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';  // first number and result
    b = '';  // second number
    sign = '';  // знак-белги
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event)=> {
    // кнопка не нажата
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // басылган кнопканы эсепке алабыз
    const key = event.target.textContent;
    //кайсыл оператор (+, -, х, /) басылганын белгилеп, key озгормого сактайбыз

    //эгер 0-9 га чейинки сандар басылган болсо
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
        a += key;
        console.log(a, b, sign);
        out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // +, -, x, / операторлору басылса
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(sign);
        return;
    }

    // = белгиси басылса
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = a - b;
                break;

            case 'X':
                a = a *b;
                break;

            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
} 