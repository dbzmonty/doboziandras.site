var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var header = document.getElementById("header").style.display;
var footer = document.getElementById("footer").style.display;

var img1 = document.getElementById("raid_1");
var img2 = document.getElementById("raid_2");
var img3 = document.getElementById("raid_3");
var img4 = document.getElementById("raid_4");
var img5 = document.getElementById("raid_5");
var img6 = document.getElementById("raid_6");
var img7 = document.getElementById("raid_7");
var img8 = document.getElementById("raid_8");

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
    modalImg.src = "../img/full_raid_1.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_2.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_3.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_4.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_5.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img6.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_6.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img7.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_7.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}

img8.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../img/full_raid_8.png";
    captionText.innerHTML = this.alt;
    document.getElementById("header").style.display="none";
    document.getElementById("footer").style.display="none";
}
