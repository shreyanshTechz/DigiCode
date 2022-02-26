var countDownDate = new Date("February 29, 2022 15:37:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    document.getElementById("time").innerHTML = time;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Times Up";
    }
}, 1000);


SEC_HTTPS = true;
SEC_BASE = "compilers.widgets.sphere-engine.com";
(function(d, s, id) {
    SEC = window.SEC || (window.SEC = []);
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "sphere-engine-compilers-jssdk"));