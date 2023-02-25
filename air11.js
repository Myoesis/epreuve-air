// Consigne :


// Pistes : 


// Déclarer mes variables :
let charToShow=process.argv[2]
let nbEtage=process.argv[3]
let excedent=process.argv[4]

// gestions des erreurs :
let error = (char,étage, excedent) => {
    if (char == undefined || char.length !=1){
        console.log("il faut un seul élément ici")
        process.exit()
    } else if (excedent) {
        console.log("trop d'arguments ici")
        process.exit()
    } else if (isNaN(étage)){
        console.log("il faut un NOMBRE d'étages, rien d'autre")
        process.exit()
    }
}


// mes fonctions : 
let pyramide = (char , nbEtage) => {
    let nbSpace=nbEtage-1
   for (let i=0; i<nbEtage; i++) {
    let étage=""
    for(let j=0 ; j<nbEtage; j++) {
        if(j<nbSpace) {
            étage+=" "
        } else if (j=== nbSpace) {
            let print = 0
            while (print <2*i+1) {
            étage+=char
            print++
            }
        }
    }
    console.log(étage)
    nbSpace--
   }
}







// appelle des fonctions : 
error(charToShow,nbEtage, excedent)
pyramide(charToShow , nbEtage)