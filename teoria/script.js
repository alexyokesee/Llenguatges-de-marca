// DEFINICÓN DE VARIABLES

// Variable constante que no se puede variar, que es igual a un valor numerico.
const mimi = 2 

//Variable constante = a una cadena de texto.
const nago = 'hola nago'
const victor = '69'

//True or False
5 === '5' //false
5 === 5 //True, compara
5 == 5 //True, mira el valor en si
5 == '5' //False, 

//CONDICIONALES

const profesors = ['hector', 'jaume', 'julian'];
const clase = ['llenguatge', 'xarxes', 'bbdd']
let claseActual = 'llenguatge'
if (claseActual === 'llenguatge'){
    console.log('La clase la fa ' + profesors[0]) //forma antigua
    console.log(`La classe la fa ${profesors[0]}`) //forma actual

}

else if (claseActual ==='xarxes') {
    console.log('La clase la fa ' + profesors[1]) 
}

else if (claseActual ==='bbdd') {
    console.log('La clase la fa ' + profesors[2]) 
}

else {
    console.log('No sha trobat la clase')

}

//FOR LOOP afegeix resultat a un 
const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// <ul id="llistat"></ul>
const llistat1 = document.querySelector('#llistat')
const llistat11 = document.getElementById('llistat')

// <ul class="llistat"></ul>
const llistat2 = document.querySelector('.llistat')
const llistat22 = document.getElementsByClassName('llistat')

// <p class="info"></p>
// <p class="info"></p>
// <p class="info"></p>
// <p class="info"></p>
// <p class="info"></p>
const allInfo = document.querySelectorAll('.info')

for(let i = 4; i < abecedario.length; i++) {
    console.log(`posicion: ${i}, letra: ${abecedario[i]}`)
}




// EXAMEN 

// 0 - kill question => 1 pregunta (4 respostes, 1 válida)
// a - const ProfesoresEscuela / profesors_escuela
// b - const profesores escuela
// c - const profesores,escuela
// d - const profesores Escuela

// 1 - test (1 punto) => 4 preguntes (4 respostes, 1 válida, resta -0,25)

// 2 - preguntes => 2 punts (para que sirve esto y porque)

// 3 - desenvolupament codi (7 punts, 4 preguntas) crear una raid, 
