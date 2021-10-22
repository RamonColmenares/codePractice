// link
// https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function timeConversion(s) {
    // Write your code here
    //guardamos en el array result los numeros solamente
    let result = s.match(/\d{2}/g);
    //guardamos en el array result2 las letras solamente
    let result2 = s.match(/[a-z]{2}/gi);
    //convertimos el array a string
    result2 = result2.join();
    
    // el primer valor lo pasamos a un int para poder manipularlo y pasar de hora 12 a hora 24(militar)
    result[0] = parseInt(result[0]);

    //si la hora es menor de 12 y las letras indica PM se suma 12 unidades a valor que representa la hora
    if(result[0] < 12 && result2 == "PM"){
        result[0] += 12;
    }

    //si la hora es 12 y las letras AM se cambia el valor a 0
    if(result[0] == 12 && result2 == "AM"){
        result[0] = 0;
    }

    //convertimos el valor que representa la hora a un string
    result[0] = result[0].toString();

    //si el string que representa la hora tiene un solo caracter le agregamos un 0 al inicio para representar
    //correctamente la hora en formato militar
    if (result[0].length == 1) {
        result[0] = '0' + result[0] 
    }

    // convertimos el array de la hora transformada a formato militar a un string utilizando el metodo join
    // y como parametro los ':' para que los tenga despues de cada numero
    result = result.join(':');

    //retornamos el string en formato militar
    return result;
}

console.log(timeConversion("11:05:45AM"));

