
// Per començar, utilitzarem const per guardar les referències als elements HTML amb els quals volem interactuar.
const titol = document.getElementById('titol');
const paragraf = document.querySelector('.paragraf');

// A continuació, canviarem el contingut dels elements HTML.
titol.textContent = 'Nou Títol';
// l'innerHTML ens permet afegir HTML a l'element seleccionat.
paragraf.innerHTML = '<strong>Text en negreta</strong>';

// En aquest apartat, canviarem l'estil dels elements HTML.
titol.style.color = 'blue';
// Utilitzarem la propietat style per canviar el color del text.
//També, en podem utilitzar la propietat fontSize per canviar la mida de la font.
titol.style.fontSize = '2em';

// A continuació, generarem esdeveniments per interactuar amb els elements HTML.
// Seguidament, afegirem un esdeveniment al botó id="canviarText".

//el getElementById ens permet seleccionar un element HTML a partir del seu id.
//Seguidament, utilitzem addEventListener per afegir un esdeveniment al botó.
document.getElementById('canviarText').addEventListener('click', function() {
    titol.textContent = 'Títol Canviat!';
    titol.style.color = 'green';
});

//A continuació, farem l'apartat d'afegir i Eliminar Elements

// Afegeix un esdeveniment al botó id="afegirElement".
document.getElementById('afegirElement').addEventListener('click', function() {
    const nouElement = document.createElement('li');
    nouElement.textContent = 'Nou element afegit!';
    document.getElementById('llista').appendChild(nouElement);
});

// Afegeix un esdeveniment al botó id="eliminarElement".
document.getElementById('eliminarElement').addEventListener('click', function() {
    const llista = document.getElementById('llista');
    if (llista.lastElementChild) {
        llista.removeChild(llista.lastElementChild);
    }
});
