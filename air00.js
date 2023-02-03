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
let fonction_split = (aSpliter , separateur) => {
    separateur = /[\s,\t,\r]/ ;
    let indexRepere =0
    for (let i=0 ; i < aSpliter.length ; i++) {
        if (separateur.test(aSpliter[i])) {
            finalArray.push(aSpliter.slice(indexRepere,i))
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