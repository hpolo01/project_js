//PROGRAMACION DE TRANSCION DE AMBOS FORMUALRIOS
const signUpButton=document.getElementById("signUp");//form registro
const signInButton=document.getElementById("signIn");//form ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
//EVento click de mostrar form registro
signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
//Evento click de ocultar form registro
signInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
});
//Mostrar contraseña
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password"){
        tipo.type="text"; //muestra contraseña
    }else{
        tipo.type= "password"; // ocultar contraseña
    }
}