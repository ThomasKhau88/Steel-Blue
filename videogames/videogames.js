$(document).ready(function() { 
        var videogames = $(".videogames")
        $("#btn1").click(function(){
            $(".videogames").show();
        });
        $("#btn2").click(function(){
            $(".videogames").hide();
        });
});