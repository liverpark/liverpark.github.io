const images =[
    "tokyo.jpg",
    "city.jpg",
    "night.jpg"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage=document.createElement("img");
bgImage.src=`background/${chosenImage}`;
document.body.appendChild(bgImage);