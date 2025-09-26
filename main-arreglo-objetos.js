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


// capturamos el arreglo existente en el local storage o lo creamos vacio si no existe preivamente
const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];

// agregamos al arreglo cursosGuardados [] el nuevoCurso
cursosGuardados.push(nuevoCurso);


// el json.stringify sirve para conver
localStorage.setItem('cursos' , JSON.stringify(cursosGuardados));
form.reset();

});


document.addEventListener('DOMContentLoaded' , ()=> {
    const cursoCreado  = localStorage.getItem('curso');
        if (cursoCreado) {

            // el json.parse sirve para volve a convertir los datos que habia convertido en string con json.stringify en un objeto
            const constCurso = JSON.parse(cursoCreado);

            msjCurso.style.whiteSpace = "pre-line";            
            msjCurso.textContent = 'Curso: ' + constCurso.curso + '\n Profesor: ' + constCurso.profesor + '\n Precio: ' + constCurso.precio + '\n Piudad: ' + constCurso.ciudad + '\n Cupo: ' + constCurso.cupo;
        }
});


btnBorrar.addEventListener('click' , ()=>{
    localStorage.removeItem('cursos');
    msjCurso.textContent = 'aqui se mostrara el curso creado'
});



