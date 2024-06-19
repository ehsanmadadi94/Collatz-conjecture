'use strict'
let num=0;
let calc;
let str=[];
let an;
let res=document.querySelector('#res')
let btn=document.querySelector('#snd');
btn.addEventListener('click',function(){
    let shw=document.querySelector('#num').value;
    num=shw;
    console.log(num)
    str.push(num)
    

    for(let i=0;i<110;i++){
        an=num%2;
        if(an==0)
    {
        calc=num/2;
        str.push(calc);
        num=calc;

    }
    else
    {
        calc=(num*3)+1;
        str.push(calc);
        num=calc;
    }
    }
    res.textContent=str;
    res.style.color='red'

})






