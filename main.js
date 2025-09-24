const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const btnBorrar = document.getElementById('borrar');






form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const userName = nombreInput.value.trim();


    if (userName=="") {
        alert("marque un nombre manito")
        return;
    }
    localStorage.setItem('usuario' , userName);

    saludo.textContent='Bienvenido ' + userName

    nombreInput.value="";
});


document.addEventListener('DOMContentLoaded' , ()=>{

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
       saludo.textContent = 'Bienvenido de nuevo ' + usuarioGuardado
    }
});


btnBorrar.addEventListener('click' , ()=>{

    localStorage.removeItem('usuario');
    saludo.textContent = 'Bienvenido usuario indefinido'

});


