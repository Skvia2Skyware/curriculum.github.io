const carta = document.getElementById('#lista')
const toplogo = document.getElementById('mybtn')
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toplogo.style.display = 'block'
    }
    else {
        toplogo.style.display = 'none'
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
