// Consigne : Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


// Pistes : double boucle, si arg[i] ===


// Déclarer mes variables :
let argumentPassé = process.argv.slice(2)



// gestions des erreurs :
let error = (argumentPassé) => {
    if (argumentPassé.length < 1) {
        console.log("error")
        process.exit()
    }
}



// mes fonctions : 
let intru = (argArray) => {
    for (let i =0 ; i < argArray.length-1 ; i ++) {
        let pairé = false
        for (let j=0 ; j<argArray.length ; j++) {
            if (argArray[i]===argArray[j] && i!=j) {
                pairé=true
            }
        }
        if (pairé===false) {
            console.log (argArray[i])
        }
    }
}


// appelle des fonctions : 
error(argumentPassé)
intru(argumentPassé)