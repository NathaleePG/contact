/**
 * Created by Anmol on 2017-07-25.
 */

$(function() {
    var $secCon = $("#containerSec");
    var $nav = $("#containerSec > #fixed > ul > li");
    var $bar = $("#containerSec > #fixed > ul");
    var $button = $("#toggle");
    var $body = $(".body");
    var $fixed = $("#containerSec > #fixed");

    $button.on("click", function(){
        $bar.toggle();
        if($bar.css("display") === "none"){
            $button.css("opacity", 0.9);
            $fixed.css("border-bottom", "1px solid black");
        } else{
            $button.css("opacity", 0.25);
            $fixed.css("border-bottom", "0");

        }
    });

    /*
    $nav.on("mouseover", function(){
        var i = $(this).index();
        var counter = 0;
        $nav.each(function(){
            if(counter !== i){
                $(this).css("opacity", 0.3);
            }
            counter += 1;
        })
    });

    $nav.mouseleave(function(){
        $nav.each(function(){
            $(this).css("opacity", 1);
        })
    });
    */
    /*
    function spin(item, delayTime){
        var target = 360;
        var start = 0;
        var counter = 2;
        setTimeout(function(){
            var timer = setInterval(function(){
                if (start >= target){
                    clearInterval(timer);
                }
                item.css("transform", "rotate("+start+"deg)");
                start += counter;
            },1);
        },delayTime);
    }
    spin($header,1500);
    */
});

