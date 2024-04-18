let header=document.querySelector("header");
let ul_elm=document.querySelector("ul");
let li_elm=document.querySelectorAll("nav li");
let main_elm=document.querySelector("main");
let supporting=document.querySelector(".supporting .container");
let support_col=document.querySelectorAll(".supporting .col");
let footer_elm=document.querySelector("footer");

header.style.position="fixed";
header.style.width="100%";
ul_elm.style.display="flex";
li_elm.forEach(i => {
  i.style.width="80px";
});
main_elm.style.position="relative";
header.style.zIndex = '999';
main_elm.style.top = '80px';

supporting.style.display = "flex";

support_col.forEach(col => {
  //col.style.display = "flex"; 
  col.style.width = "200px"; 
  col.style.height = "200px"; 
  col.style.justifyContent= "center"; 

});
footer_elm.style.position = 'fixed';
footer_elm.style.bottom = '0';
footer_elm.style.width = '100%';

/*var header = document.querySelector('header');
  var nav = document.querySelector('nav');
  var main = document.querySelector('main');
  var supporting = document.querySelector('.supporting');

  // Task 1: Set header position to fixed
  header.style.position = 'fixed';

  // Task 2: Stretch header across its parent element
  header.style.width = '100%';

  // Task 3: Display list items horizontally
  nav.style.display = 'flex';

  // Task 4: Set width of list items
  var navItems = document.querySelectorAll('nav li');
  navItems.forEach(function(item) {
    item.style.width = '80px';
  });

  // Task 6: Set main position to relative
  main.style.position = 'relative';

  // Task 7: Ensure header is visible
  header.style.zIndex = '999';

  // Task 8: Offset main by 80 pixels from the top
  main.style.top = '80px';

  // Task 13: Make supporting elements appear horizontally
  supporting.style.display = 'flex';

  // Task 14: Set width and height of supporting columns
  var columns = document.querySelectorAll('.supporting .col');
  columns.forEach(function(col) {
    col.style.width = '200px';
    col.style.height = '200px';
  });

   //Optional Task: Fix footer to the bottom of the page
  var footer = document.querySelector('footer');
  footer.style.position = 'fixed';
  footer.style.bottom = '0';
  footer.style.width = '100%';
*/

