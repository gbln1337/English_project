let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');  
  }
  
   slides[slideIndex-1].classList.add('active');
}  

setInterval(() => {
  plusSlide(1);
}, 2000);
