
function Calc(e)
{  
var a= e.target.value;
document.getElementById("result").value+=a;
}

function Clear()
{
    document.getElementById("result").value=" "
}

function operaton(e)
{
    var a=e.target.value;
    document.getElementById("result").value +=a;

}

function evalu(e){
var a=document.getElementById("result").value
var b=eval(a);
document.getElementById("result").value =b;
}
export  {Calc,Clear,operaton,evalu}