/* 
Promesse = utilisé pour réaliser des actions asynchrone


- en attente, état initial
- tenue
- rompue
- acquittée (dans tous les cas)

La promesse n'a lieu qu'une seule fois, ne peut pas être relancé.

*/

const start = new Promise((succes, error) => {

    let nombre = Math.round(Math.random() * 100)

    if (nombre > 50) {
        // en paramètre on met le résultat de la promesse
        succes(nombre)
    }
    else{
        error(nombre)
    }
})


// Ce code s'éxcute seulement après que le traitement précédent est fini

    // La promesse est résolue
    start.then((nombre) => {
        alert('ok :' + nombre)
    })
    .then(() => {
        alert("C'est le deuxieme then()")
    })

    // la promesse est rejettée
    start.catch((nombre) => {
        alert('c\'est une erreur :'  + nombre)
    })

    // Dnas tout les cas, elle est maintenant aquittée

