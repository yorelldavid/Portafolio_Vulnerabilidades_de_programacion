# Portafolio de evidencias.

## Semana 8.

Visibility Change
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.
El documento DOM ahora tiene un elemento que podemos escuchar.

document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState);
})
Usando este evento nosotros podemos salirnos del navegador, también podemos cambiar de pestaña y el DOM lo sabrá. Usemos esto en nuestro plugin para que cuando cambiemos de tab el video se detenga. En el método run() es cuando los plugins se echan a correr, aquí es un buen momento para conectarnos a este evento y que cuando suceda tomar acción.

run(player) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config)
    const observer = new IntersectionObserver(this.handlerIntersection, {
      // threshold: umbral define que porciento del elemento tiene que tener interseccion
      threshold: this.threshold
    })

    observer.observe(this.player.media) 
    // Ejecutamos el evento VisiblityChange y ejecutamos una función
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }
  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
El evento visibilityChange es un evento muy simple pero muy útil, nos deja saber si el tab es el que está hasta el frente, el tab que el usuario está viendo. Si cambiamos de tab nos permite cambiar acción, no solo nos permite ver un video, también pudiera ser cambiar el título de la pestaña, y así decirle al DOM que haga otras acciones que pueden ahorrar batería o mejorar el rendimiento de nuestras aplicaciones.
