// Establece this usando 'call'
function saludar() {
    console.log(`Hola soy ${this.name} ${this.lastname}`)
  }
  function saludar() {
    console.log(`Hola soy ${this.name} ${this.lastname}`)
  }
  const yorell = {
    name: 'Yorell',
    lastname: 'Vega'
  }
  saludar.call(yorell)
  const yorell = {
    name: 'yorell',
    lastname: 'vega'
  }
  function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metos} metros hacia ${direccion}`);
  }
  caminar.call(richard, 400, 'norte');
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
  