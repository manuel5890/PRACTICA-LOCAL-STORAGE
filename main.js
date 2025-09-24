const form = document.getElementById('formulario-curso');
const inputCurso = document.getElementById('nombre-curso');
const inputProfesor = document.getElementById('nombre-profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo')
const msjCurso = document.getElementById('mensaje-curso');
const btnBorrar = document.getElementById('borrar-curso');


form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();


    if (curso=="" || profesor=="" || precio=="" || ciudad=="" || cupo=="") {
        alert('termine de llenar todo ole')
        return;
    }
// construimos un objeto con caracteristicas con sus diferentes claves y valores
const nuevoCurso = {
    curso: curso,
    profesor: profesor,
    precio: precio,
    ciudad: ciudad,
    cupo: cupo
}

localStorage.setItem('curso' , JSON.stringify(nuevoCurso))
form.reset();

});

