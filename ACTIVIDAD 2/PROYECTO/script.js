
          const compararNumeros = () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultado = document.getElementById('resultado');
            if (num1 > num2) {
              resultado.textContent = `El mayor es ${num1}`;
            } else if (num1 < num2) {
              resultado.textContent = `El mayor es ${num2}`;
            } else {
              resultado.textContent = 'Ambos números son iguales';
            }
          };
          
          const mostrarMes = () => {
            const mes = parseInt(document.getElementById('mes').value);
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            alert(`El mes correspondiente es ${meses[mes - 1]}`);
          };
          
          let nombres = [];
          const agregarNombre = () => {
            const nombre = document.getElementById('nombre').value;
            nombres.push(nombre);
            const listaNombres = document.getElementById('listaNombres');
            listaNombres.textContent = nombres.join(', ');
          };
          
          const registrarUsuario = (event) => {
            event.preventDefault();
            const id = document.getElementById('id').value;
            const cedula = document.getElementById('cedula').value;
            const nombres = document.getElementById('nombres').value;
            const fecha = document.getElementById('fecha').value;
            const ciudad = document.getElementById('ciudad').value;
            const tablaUsuarios = document.getElementById('tablaUsuarios');
            const fila = 
                `<tr><td>${id}</td>
                <td>${cedula}</td>
                <td>${nombres}</td>
                <td>${fecha}</td>
                <td>${ciudad}</td>
                </tr>`;
            tablaUsuarios.innerHTML += fila;
          };
       
    
    