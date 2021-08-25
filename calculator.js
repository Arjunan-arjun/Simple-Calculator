function disp(num)
{
    document.getElementById("result").value+=num;
}
function solve()
{
    let values=document.getElementById("result").value;
    try
    {
        document.getElementById("result").value=eval(values);
    }
    catch(e)
    {
        document.getElementById("result").value="Syntaxerror";
    }
}
function clr()
{
    document.getElementById("result").value="";
}
function back()
{
    let x=document.getElementById("result").value;
    let y=x.length;
    let s=""
    for(let i=0;i<y-1;i++)
    {
        s+=x[i];
    }
    document.getElementById("result").value=s;
}