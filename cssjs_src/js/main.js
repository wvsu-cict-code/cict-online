function openWebTracer() {
var d = document.querySelector("#tracer-web");
dialogPolyfill.registerDialog(d);
d.showModal();
d.querySelector('.proceed').addEventListener('click', function () {
    d.close();
});
}

function openDesktopTracer() {
var d = document.querySelector("#tracer-desktop");
dialogPolyfill.registerDialog(d);
d.showModal();
d.querySelector('.close').addEventListener('click', function () {
    d.close();
});
}

var lightbox = lity();

function lightUp(val){
	lightbox(val);
}
$(".fab-menu>.items").slideToggle();
function toggleMenu(){
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
