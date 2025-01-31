//PROGRAMACION 
const signUpButton=document.getElementById("signUp");//
const signIpButton=document.getElementById("signIp");//
const container=document.getElementById("container");
const boost=document.getElementById("boost");
// EVENTO
signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";//
});
//
signIpButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible"; //
});
//
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text";//
    }else{
        tipo.type="password";//
    }
}