let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
 showSlider('prev');
}
let timeRunning = 2000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
 }, timeAutoNext);

function showSlider(type){
 let itemSlider = document.querySelectorAll('.carousel .list .item');
 let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

 if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
 }
 else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev');
 }
 clearTimeout(runTimeOut);
 runTimeOut = setTimeout(() =>{
 carouselDom.classList.remove('next');
 carouselDom.classList.remove('prev');
 }, timeRunning);
 clearTimeout(runAutoRun);
 runAutoRun = setTimeout(()=>{
    nextDom.click();
 }, timeAutoNext);
}



 // Mobile view Navigation toggle code start from here
 function toggleNav(x) {
    x.classList.toggle("active");
  }
  function removeActive() {
    var element = document.getElementById("iconToggle");
    element.classList.remove("active");
  }


   // Reveal Website Elements On Scroll
   function reveal(){
      var reveals = document.querySelectorAll('.reveal');
      for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
    window.addEventListener('scroll', reveal);




// scroll top coding start from here
let myButton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20 ){
    myButton.style.display =  "block";
  } else {
    myButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}