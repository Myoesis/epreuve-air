// Consigne : Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.


// Pistes : step1 : créer un tableau avec les différents éléments, séparés par les espaces etc... 
//          step 2 : boucle et quand séparateur === un élément du tableau, slice depuis indexRepere jusque i, et réassigner indexRepere a i


// Déclarer mes variables :
let argACouper = process.argv[2]
let separateur = process.argv[3]
let argumentTotal = process.argv.slice(2)

// Gérer les erreurs :

let error = (arg) => {
    if (arg.length!==2) {
        console.log(" il y a trop ou pas assez d'arguments")
        process.exit()
    }
}

// mes fonctions : 

// d'abord créer un tableau avec les éléments de l'argument passé, cf exercice précedent, qui servira à split par la suite
let creatArray = (aTrier) => {
    let separateur = /[\s,\t,\r]/ ;
    let indexRepere =0
    let arrayToSplit=[]                                     // créer l'array dans la fonction pour le return et réutiliser
    for (let i=0 ; i < aTrier.length ; i++) {
        if (separateur.test(aTrier[i])) {
            arrayToSplit.push(aTrier.slice(indexRepere,i))
            indexRepere=i+1
        }
    }

    if(indexRepere < aTrier.length) {
        arrayToSplit.push(aTrier.slice(indexRepere))
    }
    
    return arrayToSplit
}


let fonction_split = (arrayToSplit , separateur) => {         // ATTENTION : ce n'est pas le même arrayToSplit que celui return au dessus
    let indexRepere=0                                         // c'est juste un moyen pour rester cohérent et suivre la pensée. Mais ici c'est un argument
    let finalArray = []                                       // on déclare le final array dans la fonction sachant qu'on le console.log a la fin
    for (let i=0 ; i < arrayToSplit.length ; i++) {
        if (arrayToSplit[i]===separateur) {
            finalArray.push(arrayToSplit.slice(indexRepere,i))
            indexRepere=i+1
        }
    } 
    if (indexRepere < arrayToSplit.length) {
        finalArray.push(arrayToSplit.slice(indexRepere))
    }
    console.log(finalArray)
}


// appelle des fonctions : 
 
error(argumentTotal)
 // on utilise le resultat de la premiere fonction(qui a utilisé le argACouper) comme premier argument
fonction_split(creatArray(argACouper), separateur)            
