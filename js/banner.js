var i = 0;
var images = [];
var time = 3000;

images[0] = "./assets/banner/banner1.png";
images[1] = "./assets/banner/banner2.png";

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

// var m = 0;
// var imagesMobile = [];

// imagesMobile[0] = "./assets/banner/banner-mobilepng1.png";
// imagesMobile[1] = "./assets/banner/banner-mobilepng2.png";

// function changeImgM() {
//     document.slideMobile.src = imagesMobile[m];

//     if (m < imagesMobile.length - 1) {
//         m++;
//     } else {
//         m = 0;
//     }

//     setTimeout("changeImgM()", time);
// }

// window.onload = changeImgM;