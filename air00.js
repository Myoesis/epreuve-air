// Consigne :
//Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).


// Pistes : On va utiliser les regex ! espace tabulation et retour à la ligne --> \s \t \r


//Déclarer mes variables :
let argACouper = process.argv[2]
let excedent = process.argv[3]
let finalArray=[]


// gestions des erreurs :
let error = (arg1,arg2) => {
    if(arg1===undefined || arg2) {
        console.log("error")
        process.exit()
    }
}


// mes fonctions : 
let fonction_split = (aSpliter , separateur) => {            // le séparateur ici ne sert a rien??? consigne confuse ? 
    separateur = /[\s,\t,\r]/ ;                              // regex pour séparateur, et non pas un argument.
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
    console.log(finalArray)
}


// appelle des fonctions : 
error(argACouper,excedent)
fonction_split(argACouper)