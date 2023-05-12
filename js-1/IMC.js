/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad
 de grasa de una persona. El BMI se calcula con la siguiente fórmula: peso / altura^2.
En un archivo llamado IMC.js escribe una función llamada bmi que reciba dos argumentos: peso y altura. 
Utiliza la formula para retornar el BMI correspondiente. Debes ejecutar tu archivo usando node.js node IMC.js*/

function bmi (peso,altura){
    return peso / (altura * altura)
}
console.log(bmi(71,1.70));