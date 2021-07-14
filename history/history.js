function buttonClicked(){
    var randomValue = 1;// var randomValue = Math.floor((Math.random() * 20)); 

    if (randomValue >= 0 && randomValue < 16){
        var randomDivListIndex = 1;// var randomDivListIndex = Math.floor((Math.random() * 6)) + 1; 


        if (randomValue >= 0 && randomValue < 6){ // FACTS
            var stuffDiv = idList[randomDivListIndex];
            
            $(`#${stuffDiv}`).empty();

            var fact = factsList[0]; //Math.floor((Math.random() * factsList.length))
            $(`#${stuffDiv}`).append($("<p>").text(fact));

            alert("sdafasdf");

        } else if (randomValue >= 6 && randomValue < 10){ // QUOTES

        } else if (randomValue >= 10 && randomValue < 13){ // RANDOM PHRASES

        } else if (randomValue >= 13 && randomValue < 16){ // RNADOM PEOPLE
            
        }

    } else{ // MEMES
        

    }
     
}


//JQuery
$(document).ready(function() {
    document.getElementById("pressMeButton").addEventListener("click", buttonClicked, false);

    var idList = ["rhrsDiv1", "rhrsDiv2", "rhrsDiv3", "rhrsDiv4", "rhrsDiv5", "rhrsDiv6", "rhrsDiv7", "rhrsDiv8"];

    var factsList = ["Julius Caesar was stabbed 23 times. Julius Caesar is probably the most iconic name associated with the Romans. Likewise, his assassination and death are also highly notorious. Due to his coup d’état of the Roman Republic and his proclamation of himself as Dictator for Life, along with his radical political views, a group of his fellow Roman senators led by his best friend Brutus assassinated him on March 15, 44 BC. During the assassination, Caesar was stabbed at least 23 times, before finally succumbing to his wounds. He passed away with fabled words to his former best friend Brutus, allegedly being “you too, sweet child?”"]; // 6/20
    var quotesList = []; // 4/20
    var randomPhrases = []; // 3/20
    var randomPeople = []; // 3/20
    var memesList = []; // 4/20

    // Functions
    


    // Detecting stuff
    // $("#pressMeButton").on("click", buttonClicked);

    



});





