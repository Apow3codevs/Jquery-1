$(document).ready(function(){

    $(".btn").click(function(){
        alert("Thank you for submission");
    });

    $(".form-control").focus(function(){
        $(this).css("background-color", "#008B8B");
    });

    $(".form-control").blur(function(){
        $(this).css("background-color", "#2C333B");
    });

    $(".menu-li").hover(function(){
        $(this).css("color", "white");
        $(this).fadeToggle("slow");
    });

    $(".btn-box-1").click(function(){
        $(".box-1").fadeToggle(2000);
        $(".box-1").css("background","green");
    });

    $(".btn-box-2").click(function(){
        $(".box-2").fadeToggle(2000);
        $(".box-2").css("background","blue");
    });

    $(".btn-box-3").click(function(){
        $(".box-3").fadeToggle(2000);
        $(".box-3").css("background","skyblue");
    });

    $(".btn-box-4").click(function(){
        $(".box-4").fadeToggle(2000);
        $(".box-4").css("background","black");
    });

    $(".btn-box-5").click(function(){
        $(".box-1").fadeToggle(1000);
        $(".box-2").fadeToggle(2000);
        $(".box-3").fadeToggle(3000);
        $(".box-4").fadeToggle(4000);
    });

});