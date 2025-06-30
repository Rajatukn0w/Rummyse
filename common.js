let setResult = false;
window.onscroll = function() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (!setResult) {
            setResult = true;
            navbar.classList.add("fixed-top");
        }
    } else {
        setResult = false;
        navbar.classList.remove("fixed-top");
    }
};