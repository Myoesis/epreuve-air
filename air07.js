// Consigne : Créez un programme qui ajoute à une liste d’entiers triée 
//un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.



// gestions des erreurs :

let error = (arguments) => {
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "error 07";
        }
    }
    if (arguments.length < 2) {
        return "error 07";
    }

    let tabTrié = arguments.slice(0, arguments.length - 1);
    for (let i = 0; i < tabTrié.length; i++) {
        let min = i;
        for (let j = i + 1; j < tabTrié.length; j++) {
            if (parseInt(tabTrié[j]) < parseInt(tabTrié[min])) {
                min = j;
            }
        }
        if (min !== i) {
            [tabTrié[i], tabTrié[min]] = [tabTrié[min], tabTrié[i]];
        }
    }

    for (let i = 0; i < arguments.length - 1; i++) {
        if (parseInt(arguments[i]) !== parseInt(tabTrié[i])) {
            return `ton tableau n'est pas trié ! Il devrait être comme suit : ${tabTrié}`;
        }
    }
};



// mes fonctions : 
let jeRangePourToi = (tabTrié , àTrier) => {                                        // Solution 1 : push puis re trier
    tabTrié.push(àTrier)
    for (let i=0 ; i<tabTrié.length ; i++) {
        if (parseInt(tabTrié[i])>parseInt(tabTrié[i+1])) {
            for (let i = 0 ; i< tabTrié.length ; i++) {                  
                let min=i                                               
                for (let j=i ; j < tabTrié.length ; j++) {              
                    if (parseInt(tabTrié[j])<parseInt(tabTrié[min])) {
                        min=j
                    }
                } 
                [tabTrié[i],tabTrié[min]] = [tabTrié[min],tabTrié[i]]  
            }
    console.log(tabTrié)
        }
    }    
}

let jeRangeEncore = (tabTrié , àTrier) => {                                                        // solution 2 : insérer direct
    let indexInsert=0
    for(let i=0 ; i< tabTrié.length ; i++){
        if(parseInt(tabTrié[i])<parseInt(àTrier) && parseInt(àTrier)<parseInt(tabTrié[i+1])) {     // vérifier où se situerait l'élément à insérer
            indexInsert = `${i+1}`                                                                 // assigner son index
        } else if (parseInt(àTrier)<parseInt(tabTrié[0])) {
            indexInsert = 0
        } else if (parseInt(àTrier)>parseInt(tabTrié[tabTrié.length-1])) {
            indexInsert = tabTrié.length
        }
    }
    tabTrié.splice(indexInsert,0,àTrier)                                                           // splice insert selon 3 critères :
    return tabTrié                                                                    // l'index à partir duquel on veut insérer 
}                                                                                                  // le nombre d'élements à supprimer  
                                                                                                   // l'élément à ajouter

let InsertEtTri =(arguments) => {
    let tabTrié= arguments.slice(0,arguments.length-1)
    let àTrier = arguments[arguments.length-1]
    errorMessage = error(arguments)
    return errorMessage ? errorMessage : jeRangeEncore(tabTrié, àTrier) 
}


if (require.main === module) {
    const arguments = process.argv.slice(2)
    console.log(InsertEtTri(arguments))
} else {
    module.exports= {InsertEtTri}
}