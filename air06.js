// Consigne :Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.


// Pistes : creer un regex? let regex = new rexExp(maVariable)


// Déclarer mes variables :
let argArray = process.argv.slice(2)
let discriminant = argArray[argArray.length-1]

 
// gestions des erreurs :
let error =(argArray) => {
    if (argArray.length < 2) {
        return "error 06"
    }
}


// mes fonctions : 

let monRegex = (tabArgu , stringAChercher) => {                                              // Il faudrait qu'un lettre soit prise en compte en majuscule ET minuscule
    let çaPasse =""
    for (let i=0 ; i< tabArgu.length-1 ; i++){
        let index = tabArgu[i].indexOf(stringAChercher[0])
        if(stringAChercher != tabArgu[i].slice(index,index + stringAChercher.length)) {
            çaPasse += `${tabArgu[i]} `
        }
    }
    return çaPasse
}

let regexPerso = (argument) => {
    let stringAChercher = argument[argument.length-1]
    error(argument)
    return monRegex(argument,stringAChercher)
}

if (require.main === module) {
    const arguments = process.argv.slice(2)
    if (error(arguments)=== "error 06") {
        console.log("error 06")
        process.exit(1)
    }
    console.log(regexPerso(arguments))
} else {
    module.exports= {regexPerso}
}