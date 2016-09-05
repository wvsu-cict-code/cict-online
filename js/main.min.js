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