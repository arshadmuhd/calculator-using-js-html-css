function btnclick(val)
{
    document.getElementById("display").value+=val;
    
}
 function equalClick()
 {
     var text=document.getElementById("display").value
     var result=eval(text)
     document.getElementById("display").value=result;
 }


function displayClear()
{
    document.getElementById("display").value="";
}