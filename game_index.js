!(function(doc, win) {
    var docEle = doc.documentElement,
        event = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = document.body.clientWidth;
            width && (docEle.style.fontSize = (width / 32) + "px");
        };

    win.addEventListener(event, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));

function add_down_data() {
    const url = 'add_download?sign=' + document.getElementById('hid-sign').value;
    fetch(url).then(data => {
        return true
    }).then(data => {
        return true
    });
}