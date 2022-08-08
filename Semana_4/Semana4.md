# Portafolio de evidencias.

## Semana 4.
Métodos Call y Apply.
This no es un valor que podemos asignar directamente, no podemos escribir this = 'valor', pero sí existen unos métodos que son parte del prototipo de function call, apply, bind. Estos 3 métodos nos van a ayudar a establecer cuál es el this que va a ser el contexto de la llamada a una función .

Establece this usando 'call'
// Establece this usando 'call'
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
Tenemos una función que no está en el contexto de un objeto ni de niguna clase, con la ayuda de call vamos a establecer cuál va a ser el this.

function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastname}`)
}
const yorell = {
  name: 'Yorell',
  lastname: 'Vega'
}
saludar.call(yorell)
Aquí lo que hicimos fue establecer el valor de this para la función saludar, pero a veces las funciones sí reciben argumentos.

Establece this usando 'call' y pasar argumentos a la función.
const yorell = {
  name: 'yorell',
  lastname: 'vega'
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
}
caminar.call(richard, 400, 'norte');
Lo primero es establecer el contexto del this para caminar usando call(richard) pero además tenemos algunos argumentos. Cuando esto no sucede tenemos que pasar los argumentos además de pasar el contexto.

Establece this usando 'apply' y pasar argumentos a la función.
apply hace la misma funcionalidad que call pero sus argumentos los pasamos de una forma ligeramente diferente, así que vamos a seguir usando el ejemplo de caminar y vamos usar apply que usa el mismo argumento que tiene call, que en este caso el this será richard. Pero, en lugar de pasar los argumentos separados por comas, vamos a pasarlos como parte de un arreglo y en ese arreglo van todos los argumentos que queramos.

const yorell = {
  name: 'yorell',
  lastname: 'vega'
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
}
caminar.apply(yorell, [400, 'norte']);
// también podemos pasarle un arreglo
const valores = [200, 'sur'];
caminar.apply(yorell, valores)
Es lo mismo, pero nos podemos enfrentar donde hay situaciones donde es más fácil usar el call y hay lugares donde es más fácil usar el apply. Sobre todo si son valores que son una lista de valores.



