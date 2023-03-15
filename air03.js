// Consigne : Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


// Pistes : double boucle, si arg[i] ===


let error = (argumentPassé) => {
    if (argumentPassé.length < 1) {
        return "error 03"
    }
}

let intru = (argArray) => {
    for (let i =0 ; i < argArray.length-1 ; i ++) {
        let pairé = false
        for (let j=0 ; j<argArray.length ; j++) {
            if (argArray[i]===argArray[j] && i!=j) {
                pairé=true
            }
        }
        if (pairé===false) {
            return argArray[i]
        }
    }
}


let fonctionIntru = (arguments) => {
    error(arguments)
    return intru(arguments)
}

if (require.main === module) {
    const arguments = process.argv.slice(2)
    if (error(arguments)=== "error 03") {
        console.log("error 03")
        process.exit(1)
    }
    console.log(fonctionIntru(arguments))
} else {
    module.exports= {fonctionIntru}
}