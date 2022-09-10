# Portafolio de evidencias.

## Semana 9.


Modificadores de Acceso en Typescript
Público por defecto
En TypeScript, cada miembro es publicpor defecto.
Aún puede marcar un miembro publicexplícitamente. Podríamos haber escrito la Animalclase de la sección anterior de la siguiente manera:

class Animal {
    public name: string;
    publicconstructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
Private
Cuando se marca un miembro private, no se puede acceder desde fuera de su clase que lo contiene. Por ejemplo:

class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
TypeScript es un sistema de tipo estructural. Cuando comparamos dos tipos diferentes, independientemente de su procedencia, si los tipos de todos los miembros son compatibles, entonces decimos que los tipos mismos son compatibles.

Sin embargo, al comparar tipos que tienen private y protectedmiembros, tratamos estos tipos de manera diferente. Para que dos tipos se consideren compatibles, si uno de ellos tiene un privatemiembro, el otro debe tener un privatemiembro que se originó en la misma declaración. Lo mismo se aplica a los protectedmiembros.

Otro ejemplo que podemos demostrar mas a detalle.
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
 tenemos una Animaly una Rhino, con Rhinoser una subclase de Animal. También tenemos una nueva clase Employee que se ve idéntica Animalen términos de forma. Creamos algunas instancias de estas clases y luego tratamos de asignarlas entre sí para ver qué sucederá. Porque Animal y Rhino comparten el private lado de su forma desde la misma declaración de private name: string in Animal, son compatibles. Sin embargo, este no es el caso Employee. Cuando intentamos asignar de a Employee a Animal, obtenemos un error de que estos tipos no son compatibles. Aunque Employee también tiene un private miembro llamado name, no es el que declaramos en Animal .
