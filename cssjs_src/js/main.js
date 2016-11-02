function openWebTracer() {
    var d = document.querySelector("#tracer-web");
    dialogPolyfill.registerDialog(d);
    d.showModal();
    d.querySelector('.proceed').addEventListener('click', function() {
        d.close();
    });
}

function openDesktopTracer() {
    var d = document.querySelector("#tracer-desktop");
    dialogPolyfill.registerDialog(d);
    d.showModal();
    d.querySelector('.close').addEventListener('click', function() {
        d.close();
    });
}

var lightbox = lity();

function lightUp(val) {
    lightbox(val);
}
$(".fab-menu>.items").slideToggle();

function toggleMenu() {
    $(".fab-menu>.items").slideToggle("fast");
    var t = $("#mobile-menu>i").text();
    $("#mobile-menu>i").text(t == "close" ? "menu" : "close");
}

$("*").scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $(".fab-menu").removeClass('hidden');
        $(".fab-menu>.items").removeClass('hidden');
    } else {
        $('.fab-menu').addClass('hidden');
    }
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("November 24, 2016 06:59:59");
initializeClock('clock', deadline);

$(document).ready(function() {
    $("#particle-hero").particleground({
        dotColor: "#fff",
        lineColor: "#fff",
        particleRadius: 20
    })
});

jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});

$("#schedule-toggle").slideToggle();
$("#toggle-tb").on("click",function(){
  $("#schedule-toggle").slideToggle();
  $("#toggle-tb").toggleText("HIDE SCHEDULE","SHOW SCHEDULE");
})
