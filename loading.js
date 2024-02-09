let a,b,c;

function fun()
{
let htm= document.getElementById("num1");
let css= document.querySelectorAll('.num2');
let js= document.querySelectorAll('#num3');

a =prompt("how much % you learn html "); 
b =prompt("how much % you learn css ");
c =prompt("how much % you learn javascript ");

document.documentElement.style.setProperty('--html_val',3.15*(100-Number(a)));
document.documentElement.style.setProperty('--css_val',3.15*(100-Number(b)));
document.documentElement.style.setProperty('--js_val',3.15*(100-Number(c)));

}
fun();

document.addEventListener("DOMContentLoaded", function() {
    // Get the element with id "num1"
    document.getElementById("num1").innerText=a+" %";
    document.querySelector('.num2').innerHTML=b+" %";
    document.getElementById("num3").innerText=c+" %";
});
