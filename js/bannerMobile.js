var m = 0;
var imagesMobile = [];

imagesMobile[0] = "./assets/banner/banner-mobilepng1.png";
imagesMobile[1] = "./assets/banner/banner-mobilepng2.png";

function changeImgM() {
    document.slideMobile.src = imagesMobile[m];

    if (m < imagesMobile.length - 1) {
        m++;
    } else {
        m = 0;
    }

    setTimeout("changeImgM()", time);
}

window.onload = changeImgM;