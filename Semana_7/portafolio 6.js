<html>
  <head>
    <title>Abort Fetch</title>
  </head>
  <body>
    <a href="/ejercicios/">Go back</a>
    <p><em>Abre la consola</em></p>
    <img id="huge-image" height="400" />
    <button id="load">Load HUGE Image</button>
    <button id="stop" disabled>Stop Fetching</button>
    <script src="abort-fetch.js"></script>
  </body>
</html>
const url =
  'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
      // Elementos del DOM imagen y 2 botones
      const img = document.getElementById('huge-image');
      const loadButton = document.getElementById('load');
      const stopButton = document.getElementById('stop');
      let controller;

      // Función que habilita o desabilita un boton
      function startLoading() {
        loadButton.disabled = true;
        // Camnbia el texto de su contenido
        loadButton.innerText = 'Loading...';
        stopButton.disabled = false;
      }
      // Funcíon que desabilita el botón de carga
      function stopLoading() {
        loadButton.disabled = false;
        loadButton.innerText = 'Load HUGE Image';
        stopButton.disabled = true;
      }

      loadButton.onclick = async function() {
        // Se ejecuta startLoading que lo único que hace es cambiar la apariencia del botón
        // Para que se vea que está cargando
        startLoading();

        // Declaramos la variable antes para después tener acceso a ella
        // en el botón de cancelar petición fetch
        controller = new AbortController();
        try {
          // Hacemos la petición asíncrona a la URL usando Async await
          // Vamos a añadirle un objeto de configuración al fetch
          // Este objeto de configuración le vamos a pasar un objeto que se llama la señal
          // La señal va a venir del abort controller
          const response = await fetch(url, { signal: controller.signal });
          // Vamos a obtener el binario de la imagen con blob img en forma binaria
          const blob = await response.blob();
          // Convertimos el blob binario a una URL, el navegador se encarga de asignar el blob una url
          const imgUrl = URL.createObjectURL(blob);
          // Ahora el src se lo asignamos a la url de la imagen
          img.src = imgUrl;
        } catch (error) {
          console.log(error.message);
        }

        // Cuando la función asíncrona falle vamos a cambiar el boton a stop
        stopLoading();
      };

      stopButton.onclick = function() {
        // Si deseamos detener tenemos que llamar al abort controller.container
        // El abort envía una señal al fetch y hace que la petición se cancele
        controller.abort();

        stopLoading();
      };