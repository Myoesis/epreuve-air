// Consigne :
//Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).


// Pistes : On va utiliser les regex ! espace tabulation et retour à la ligne --> \s \t \r


//Déclarer mes variables :

let error = (args) => {
    if(args.length!=1) {
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

error(arguments)
return fonction_split(arguments)
 
}    


// appelle des fonctions : 
if (require.main === module) {
    const arguments = process.argv.slice(2)
    if (error(arguments) === "error") {
        console.log("error")
        process.exit()
    }
    console.log(maFonctionSplit(arguments[0]))
} else {
    module.exports ={maFonctionSplit
                }
}

