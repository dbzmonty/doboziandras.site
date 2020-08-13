var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var header = document.getElementById("header").style.display;
var footer = document.getElementById("footer").style.display;

var img1 = document.getElementById("smarthome_1");
var img2 = document.getElementById("smarthome_2");
var img3 = document.getElementById("smarthome_3");
var img4 = document.getElementById("smarthome_4");
var img5 = document.getElementById("smarthome_5");

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
    modalImg.src = "../img/full_smarthome_1.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_smarthome_2.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_smarthome_3.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_smarthome_4.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_smarthome_5.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}