window.onload = function () {
    var elem = document.getElementsByClassName("artistBox");
    var leng = elem.length;
    var num = parseInt(Math.random() * leng);
    for (var i = leng - 1; i >= 0; i--) {
        var e = elem[i];
        e.style.display = 'none';
    }
    elem[num].style.display = '';
}