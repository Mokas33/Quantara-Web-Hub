function handleSubmit(e){
  e.preventDefault();
  var btn=document.querySelector('.form-submit');
  btn.textContent='Sending...';
  btn.disabled=true;
  setTimeout(function(){
    document.getElementById('contactForm').reset();
    document.getElementById('successMsg').style.display='block';
    btn.textContent='Send message →';
    btn.disabled=false;
  },1200);
}
var hamburger=document.getElementById('hamburger');
var mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',function(){
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMenu(){
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}
