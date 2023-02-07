// Consigne : Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


// Pistes : 


// Déclarer mes variables :
let argArray = process.argv.slice(2)
let àAppliquer = argArray[argArray.length-1]
let regexDigit = /\D/ ; 



// gestions des erreurs :
let error = (tabArgu) => {
    if (tabArgu.length < 2) {
        console.log("tu manques d'arguments")
        process.exit()
    } else {
    for (let i=0 ; i<tabArgu.length ; i++) {
        if(regexDigit.test(tabArgu[i])) {
            console.log("error")
            process.exit()
            }
        }
    }
}


// mes fonctions : 
let forEach =(tabArgu , àAppliquer) => {
    let resultats =[]
    for(let i=0 ; i < tabArgu.length - 1 ; i++) {
        let result = parseInt(tabArgu[i]) + parseInt(àAppliquer)
        resultats.push(result)
    } 
    console.log(resultats)

}



// appelle des fonctions : 
error(argArray)
forEach(argArray, àAppliquer)
