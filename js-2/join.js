function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result +=  " ";
      }
    }
    return result;
  }
  console.log(join(["pepe","carlos","juan"]));