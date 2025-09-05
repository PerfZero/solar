function openPopup() {
    document.getElementById('callbackPopup').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openQuiz() {
    alert('Функция квиза будет добавлена позже. Спасибо за интерес!');
}

function closePopup() {
    document.getElementById('callbackPopup').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.popup__overlay').addEventListener('click', closePopup);

    document.querySelector('.popup__form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Заявка отправлена! Мы перезвоним вам в ближайшее время.');
        closePopup();
    });
});

function toggleMobileMenu() {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.querySelector('.popup__overlay');
    const popupForm = document.querySelector('.popup__form');
    
    if (popupOverlay) {
        popupOverlay.addEventListener('click', closePopup);
    }
    
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Заявка отправлена!');
            closePopup();
        });
    }
    
    initProductsSwitch();
    initHeaderScroll();
    initPortfolioSlider();
    initReviewsSlider();
    initYandexMap();
    initFooterForm();
});

function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initPortfolioSlider() {
    const portfolioSwiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 1.2,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
  
        pagination: {
            el: '.portfolio__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.portfolio__arrow--next',
            prevEl: '.portfolio__arrow--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                initialSlide: 1,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
                initialSlide: 1,
                
            },
            1024: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            }
        }
    });
}

function initReviewsSlider() {
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 1.4,
        spaceBetween: 100,
        centeredSlides: true,
        initialSlide: 1,
  
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews__arrow--next',
            prevEl: '.reviews__arrow--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 1.4,
                spaceBetween: 100,
            }
        }
    });
}

function initYandexMap() {
    ymaps.ready(function () {
        const map = new ymaps.Map('map', {
            center: [55.700430, 52.360759],
            zoom: 16,
            controls: ['zoomControl']
        });

        const placemark = new ymaps.Placemark([55.700430, 52.360759], {
            balloonContent: 'ООО «Ледкрафт»<br>г. Набережные Челны, переулок Железнодорожников, д. 7а'
        }, {
            preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(placemark);
    });
}

function initFooterForm() {
    const footerForm = document.querySelector('.footer__form');
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const checkbox = this.querySelector('input[type="checkbox"]');
            
            if (!checkbox.checked) {
                alert('Необходимо согласиться с условиями');
                return;
            }
            
            if (name && phone) {
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                this.reset();
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });
    }
}

function initProductsSwitch() {
    const productsItems = document.querySelectorAll('.products__item');
    
    productsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (this.classList.contains('products__item--large')) {
                return;
            }
            
            const currentLarge = document.querySelector('.products__item--large');
            
            currentLarge.classList.remove('products__item--large');
            currentLarge.classList.add('products__item--small');
            
            this.classList.remove('products__item--small');
            this.classList.add('products__item--large');
        });
    });
}
