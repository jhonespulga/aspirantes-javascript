//Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de 
//JavaScript. Si el arreglo está vacío debe retornar undefined

// escribe la función max acá
function max(maximo) {
    if (maximo.length === 0) {
      return undefined;
    }
    let maxNumero = maximo[0];
    for (let i = 1; i < maximo.length; i++) {
      if (maximo[i] > maxNumero) {
        maxNumero = maximo[i];
      }
    }
    return maxNumero;
  }
  
  console.log(max([1, 3, 2])); // 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
  console.log(max([])); // undefined