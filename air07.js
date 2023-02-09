// Consigne : Créez un programme qui ajoute à une liste d’entiers triée 
//un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.


// Pistes : 


// Déclarer mes variables :
let tableauTrié = process.argv.slice(2,process.argv.length-1)
let àTrier = process.argv[process.argv.length-1]
let regexDigit = /\D/


// gestions des erreurs :
let error =(tabTrié,àTrier)=>{
    for (let i=0 ; i < tabTrié.length ; i++) {
        if (parseInt(tabTrié[i])>parseInt(tabTrié[i+1])) {
            for (let i = 0 ; i< tabTrié.length ; i++) {                   // boucle 1 pour recommencer la boucle 2 plusieurs fois en avancant d'un index à chaque fois 
                let min=i                                               // on utilise min comme un index, et on comparera les nombres en utilisant leurs index
                for (let j=i ; j < tabTrié.length ; j++) {                // Boucle 2 : comparer les nombres, et garder en min l'index du plus petit
                    if (parseInt(tabTrié[j])<parseInt(tabTrié[min])) {
                        min=j
                    }
                } 
                [tabTrié[i],tabTrié[min]] = [tabTrié[min],tabTrié[i]]            // Remplacer le premier nombre (tabTrié[i]) par le plus petit nombre (tabTrié[min])
        
            }
            console.log("ton tableau n'est pas trié ! Il devrait être comme suit :" + tabTrié)

            process.exit()
        } else if (regexDigit.test(tabTrié[i])) {
            console.log("Ca doit n'être que des nombres")
            process.exit()
        } else if (regexDigit.test(àTrier)) {
            console.log("on doit classer un chiffre !")
            process.exit()
        }
    }
}


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
    console.log(tabTrié)                                                                           // l'index à partir duquel on veut insérer 
}                                                                                                  // le nombre d'élements à supprimer  
                                                                                                   // l'élément à ajouter




// appelle des fonctions : 
error(tableauTrié,àTrier)
jeRangeEncore(tableauTrié,àTrier)
//jeRangePourToi(tableauTrié,àTrier)
