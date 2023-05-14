//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

// escribe la función sum acá
function suma(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    return total;
  }
  
  console.log(suma([1, 2, 3])); // 6
  console.log(suma([10, 8, 12, 5])); // 35
  console.log(suma([])); // 0