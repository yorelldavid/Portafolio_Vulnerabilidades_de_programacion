const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'
}

const handler = {
    get(obj, prop) {
      if (prop in obj) {
        // si la propiedad existe, pues retornamos su valor
        return obj[prop]
      }

      const suggetion = Object.keys(obj).find(key => {
        return Levenshtein.get(key, prop) <= 3 
    })

      
    if (suggetion) {
        console.log(`${prop} no se encontró. ¿Quisiste decir ${suggetion}?`);
      }
  
      return obj[prop];
    }
  }
  const p = new Proxy(target, handler);
  p.red;
  p.blue;
  p.green;

  p.reee;

  


