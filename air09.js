// Consigne : Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.


// Pistes : changer l'index? 

// Déclarer mes variables :
let argArray = process.argv.slice(2)


// gestions des erreurs :
let error = (array) => {
    if (array.length<2) {
        console.log("il faut au moins deux arguments pour faire une rotation")
        process.exit()
    }
}


// mes fonctions : 
let turnLeft = (array) => {
    let temp = 0
    for (let i=0 ; i < array.length-1 ; i++) {
        if (i===0) {
            temp = array[i]
        } 
        array[i]=array[i+1]
    }
    array[array.length-1]=temp
    console.log(array)
}







// appelle des fonctions : 
error(argArray)
turnLeft(argArray)