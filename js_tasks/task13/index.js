let header=document.querySelector("header");
header.style.backgroundColor="#ff8000";

let h2=document.querySelector("#color-guide h2");
h2.style.color="#ff8000";

let btn=document.querySelector("footer .button");
btn.style.backgroundColor="#ff8000";

let h1=document.querySelector("h1");
h1.style.color="rgba(0, 0, 0, 0.7)";

let banner=document.querySelector("#banner");
banner.style.backgroundColor="rgba(255, 128, 0, 0.75)";

let footer=document.querySelector("footer");
footer.style.backgroundColor="rgba(0,0, 0, 0.7)";

let swatch=document.querySelector(".color .swatches h4");
swatch.style.color="#9b9b9b";

document.querySelector('.reds .base-color').textContent="hsl(350, 100%, 50%)";
document.querySelector('.blues .base-color').textContent="HSL (220, 100%, 50%)";
document.querySelector('.greens .base-color').textContent="HSL (130, 100%, 50%)";

//red
document.querySelector(".reds .lightness .color-1").style.backgroundColor="350, 100%, 80%";
document.querySelector(".reds .saturation .color-1").style.backgroundColor="hsl(350, 100%, 50%)";
document.querySelector(".reds .hue .color-1").style.backgroundColor="hsl(320, 100%, 50%)";
//blue
document.querySelector(".blues .lightness .color-1").style.backgroundColor="hsl(220, 100%, 90%)";
document.querySelector(".blues .saturation .color-1").style.backgroundColor="hsl(220, 100%, 50%)";
document.querySelector(".blues .hue .color-1").style.backgroundColor="hsl(260, 100%, 50%)";
//green
document.querySelector(".greens .lightness .color-1").style.backgroundColor="hsl(130, 100%, 80%)";
document.querySelector(".greens .saturation .color-1").style.backgroundColor="hsl(130, 100%, 50%)";
document.querySelector(".greens .hue .color-1").style.backgroundColor="hsl(130, 100%, 50%)";