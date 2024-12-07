//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("signUp");//boton form registro
const signInButton=document.getElementById("signIn");//boton form ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
//Evento click para mostrar form registro
signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden"; //esconder boton
});
//Evento click para ocultar form registro y mostrar form ingreso
signInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible"; //mostrar boton
});
//Mostrar contraseña en input
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text";// ver contraseña
    }else{
        tipo.type="password";//se oculta 
    }
}
