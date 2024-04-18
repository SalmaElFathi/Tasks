//let nvg=document.querySelector("nav img");
let image=document.querySelector("img");
let spn=document.querySelectorAll("nav span");
let content=document.querySelector(".content");
let header=document.querySelector(".header");
let h=document.querySelector(".header h1");
let btn=document.querySelector(".button");
let nutrition=document.querySelector(".nutrition");
let li=document.querySelectorAll("li");



image.style.width="180px";
image.style.margin="0 auto";
spn.forEach(span => {
    span.style.margin = "0px 10px";
  });
content.style.height="500px";
content.style.margin="10px auto";
content.style.overflow="auto";
header.style.height="320px";
h.style.padding="20px";
h.style.margin="0 auto";
btn.style.width="200px";
btn.style.padding="20px";
btn.style.margin="40px auto";
btn.style.border="1px solid blue";
nutrition.style.padding="20px";
li.forEach(item => {
    item.style.width = "200px";
    item.style.padding = "10px 20px";
    item.style.marginBottom = "3px";
  });

