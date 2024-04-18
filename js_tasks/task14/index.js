document.querySelector('.header').style.fontWeight="bold";
let h2=document.querySelector('h2');
let h1=document.querySelector('h1');
let p=document.querySelectorAll('p');
let journal=document.querySelector('.journal');
h2.style.fontWeight="500";
h1.style.fontWeight="900";
p.forEach(i=>{
    i.style.lineHeight="1.4";
})
document.querySelector('.first-letter').style.lineHeight="0.87";
document.querySelector('.quote').style.lineHeight="1.2";
document.querySelector('footer').style.lineHeight="1.5";
h2.style.fontFamily="'Work Sans','Arial',sans-serif";
h1.style.fontFamily="'Abril Fatface',sans-serif";
journal.style.fontFamily="'Work Sans',serif";
journal.style.fontFamily="'Merriweather',serif";
