"use strict"
let txtUtente, btnGioca, divMessage;
let nSegreto;
let cont;
let msg="";

function init() {
   txtUtente=document.getElementById("txtNumero");
   btnGioca=document.getElementById("btnGioca");
   divMessage=document.getElementById("divMessage");
   nSegreto=generaNumero(1,100);
   cont=10;
}
function generaNumero(a,b) {
  return Math.floor((b-a+1)*Math.random())+a;
}
function gioca() {
   let nUtente=parseInt(txtUtente.value);
    console.log("la mia variabile: "+nUtente);
   if(nUtente==nSegreto)
   {
      msg=divMessage.innerHTML="Bravo hai indovinato!";
      btnGioca.disable=true;
   }
   else
   {
       cont--;

       if(nUtente<nSegreto)
       {
           msg+="Il numero "+nUtente+" è basso! Tentativi rimanenti: "+cont+"<br>";
       }
       else
       {
           msg+="Il numero "+nUtente+" è alto! Tentativi rimanenti: "+cont+"<br>";
       }

       if(cont==0)
       {
           msg+="Hai perso!<br> Il numero segreto era "+nSegreto;
           btnGioca.disabled=true;
       }
   }
   divMessage.innerHTML=msg;
}