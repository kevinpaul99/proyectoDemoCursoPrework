function hora(){
    var a = document.getElementById("q").value;
    if(a<=3 && a>=1 ){
        document.getElementById("re").innerHTML="Futbol";
    }
    if(a>3 && a<=6){
        document.getElementById("re").innerHTML="Futbol Americano"
    }
    if(a>6 && a<=9){
        document.getElementById("re").innerHTML="Atletismo"
    }
}
function vh(){
    let s=document.getElementById('s');
    let sl=s.value;
    document.getElementById('rec').innerText = `${sl}.`;
}
function veri(){
    var re=document.getElementById("num").value
    if(re<=-1){
        document.getElementById("w").innerHTML="El numero " + re + " es negativo";
    }else{
        document.getElementById("w").innerHTML="El numero "+ re + " es positivo";
    }
}
function verifi(){
    var numero1 = parseInt(document.getElementById("n1").value);
    var numero2 = parseInt(document.getElementById("n2").value);
    var numero3 = parseInt(document.getElementById("n3").value);
    if (numero1 == numero2 && numero1 == numero3){
   document.getElementById("e").innerHTML="Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+numero1+"";
   }
   else{
      if (numero1 > numero2){
         if (numero1 > numero3){
            document.getElementById("e").innerHTML=("Numero 1 es el Mayor y vale: "+numero1+"");
            }
            else{
               document.getElementById("e").innerHTML=("Numero 3 es el Mayor y vale: "+numero3+"");
               }
      }
      else{
         if(numero1 < numero2){
            if (numero2 > numero3){
               document.getElementById("e").innerHTML=("Numero 2 es el Mayor y vale: "+numero2+"");
               }
               else{
                document.getElementById("e").innerHTML=("Numero 3 es el Mayor y vale: "+numero3+"");
                  }
            }
         }
   }
   
}
window.addEventListener("DOMContentLoaded",function(){
    document.getElementById('y').addEventListener('click',function(){
    var op = document.getElementById('op').value,
    nul1 = parseInt((document.getElementById('nul1')).value);
    nul2 = parseInt((document.getElementById('nul2')).value);
    if(op==1){
        operacion=nul1*nul2;
        document.getElementById('rsl').innerHTML = operacion;
    } if(op==2){
        operacion=nul1-nul2;
        document.getElementById('rsl').innerHTML = operacion;
    } if(op==3){
        operacion=nul1/nul2;
        document.getElementById('rsl').innerHTML = operacion;
    } if (op==4){
        operacion=nul1+nul2;
        document.getElementById('rsl').innerHTML = operacion; 
    }
    }); 
});
function edad(){
    var ed=parseInt(document.getElementById("edad").value);
    if(ed>=18){
        document.getElementById("jh").innerHTML="Eres mayor de edad";
    }else{
        document.getElementById("jh").innerHTML="Eres menor de edad";
    }
}
function Resul(){
    var a =parseInt(document.getElementById("no1").value);
    var b =parseInt(document.getElementById("no2").value);
    var c =parseInt(document.getElementById("no3").value);
    var d =parseInt(document.getElementById("no4").value);
    var e =parseInt(document.getElementById("no5").value);
    var reso=a+b+c+d+e;
    var resf=reso/5;
    document.getElementById("prome").innerHTML="Su promedio es: " +resf;
    if(resf>=7){
        document.getElementById("pasa").innerHTML="Usted pasa el año con "+resf;
    }else if(resf<=6.99 && resf>=5){
        document.getElementById("pasa").innerHTML="Ustede se queda en supletorios con "+resf;
    }else if(resf<=4.99 && resf>=0){
        document.getElementById("pasa").innerHTML="Usted se queda en remediales con la nota de "+resf;
    }
}