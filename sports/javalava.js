function initialize() { 
    var sports = $(".sport")
    $(".btn1").on("click", function(){
        sports.animate({opacity: "1"});
    });
    $(".btn2").on("click", function(){
        sports.animate({opacity: "0"});
    });
}