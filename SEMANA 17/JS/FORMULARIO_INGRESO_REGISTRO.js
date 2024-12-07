//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("signUp");//boton registro
const signInButton=document.getElementById("signIn");//boton ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
// Programar evento click mostrar form registro
signUpButton.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
//Programar evento click ocultar form registro
signInButton.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
});
//Mostrar contraseña
function mostrarSeña()
{
    var tipo= document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}