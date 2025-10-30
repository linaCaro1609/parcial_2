//Controlador principal
//Funciones

//CRUD (Create, Read, Update, Delete)
//Función Agregar Empleado (C - Crear)
function crearEmpleado() {
  document.getElementById('divAgregarEmpleado').style.display = 'block';
}

function agregarEmpleado() {
  alert("Entró a agregar empleado");

  // Cargar empleados guardados al iniciar
  document.addEventListener("DOMContentLoaded", mostrarEmpleados);

  // Manejar envío del formulario
  document.getElementById('formEmpleado').addEventListener('submit', function (e) {
    e.preventDefault();

    const empleado = new Empleado(
      document.getElementById('cc').value,
      document.getElementById('nombresyApellidos').value,
      document.getElementById('direccion').value,
      document.getElementById('email').value,
      document.getElementById('telefono').value,
      document.getElementById('sueldoBase').value,
      document.getElementById('tipoEmpleado').value,
      document.getElementById('tipoBonificacion').value
    );

    // Obtener lista existente o crear nueva
    let empleados = JSON.parse(localStorage.getItem('empleados')) || [];

    // Agregar nuevo empleado
    empleados.push(empleado);

    // Guardar nuevamente
    localStorage.setItem('empleados', JSON.stringify(empleados));

    // Actualizar tabla
    mostrarEmpleados();

    // Limpiar formulario
    e.target.reset();
  });

 function mostrarEmpleados() {
  const tbody = document.querySelector('#tablaEmpleados tbody');
  tbody.innerHTML = '';

  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  let totalNomina = 0; // para acumular la suma total

  empleados.forEach((emp, index) => {
    let sueldoBase = parseFloat(emp.sueldoBase) || 0;
    let adicion = 0;

    if (emp.tipoBonificacion == "A") {
      adicion = 200000;
    } else if (emp.tipoBonificacion == "B") {
      adicion = 150000;
    } else if (emp.tipoBonificacion == "C") {
      adicion = 100000;
    } else if (emp.tipoBonificacion == "D") {
      adicion = 50000;
    }

    let sueldoTotal = sueldoBase + adicion;
    totalNomina = totalNomina + sueldoTotal; //  suma

    const fila = `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.cc}</td>
        <td>${emp.nombresyApellidos}</td>
        <td>${emp.direccion}</td>
        <td>${emp.email}</td>
        <td>${emp.telefono}</td>
        <td>${sueldoBase}</td>
        <td>${emp.tipoEmpleado}</td>
        <td>${emp.tipoBonificacion}</td>
        <td>${sueldoTotal}</td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });

  
  const filaTotal = `
    <tr>
      <td colspan="9" style="text-align:right;"><b>Total Nómina:</b></td>
      <td><b>${totalNomina}</b></td>
    </tr>
  `;
  tbody.innerHTML += filaTotal;
}


}
