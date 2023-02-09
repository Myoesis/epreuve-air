// Consigne : Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.


// Pistes : 1 ) split l'argv en fonction du fusion?
//          2 ) push Array2 dans Array1 (ou concat les 2)
//          3 ) retrier l'ensemble.  


// Déclarer mes variables : 
let tab=process.argv.slice(2)
let regexDigit = /\D(fusion)?/ // regex qui prend les chiffres ET le mot fusion ? si possible, on peut le placer dans la boucle error


// gestions des erreurs :
let error = (argumentPassé, newArray) => {
    // gestion si argument vide
    if(tab.length === 0){
        console.log("il faut donner des infos !")
        process.exit()
    }
    //gestion si absence du fusion en argument
    let fusion = false
    for (let i=0 ; i < argumentPassé.length ; i++ ) {
        if(argumentPassé[i]=== "fusion"){
            fusion=true
        }
    }
    if (!fusion) {
        console.log("il faut diviser le tableau avec le mot fusion")
        process.exit() 
    } 
}

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
error(tab)
sorted_fusion(creatArray1(tab),creatArray2(tab))