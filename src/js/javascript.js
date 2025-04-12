function setTabIndex() {
    var projectImages = document.querySelectorAll("img");
    for(let i = 0; i < projectImages.length; i++) {
        console.log("images " + i);

        projectImages[i].setAttribute("tabindex", 0);
    }
}

function upDate(previewPic) {
    var imageUpdated = document.getElementById("image");

    imageUpdated.style.backgroundImage = "url('" + previewPic.src + "')";

    imageUpdated.innerHTML = previewPic.alt;
}

function unDo() {
    var imageUpdated = document.getElementById('image');

    imageUpdated.style.backgroundImage = "url('')";

    imageUpdated.innerHTML = "Hover over an image below to display here."
}