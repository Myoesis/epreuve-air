// Consigne : Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


// Pistes : 


// Déclarer mes variables :



// gestions des erreurs :
let error = (tabArgu) => {
    let regexDigit = /[^\d\+\-]/ ; 
    if (tabArgu.length < 2) {
        return "error 05.1"
    } else {
        for (let i=0 ; i<tabArgu.length ; i++) {
            if(regexDigit.test(tabArgu[i])) {
                return "error 05.2"
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
    return resultats

}

let operation = (arguments) => {
    let àAppliquer = arguments[arguments.length-1]
    error(arguments)
    return forEach(arguments,àAppliquer)
}
 

if (require.main === module) {
    const arguments = process.argv.slice(2)
    if (error(arguments)=== "error 05.1" || error(arguments)==="error 05.2") {
        console.log("error 05")
        process.exit(1)
    }
    console.log(operation(process.argv.slice(2)))
} else {
    module.exports= {operation}
}