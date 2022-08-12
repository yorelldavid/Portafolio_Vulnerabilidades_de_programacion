# Portafolio de evidencias.

## Semana 5.

Proxy
Igual que los getters y setters, el proxy es uno de los features más recientes del lenguaje. También igual que los getters y setters, podemos intersectar algunas llamadas a un objeto. Sin embargo, más alla de get y set, podemos intersectar muchísimas otras cosas. Si vamos a la documentación de Proxy en MDN vamos a encontrar una sección que dice Methods of the handler object (métodos del objeto manejador). Aquí vamos a encontrar a get y set, decimos que son trampas. Cuando hay una llamada, la llamada va a caer en estas trampas si las tenemos definidas. En la trampa de get y de set también hay trampas para ver el getPrototypeOf, handler.apply, handler.constructor, etc.

Esto nos va a permitir que antes de que la llamada llegue al objeto al que tiene que llegar podemos manipularla. Hay una idea que se me hace muy interesante y muy divertida, es un feature que tienen algunos programas como por ejemplo git. Si vamos a la consola y escribimos mal el comando, no se ejecutara la instrucción, pero nos devolverá una sugerencia a lo que escribimos, o en dado caso de no tener una sugerencia, nos dará una lista de posibles comandos.

Vamos a hacer esto mismo, pero en Javascript, que será interceptar las llamadas si la propiedad que está buscando el usuario no existe en un objeto. Vamos a ver cuáles son las que sí existen para sugerir una.

Para este ejemplo nos vamos a apoyar de una librería que se llama fast-levenshtein. Leveshtein es un algoritmo que va a encontrar la distancia entre 2 cadenas. Es decir, si tenemos 2 cadenas y se diferencian por 1 sola letra la distancia sería de 1; si se diferencian por 2 campos, sería una distancia de 2.


