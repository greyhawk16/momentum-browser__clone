const images = [
    "f-14_landing.jpg",
    "f-14_vf84.jpg",
    "md-11f_kal.jpg",
    "md-11f_kal-2.jpg"
];

const chosenImgages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImgages}`;

document.body.appendChild(bgImage);