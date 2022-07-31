# Portafolio de evidencias.

## Semana 3.

Global Scope, como se comporta this con el global-scope.
// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una función
function whoIsThis() {
  return this;
}
console.log(whoIsThis());
Cuando llamamos a la función whoIsThis() directamente el motor de javascript le va asignar que this va a ser window, ya que es un valor que se tiene que asignar por default, excepto si estamos usando javascript en un modo estricto. El 'strict mode', este strict mode que puedes encender manualmente solo escribiendo una cadena que diga "use strict", con estó comienza el modo estricto.

This en el Scope de una Función strict mode
Ahora usando el modo strict mode dentro de la siguiente función que también retorna this nos imprime que ahora es undefined, y este es justo el comportamiento que sucede cuando usamos strict mode, strict mode nos ayuda a evitar algunos errores que le pueden pasar a cualquier otro programador, pero el motor de javascript va a tratar de ayudarnos y estos errores nos van a salir temprano durante la fase de desarrollo y no en producción, y un error es mejor tenerlo en desarrollo que en producción.

// this en el scope de una función strict mode 
function whoIsThisStrictMode() {
  "use strict";
  return this;
}
// undefined
console.log(`whoIsThisStrictMode: ${whoIsThisStrictMode()}`);
This en el contexto de un objeto
this se refiere al objeto que actualmente está ejecutando un pedazo de código, por lo tanto this va a ser todo este objeto. ejemplo:

// this en el constexto de un objeto 
const person = {
  name: "Gabriel",
  saludar: function () {
    console.log(`hola soy ${this.name}`);
  }
}
console.log(person.saludar());
This cuando sacamos una función de un objeto.
const person = {
  name: "Gabriel",
  saludar: function () {
    console.log(`hola soy ${this.name}`);
  }
}
// this cuando sacamos una función de un objeto 
const accion = person.saludar;
accion();
Ahora nos aparece undefined porque accion no se está llamando dentro del contexto de un objeto, simplemente se está llamado directamente similar como lo hicimos arriba en las funciones directas, por lo tanto el mensaje se mostrará incompleto cuando se intenta usar this.

This en el contexto de una clase
Las clases como tál no existen en javascript, al menos no son como las clases de java o de c++, pero resulta útil llamarles clases a estas funciones especiales que llamamos con new.

Todas las funciones tienen un valor de this, lo que sucede es que ese valor de this es un objeto vacío, en otras palabras, this comienza siendo estó this = {}. No puedes asignar this directamente, pero si puedes asignar una propiedad de this.

// This en el contexto de una Clase(Prototype);
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.saludar = function () {
  console.log(`Me llamo ${this.name} ${this.lastName}`);
}

const Jasan = new Person('Jasan', 'Hernández');
Jasan.saludar();
En el contexto de objetos que fueron instanciados de una clase, this se va a referir a la instancia de ese objeto, no se va ha referir a Person ni a Person.prototype.saludar, sino que se va a referir a Jasan, que es el objeto que está ejecutando a saludar.

Y cuando asignamos los valores de this.name = name lo estamos haciendo sobre la instancia, no sobre el objeto prototipal.
