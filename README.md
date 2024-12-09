<!DOCTYPE html>
<html lang="es"> <!--definiciòn del tipo de documento e idioma-->

<head> 
    <meta charset="UTF-8"/> <!--especifica la codificacion de caracteres-->
    <title>Actividad de Aprendizaje 2</title> <!--titulo de la pagina-->
    <link rel="stylesheet" href="estilos.css"> <!--vincula el archivo CSS para los estilos-->
    
</head>

<body> 
    <header id="cabecera"> <!--encabezado principal-->
        <h1>Aplicacion Web Interactiva</h1> <!--titulo del encabezado-->         
        <nav> <!--seccion de navegacion-->
            <ul> <!--lista para los enlaces de navegaciòn-->               
                <li><a href="#inicio">Inicio</a></li> <!--enlace de inicio-->
                <li><a href="#funcionalidades logicas">Funcionalidades logicas</a></li> <!--enlace de resumen-->
                <li><a href="#registro de usuarios">Registro de usuarios</a></li> <!--enlace de noticias-->
            </ul>
        </nav>        
    </header>

    <section id="inicio"> <!--secciòn de inicio-->
        <h2>Inicio</h2> <!--elemento de encabezado sirve para organizar el contenido-->
       
        <section id="datos">
            
            <table border="1"> <!--table: Indica que comienza la descripción de una tabla en HTML-->
                <tr> <!--Señala que comienza una fila de la tabla.-->
                    <th>Nombres y Apellidos</th>  <!--Indica que una celda es header de una columna-->
                    <th>Correo</th>
                    <th>Curso</th>
                </tr>
                <tr>
                    <td>Diana Cristina Chalco Sopa</td> <!--Señala que se trata de una celda.-->
                    <td>dcchalco@espe.edu.ec</td>
                    <td>1382</td>
                </tr>
                             
            </table>
    </section>

    <section id="funcionalidades logicas"> <!--secciòn de inicio-->
        <h2>Funcionalidades logicas</h2> <!--elemento de encabezado sirve para organizar el contenido-->
        
        <div id="funcionalidades logicas">
            <h2>Comparación de Números</h2> <!--elemento de encabezado sirve para organizar el contenido-->
            <input type="number" id="num1" placeholder="Número 1">
            <input type="number" id="num2" placeholder="Número 2">
            <button onclick="compararNumeros()">Comparar</button>
            <div id="resultado"></div>
          
            <h2>Mes del Año</h2>
            <input type="number" id="mes" placeholder="Ingrese un número del 1 al 12">
            <button onclick="mostrarMes()">Mostrar Mes</button>
          
            <h2>Gestión de Nombres</h2>
            <input type="text" id="nombre" placeholder="Ingrese un nombre">
            <button onclick="agregarNombre()">Agregar</button>
            <div id="listaNombres"></div>
          </div>
        <div class="inicio"> 

    <section id="registro de usuarios"> <!--secciòn de inicio-->
        <h2>Registro de usuarios</h2> <!--elemento de encabezado sirve para organizar el contenido-->
        
        <div id="registro-usuarios">
            <form onsubmit="registrarUsuario(event)">
              <label>ID: <input type="text" id="id"></label><br>
              <label>Cédula de identidad: <input type="text" id="cedula"></label><br>
              <label>Nombres y apellidos: <input type="text" id="nombres"></label><br>
              <label>Fecha de nacimiento: <input type="date" id="fecha"></label><br>
              <label>Ciudad de procedencia:
                <select id="ciudad">
                  <option value="Quito">Quito</option>
                  <option value="Guayaquil">Guayaquil</option>
                  <option value="Cuenca">Cuenca</option>
                  <option value="Manta">Ibarra</option>
                  <option value="Ambato">Ambato</option>
                </select>
              </label><br>
              <button type="submit">Registrar</button>
            </form>
            <div id="tablaUsuarios"></div>
          </div>
          
          <script>
          // Ejemplo de funciones en JavaScript usando arrow functions
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
          </script>
       
        <div id="resultado"></div>
    
        <script src="formulario.js"></script>
    </section>
</html>