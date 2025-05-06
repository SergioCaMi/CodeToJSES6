
// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a - Kyu 7


function XO(str) {
    // Opción con ES6
    // const stringToLower = str.toLowerCase().split('');
    // const xCounter = stringToLower.filter(char => char === 'x');
    // const oCounter = stringToLower.filter(char => char === 'o');
    // return xCounter.length === oCounter.length;
    
    // Opción practica
    const stringToLower = str.toLowerCase();
    return stringToLower.split('x').length === stringToLower.split('o').length;

    // CODIGO A CORREGIR
    // let xCounter = 0;
    // let oCounter = 0;
    // Recorremos la string
    // for (let i = 0; i < str.length; i++) {
    //     let letter = str[i].toLowerCase(); // Creamos una variable que guarde el índice en minúsculas

    //     if (letter === "x") {
    //         xCounter++;
    //     } else if (letter === "o") {
    //         oCounter++;
    //     }
    // }
    // return xCounter === oCounter;
}

console.log(XO('xo'));                  // true
console.log(XO('XO'));                  // true
console.log(XO('xxxoo'));               // false
console.log(XO('xxOo'));                // true
console.log(XO(''));                     // true
console.log(XO('asdafdgsd'))             // true
console.log(XO("xadsdadsadsadsaoasdasdasdo")) //false