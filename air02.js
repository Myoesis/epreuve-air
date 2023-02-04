// Consigne : Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères.
// Espacés d’un séparateur donné en dernier argument au programme.


// Pistes : boucle, push chaque élément du tableau puis le séparateur




// Déclarer mes variables : 
let argumentTotal=process.argv.slice(2)
let minimumArguments = 3
let finalString =""


// gestions des erreurs :
let error = (argumentPassé) => {
    if (argumentPassé.length < minimumArguments) {                      // il faut au mmoins 2 arg à séparer par 1 séparateur
        console.log("pas assez d'argument mon grand !")
        process.exit()
    }
}



// mes fonctions : 
let creatArgArray =(argumentPassé)=> {
    return argumentPassé.slice(0,argumentPassé.length)                 // On créer le tableau contenant tout les arguments sauf le dernier
}

let creatSeparateur =(argumentPassé) => {
    let separateur = argumentPassé[argumentPassé.length-1]            // On créer le separateur à partir du dernier element du tableau
    return separateur
}

let concat = (argArray,separateur) => {                               // On créer la string final en ajoutant chaque element du tableau suivi du séparateur.
    for (let i=0 ; i< argArray.length-1 ; i++) {
        finalString += argArray[i] + separateur
    }
    console.log(finalString)
}



// appelle des fonctions : 
error(argumentTotal)
concat(creatArgArray(argumentTotal),creatSeparateur(argumentTotal))
