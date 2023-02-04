// Consigne : Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


// Pistes : si argArray[i]!=argArray[i+1] finalQuote += argArray[i]


// Déclarer mes variables :
let argumentPassé = process.argv[2]
let excedent = process.argv[3]
let finalQuote = ""


// gestions des erreurs :
let error = () => {
    if (excedent || !argumentPassé) {
        console.log("error")
        process.exit()
    }
}



// mes fonctions : 
let pasDeDoublon = (argumentPassé) => {
    for (let i = 0 ; i<argumentPassé.length ; i++) {
        if(argumentPassé[i]!=argumentPassé[i+1]){
            finalQuote+=argumentPassé[i]
        }
    }
    console.log(finalQuote)
}







// appelle des fonctions : 
error(argumentPassé)
pasDeDoublon(argumentPassé)