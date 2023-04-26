// Chiedi all’utente il suo nome, 
let nomeUtente = prompt("Inserisci il tuo nome");
console.log(
    nomeUtente
)




// poi chiedi il suo cognome, 


let cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(
    cognomeUtente
)



// poi chiedi il suo colore preferito

let coloreUtente = prompt("Inserisci il tuo colore preferito");
console.log(
    coloreUtente
)

// Infine scrivi sulla pagina nomecognomecolorepreferito21


document.getElementById("mio_id").innerHTML =  nomeUtente + cognomeUtente + coloreUtente +"21"
