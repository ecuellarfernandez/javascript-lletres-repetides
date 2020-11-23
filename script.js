// FASE1
// Crea un array amb el teu nom on cada posició correspongui a una lletra.
// Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.

// FASE 2
// Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
// Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’

let name = ['3', '3', 'R', 'I', 'C', 'K'];

// for(letter of name){

//     let vowel = letter.match(/[aeiou]/gi);
//     let number = letter.match(/[0-9]/gi);

//     if(letter == vowel){
//         console.log('He trobat la VOCAL: '+letter);
//     }else if(letter == number){
//         console.log('Els noms de persones no contenen el número: ' + letter);
//     }else{
//         console.log('He trobat la CONSONANT: '+letter);
//     }
    
// }

// Emmagatzemar en un objecte o una estructura Map (a la teva elecció) les lletres de l'array y el nombre de vegades que apareixen.

// let repeatedLetters = new Map();

// for(letter in name){
//     let letterCounter = 0;
//     if(!repeatedLetters.has(name[letter])){
//         repeatedLetters.set(name[letter], letterCounter = letterCounter + 1);
//     }else{
//         let addCounter = repeatedLetters.get(name[letter]);
//         addCounter = addCounter + 1;

//         repeatedLetters.set(name[letter], addCounter);
//     }
// }

// console.log(repeatedLetters);

// FASE 4
// Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
// Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.

// let surname = ['C', 'U', 'E', 'L', 'L', 'A', 'R'];

// name.push(" ");
// let nameNSurname = name.concat(surname);

// console.log(nameNSurname);