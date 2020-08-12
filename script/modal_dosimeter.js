var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var header = document.getElementById("header").style.display;
var footer = document.getElementById("footer").style.display;

var img1 = document.getElementById("dosi_1");
var img2 = document.getElementById("dosi_2");
var img3 = document.getElementById("dosi_3");

span.onclick = function() { 
    modal.style.display = "none";
    document.getElementById("header").style.display="block";
    document.getElementById("footer").style.display="block";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
        document.getElementById("header").style.display="block";
        document.getElementById("footer").style.display="block";
    }
};

img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_dosi_1.jpg";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_dosi_2.jpg";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_dosi_3.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}
