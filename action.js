var historys = document.querySelector('.calc-history');
var result = document.querySelector('.output-container p');
var button = document.querySelector('.no');
var equal = document.querySelector('.no-equal');

var divide = document.querySelector('.divide');
var multiply = document.querySelector('.multiply');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var ac = document.querySelector('.ac');
var c = document.querySelector('.c');

var res;
var firstnumber = '';
var secondnumber = ''
var sign;

function calculate(x)
{
    if(!sign)
    {
        firstnumber+=x;
        result.innerHTML = firstnumber;
    }
    else
    {
        secondnumber+=x;
        result.innerHTML = secondnumber;
       // historys.innerHTML += firstnumber+" "+" "+sign+" "+secondnumber;
    }
    console.log(firstnumber+" "+ secondnumber);
}
ac.addEventListener('click',function(e)
{
    historys.innerHTML = "";
    result.innerHTML = "";
    firstnumber = secondnumber = sign = res = "";
})
c.addEventListener('click',function(e)
{
    if(secondnumber)
    {
        secondnumber="";
    }
    else if(firstnumber)
    {
        firstnumber = "";
    }
    result.innerHTML = "";
})
equal.addEventListener('click',function(e)
{
    let fnum = parseInt(firstnumber);
    let snum = parseInt(secondnumber);

    if(!res)
    {
        historys.innerHTML += firstnumber + " "+" "+sign+" "+secondnumber;
    }
    else{
        historys.innerHTML += " "+sign+" "+secondnumber;
    }
    switch(sign)
    {
        case "+":
             res = fnum + snum;
             break;
        case "-":
            res = fnum - snum;
            break;
        case "/":
            res = fnum / snum;
            break;
        case "x":
            res = fnum * snum;
            break;
        default:
            break;
    }

    result.innerHTML = res;

})

divide.addEventListener('click',function(e)
{
    e.preventDefault();
    sign = "/";

    if(res)
    {
        firstnumber = res;
        secondnumber = "";
    }
})
multiply.addEventListener('click',function(e)
{
    e.preventDefault();
    sign = "x";

    if(res)
    {
        firstnumber = res;
        secondnumber = "";
    }
})
plus.addEventListener('click',function(e)
{
    e.preventDefault();
    sign = "+";

    if(res)
    {
        firstnumber = res;
        secondnumber = "";
    }
})
minus.addEventListener('click',function(e)
{
    e.preventDefault();
    sign = "-";

    if(res)
    {
        firstnumber = res;
        secondnumber = "";
    }
})
