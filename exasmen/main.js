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
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    if(n1>n2 && n1>n3){
        document.getElementById("e").innerHTML="El numero mayor es: " + n1;
    }
    if(n2>n1 && n2>n3){
        document.getElementById("e").innerHTML="El numero mayor es: " + n2;
    }
    if(n3>n1 && n3>n2){
        document.getElementById("e").innerHTML="El numero mayor es: " + n3;
    }
}
function hola(){
    let f=document.getElementById('operacion');
    var fl=(f.value);
    document.getElementById("e").innerHTML=fl;
    var res= (n1) (fl) (n2);
    document.getElementById("a").innerHTML=res;
}
function edad(){
    var ed=parseInt(document.getElementById("edad").value);
    if(n1>=18){
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