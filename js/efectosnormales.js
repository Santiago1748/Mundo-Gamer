//EFECTO TITULO RGB
function cambiarColor() {
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    document.getElementById("titulo").style.color="rgb("+a+","+b+","+c+")";
    setTimeout("cambiarColor()",1000);
}

//EFECTO HORA Y FECHA
function reloj()
{

    let fecha=new Date();
    let d=fecha.getDay()+5;
    let mt=fecha.getMonth()+1;
    let y=fecha.getFullYear();



    document.querySelector("#pf").innerHTML="Fecha actual: "+d+"/"+mt+"/"+y+"";

    let hora=new Date();
    let h=hora.getHours();
    let m=hora.getMinutes();
    let s=hora.getSeconds();

    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;

    var AM = "a.m.";
    var PM = "p.m.";

    if(h<12)
    {
        document.querySelector("#ph").innerHTML="Hora local: "+h+":"+m+":"+s+" "+AM;
    }
    else
    {
        h=h-12;
    
        document.querySelector("#ph").innerHTML="Hora local: "+h+":"+m+":"+s+" "+PM;
    }
    if(hora == 0){
        hora = 12;
    }

    setInterval("reloj()",1000);
}

    document.body.setAttribute('onload', "cambiarColor(), reloj()");