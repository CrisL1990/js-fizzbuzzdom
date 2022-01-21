/*
Lo scopo di questo programma è generare delle box in quantità pari al numero inserito dall'utente.
Per ogni box generata (con valore pari a i), determinare se i è divisibile per 3, 5, entrambi o nessuno dei due.
Determinato ciò, il programma cambierà background color e contenuto in funzione di quale caso si rivelerà vero
*/ 

//Assegna alla costante container il div con ID "container" dell' HTML
const container = document.getElementById("container");

//Chiede all'utente quanti numeri vuole generare e converte valore da stringa a int
let boxNumber = parseInt(prompt("Inserisci quanti numeri vuoi generare: ")) 

//Verifica che il boxNumber abbia un valore superiore a 0 e genera un
//messaggio di errore in caso contrario
if(boxNumber > 0){

    //Inizia a scorrere i numeri da 1 a valore di boxNumber uno ad uno
    for(let i = 1; i <= boxNumber; i++){
    
        //Genera box FIZZ
        if(i % 3 == 0 && i % 5 != 0){
            container.innerHTML = container.innerHTML + `<div class="box fizz">` + "Fizz" + `</div>`;
        }

        //Genera box BUZZ
        else if(i % 3 != 0 && i % 5 == 0){
            container.innerHTML = container.innerHTML + `<div class="box buzz">` + "Buzz" + `</div>`;
        }

        //Genera box FIZZBUZZ
        else if(i % 3 == 0 && i % 5 == 0){
            container.innerHTML = container.innerHTML + `<div class="box fizz-buzz">` + "FizzBuzz" + `</div>`;
        }
            
        //Genera box con numeri non divisibili per 3 o 5
        else{
            container.innerHTML = container.innerHTML + `<div class="box number">` + i + `</div>`;
        }

    }
}

else{
    alert("Per favore inserisci un numero maggiore di 0")
}



    
