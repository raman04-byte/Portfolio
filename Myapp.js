$(document).ready(function(){
$('.slider').slick({
arrows:false,
dots:true,
appendDots:'.sider-dots',
dotsClass :'dots'
});
let hemberger = document.querySelector('.hemberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hemberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
})
times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
})
});