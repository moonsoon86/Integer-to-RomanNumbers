document.querySelector('#btn1').addEventListener('click', roman1);

function roman1 (number){
    var number = document.querySelector('#inpt1').value;
    var textElement=document.querySelector('#text1');


    if ( number < 1 || number > 3999) {
        return -1;
    }


    var result = '' ;
    var string = number.toString ();
    var romanNum = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX',
                    80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM'};

    var addZero ='';

    for ( var i = string.length-1; i>=0; i--) {
        if (string[i] === '0') {
            addZero += '0';
            continue;
        }
        var num = string[i] + addZero;
        result = romanNum[num] + result;
        addZero += '0';
    }
    textElement.innerText=result;
    document.querySelector("#inpt1").focus();
    document.querySelector("#inpt1").value="";
}


//--------------------------------------------


document.querySelector('#btn2').addEventListener('click', roman2);

const list ={I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000}

function roman2(inputvalue) {
    var inputvalue = document.querySelector('#inpt2').value;
    var textElement2=document.querySelector('#text2');
    const upper=inputvalue.toUpperCase();
    const array=upper.split('');


    let total=0;
    let current;
    let currentValue;
    let next;
    let nextValue;
    
    for (let i = 0; i < inputvalue.length; i++) {
        current = array[i];
        currentValue =list[current];

        next = array[i+1];
        nextValue = list[next];
      
        //if the next roman numeral is larger, then we know we have to subtract this number
        if ( currentValue < nextValue ) {
            total-=(currentValue)
        } 
        //otherwise, add like normal. 
        else {
            total+=(currentValue)
        }
    }
    textElement2.innerText=total;
    document.querySelector("#inpt2").focus();
    document.querySelector("#inpt2").value="";
    
};

