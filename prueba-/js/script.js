document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario_contacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Esto evita que el formulario se envíe por defecto //

        // Validaciones de Campos //
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var telefono = document.getElementById('telefono').value;
        var carrera = document.getElementById('inlineFormCustomSelectPref').value;
        var edad = document.getElementById('edad').value;

        var validacionesCorrectas = true;

        // Nombre //
        if (!nombre || !isNaN(nombre)) {
            alert('Mensaje no enviado. Revisa los datos ingresados.\nDebe ingresar un dato correcto en el campo Nombre');
            validacionesCorrectas = false;
        }

        //  Apellido //
        if (!apellido || !isNaN(apellido)) {
            alert('Mensaje no enviado. Revisa los datos ingresados.\nDebe ingresar un dato correcto en el campo Apellido');
            validacionesCorrectas = false;
        }

        // Teléfono //
        if (isNaN(telefono) || telefono < 222222222 || telefono > 999999999) {
            alert('Mensaje no enviado. Revisa los datos ingresados.\nEl campo Teléfono debe ser un valor numérico entre 222222222 y 999999999');
            validacionesCorrectas = false;
        }

        // Carrera //
        if (carrera === "Elegir Carrera") {
        alert('Mensaje no enviado. Revisa los datos ingresados.\nDebe seleccionar una Carrera');
        validacionesCorrectas = false;
}
    //  Edad //
        if (isNaN(edad) || edad < 17 || edad > 60) {
            alert('Mensaje no enviado. Revisa los datos ingresados.\nEl campo Edad debe ser un valor numérico entre 17 y 60');
            validacionesCorrectas = false;
        }

        // Mensaje Exito //
        if (validacionesCorrectas) {
            alert('Datos enviados correctamente');
            this.submit(); // Enviar el formulario
        }
    });
});
