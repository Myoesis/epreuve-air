// Consigne : Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort). 


// Pistes : couper la liste en deux SELON UN PIVOT/ trier chaque liste / regrouper l'ensemble ????
// fonction 1 : trouver le pivot d'une liste
// fonction 2 : séparer en 2 listes (au dessus et en dessous du pivot) et on recommence avec un pivot pour chaque nouvelle liste etc... 

// Déclarer mes variables :
let arrayToSort= process.argv.slice(2)


// gestions des erreurs :



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
    let pivot = (max+min) >> 1                 // >>1 permet en gros de diviser par 2. J'ai pas encore trop compris pourquoi
    return pivot
}

let quickSort = (array) => {
    let array1 = []
    let array2 = []
    for (let i =0 ; i<array.length ; i++) {
        if (parseInt(array[i])>findPivot(array)) {
            array2.push(parseInt(array[i]))
        } else {
            array1.push(parseInt(array[i]))
        }
    }
    if (array1)
    array = array1.concat(array2)
    console.log(array)

}








// appelle des fonctions : 
findPivot(arrayToSort)
quickSort(arrayToSort)