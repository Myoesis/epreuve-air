// Consigne : Créez un programme qui ajoute à une liste d’entiers triée 
//un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.


// Pistes : 


// Déclarer mes variables :
let tableauTrié = process.argv.slice(2,process.argv.length-1)
let regexDigit = /\D/


// gestions des erreurs :
let error =(tabTrié)=>{
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
        }
    }
        console.log("ça a l'air trié")
}


// mes fonctions : 
let jeRangePourToi = (tabTrié , àTrier) => {

}







// appelle des fonctions : 
error(tableauTrié)