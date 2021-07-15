var facts = [

    'Fun Fact: Polar Bears have black skin',
    'Fun Fact: Octopus have three hearts',
    'Fun Fact: All polar bears are left-handed, or rather, left-pawed',
    'Fun Fact: Butterflies taste with their feet',
    'Fun Fact: Alligators have been around for 150 million years',
    'Fun Fact: Koala fingerprints are so close to humans that they could taint crime scenes',
    'Fun Fact: Parrots will selflessly help each other out',
    'Fun Fact: Ghost crabs growl using teeth in their stomachs',
    'Fun Fact: Female lions do 90 percent of the hunting',
    'Fun Fact: Puffins use twigs to scratch their bodies',
    'Fun Fact: Bottlenose dolphins are even more right-handed than humans',
    'Fun Fact: Theres a kind of ant that only lives in a small area of Manhattan',
    'Fun Fact: Cows painted with zebra-like stripes can avoid being bitten by flies',
    'Fun Fact: Some pigs in China are the size of bears',
    'Fun Fact: Some sharks glow in the dark',
    'Fun Fact: Some snails have hairy shells',
    'Fun Fact: Cowbirds use secret passwords to teach their young',
    'Fun Fact: A grizzly bears bite is strong enough to crush a bowling ball',
    'Fun Fact: Humpback whales use bubbles to hunt',
    'Fun Fact: Ducks can surf',
    'Fun Fact: Pigeons can do math',
    'Fun Fact: Zebra stripes act as a natural bug repellant',
    'Fun Fact: Frogs can freeze without dying',
    'Fun Fact: Koalas sleep up to 22 hours a day',
    'Fun Fact: A group of ferrets is called a business',
    'Fun Fact: Octopuses can taste with their arms',
    'Fun Fact: Dolphins have names for one another',
    'Fun Fact: Sloths can take up to a month to completely digest a single leaf'

];

function buttonclick(){
    var randOption = Math.floor(Math.random() * facts.length);
    document.getElementById('doThis').innerHTML = facts[randOption];
    opacity=1;


}

function btndis1(){

    document.getElementById("aaaa").innerHTML = "";
    alert("Hover over images to learn more about them");
    alert("Click on Learn more to get more random fun facts!");
}

function facts() { 
    var sports = $(".sport")
    $(".btn1").on("click", function(){
        animal.animate({opacity: "1"});
    });
    $(".btn2").on("click", function(){
        animal.animate({opacity: "0"});
    });
}
function start(){
    opacity=0;
}

