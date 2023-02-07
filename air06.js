// Consigne :Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.


// Pistes : creer un regex? let regex = new rexExp(maVariable)


// Déclarer mes variables :
let argArray = process.argv.slice(2)
let discriminant = argArray[argArray.length-1]

 
// gestions des erreurs :



// mes fonctions : 

let monRegex = (tabArgu , stringAChercher) => {
    let çaPasse =""
    for (let i=0 ; i< tabArgu.length-1 ; i++){
        let index = tabArgu[i].indexOf(stringAChercher[0])
        if(stringAChercher != tabArgu[i].slice(index,index + stringAChercher.length)) {
            çaPasse += `${tabArgu[i]} `
        }
    }
    console.log(çaPasse)
}



// appelle des fonctions : 
monRegex(argArray,discriminant)