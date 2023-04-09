// Consigne :
//Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).


let error = (args) => {
    if(!isNaN(args) || !args) {
        return "error"
    }
}

let fonction_split = (aSpliter) => {                             // le séparateur ici ne sert a rien??? consigne confuse ? 
    let finalArray=[]
    let separateur = /[\s,\t,\r]/ ;                              // regex pour séparateur, et non pas un argument.
    let indexRepere =0
    for (let i=0 ; i < aSpliter.length ; i++) {
        if (separateur.test(aSpliter[i])) {                      // si un élément passe par le regex (donc espace, retour a la ligne, tabulation)
            finalArray.push(aSpliter.slice(indexRepere,i))       // on push dans le tableau final un slice depuis l'index repère jusqu'à i non inclu
            indexRepere=i+1
        }
    }
    if(indexRepere < aSpliter.length) {                      
        finalArray.push(aSpliter.slice(indexRepere))
    }
    return finalArray
}


let maFonctionSplit =(arguments) => {
    if(error(arguments)) {
        return error
    }
    return fonction_split(arguments)
}    


// bloc qui définis si le fichier est executé depuis le terminal ou depuis un autre fichier
if (require.main === module) {
    const arguments = process.argv.slice(2)
    if (error(arguments) === "error") {
        console.log("error")
        process.exit()
    } else{
    console.log(maFonctionSplit(arguments[0]))
    }
} else {
    module.exports ={maFonctionSplit
                }
}

