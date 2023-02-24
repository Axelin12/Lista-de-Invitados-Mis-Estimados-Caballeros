nombre_invitados_arreglo=[];
function enviar(){
    var invitado_1=document.getElementById("invitado1").value ;
    var invitado_2=document.getElementById("invitado2").value ;
    var invitado_3=document.getElementById("invitado3").value ;
    var invitado_4=document.getElementById("invitado4").value ;
    var invitado_5=document.getElementById("invitado5").value ;
    nombre_invitados_arreglo.push(invitado_1);
    nombre_invitados_arreglo.push(invitado_2);
    nombre_invitados_arreglo.push(invitado_3); 
    nombre_invitados_arreglo.push(invitado_4);
    nombre_invitados_arreglo.push(invitado_5);
    console.log(nombre_invitados_arreglo);
    document.getElementById("ver_nombre").innerHTML=nombre_invitados_arreglo;
    document.getElementById("boton_enviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}
function ordenar(){
    nombre_invitados_arreglo.sort();
    console.log(nombre_invitados_arreglo);
    document.getElementById("ver_nombre").innerHTML=nombre_invitados_arreglo;
}
