// Consigne : Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort). 


// Pistes : couper la liste en deux SELON UN PIVOT/ trier chaque liste / regrouper l'ensemble ????
// fonction 1 : trouver le pivot d'une liste
// fonction 2 : séparer en 2 listes (au dessus et en dessous du pivot) et on recommence avec un pivot pour chaque nouvelle liste etc... 

// Déclarer mes variables :
let arrayToSort= process.argv.slice(2)


// gestions des erreurs :
let error = (array) => {
    if (array.length ===0){
        console.log("tu dois entrer quelque chose")
        process.exit()
    }
    for (let i=0; i< array.length; i++) {
        if(isNaN(array[i])) {
            console.log("tu ne dois entrer que des chiffres")
            process.exit()
        }
    }
}


// mes fonctions :  
let findPivot = (array) => {
    let max = 0 
    let min = Number.MAX_VALUE
    for (let i=0 ; i<array.length ;i++) {
        if (parseInt(array[i])>max) {
            max = parseInt(array[i])
        }
        if (parseInt(array[i])<min) {
            min = parseInt(array[i])
        }
    }
    let pivot = Math.floor((max + min) / 2)                
    return pivot
}

let quickSort = (array) => {                                 
   if (array.length <=1) {
    return array
    } else {
        let pivot = findPivot(array)
        let array1=[]
        let array2=[]
        for (let i=0 ; i<array.length ; i++) {
            if (parseInt(array[i])<pivot){
                array1.push(array[i])
            } else {
                array2.push(array[i])
            }
        }
    array2 = quickSort(array2)
    array1 = quickSort(array1)
    return array1.concat(array2)
    }
}

// comment ca marche : d'abors coder la condition de sortie avec un if (ca doitêtre la premiere chose à tester pour éviter qu'on ne crée une boucle infini)
// ensuite, si la condition de sortie n'est pas respecté : coder la fonction que l'on souhaite, et en fin de else, rappeler la fonction avec un nouvel élément, 
// puis seulement return le résultat pour que ça remonte au fur et à mesure dans les fonctions.




// appelle des fonctions : 
error(arrayToSort)
findPivot(arrayToSort)
console.log(quickSort(arrayToSort))           // pas convaincu du log d'une fonction, mais j'ai pas trouvé d'alternative