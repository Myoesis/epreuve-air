// Consigne : Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.


// Pistes : 1 ) split l'argv en fonction du fusion?
//          2 ) push Array2 dans Array1 (ou concat les 2)
//          3 ) retrier l'ensemble.  


// Déclarer mes variables : 
let tab=process.argv.slice(2)


// gestions des erreurs :



// mes fonctions : 
let creatArray1 = (arrayNonMixé) => {
    for (let i=0 ; i<arrayNonMixé.length ; i++) {
        if(arrayNonMixé[i] === "fusion") {
            let array1 = arrayNonMixé.slice(0,i)
            return array1
        }
    }
}

let creatArray2 = (arrayNonMixé) => {
    for (let i=0 ; i<arrayNonMixé.length ; i++) {
        if(arrayNonMixé[i] === "fusion") {
            let array2 = arrayNonMixé.slice(i+1)
            return array2
        }
    }
}

let sorted_fusion= (array1, array2)=> {
  let newArray = array1.concat(array2)
  for (let i=0 ; i<newArray.length ; i++) {
    if (parseInt(newArray[i])>parseInt(newArray[i+1])) {
        for (let i = 0 ; i< newArray.length ; i++) {                  
            let min=i                                               
            for (let j=i ; j < newArray.length ; j++) {              
                if (parseInt(newArray[j])<parseInt(newArray[min])) {
                    min=j
                }
            } 
            [newArray[i],newArray[min]] = [newArray[min],newArray[i]]  
        }
    }
}    
console.log(newArray)

}






// appelle des fonctions : 
sorted_fusion(creatArray1(tab),creatArray2(tab))