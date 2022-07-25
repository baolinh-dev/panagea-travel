let videoBtn = document.querySelectorAll('.vid-btn'); 
var header = document.querySelector('.header');  
var headerMobi = document.querySelector('.header-mobi');  
var menuMobile = document.querySelector('.menu-mobile-btn'); 
var naviMobile = document.querySelector('.navigation-mobi');  
var closeModalBtn = document.querySelectorAll('.modal--header i');  
var openModalBtn = document.querySelectorAll('.open-modal-btn');  
var modalOverlay = document.querySelector('.modal--overlay');  
var modalContainer = document.querySelector('.modal--container');  
var modalOpen = document.querySelector('.modal-open');  
const naviHeight = naviMobile.clientHeight
// Toggle Slider
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src; 
    });
}); 
// Auto Play Owlcarousel Tour
$('.owl-carousel').owlCarousel({ 
    autoplay: true, 
    autoplayTimeout: 3000, 
    // stagePadding: 50,
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        740: {
            items: 2
        },
        1024: {
            items: 4
        }
    }
}) 
// Scroll to disappear header
$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop(); 
        if (pos_body <= 380) {
            header.classList.add('header--scroll');  
            headerMobi.classList.add('header--scroll'); 
        } else { 
            header.classList.remove('header--scroll');  
            headerMobi.classList.remove('header--scroll');  
        }   
    });
}) 
// Click Scroll To Top Website
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});  
// Menu Mobile 
menuMobile.onclick = function() {    
    var isClosed = naviMobile.clientHeight === naviHeight;
    if (isClosed) { 
        naviMobile.classList.remove('hide') 
    } else { 
        naviMobile.classList.add('hide') 
    }
}   
function hideModal() { 
    modalOverlay.classList.remove('modal-open')
}
function showModal() { 
    modalOverlay.classList.add('modal-open')
}

// Hide Modal   


// Open Modal    
for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', showModal) 
    
} 
for (let i = 0; i < closeModalBtn.length; i++) {
    closeModalBtn[i].addEventListener('click', hideModal)
} 
// An ngoai thi cung hide modal 
modalOverlay.addEventListener('click', hideModal)  
modalContainer.addEventListener('click', function (event){ 
    event.stopPropagation()
})  

// Cart 
var cart = document.querySelector('.cart');
var select = document.querySelector('.select');
var btnBookNow = document.querySelector('.btn-book-now');
    btnBookNow.onclick = function() { 
        var add = Number(cart.getAttribute('data-count') || 0); 
        cart.setAttribute('data-count', add + 1);
        cart.classList.add('zero')
    }

