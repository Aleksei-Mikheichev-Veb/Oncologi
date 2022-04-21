// Галерея
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__close');
const activeImage = document.querySelector('.modal__img');
const galleryImages = document.querySelectorAll('.gallery__image');
const galleryButtonLeft = document.querySelector('.modal__left');
const galleryButtonRight = document.querySelector('.modal__right');

galleryImages.forEach(galleryImage => { galleryImage.addEventListener('click', displayImage) });

function displayImage(e) {
    console.log('click');
    this.classList.add('_active');
    console.log(e.target);
    activeImage.src = e.target.src;
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

closeIcon.addEventListener('click', closeImage);
overlay.addEventListener('click', closeImage);
function closeImage() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

galleryButtonRight.addEventListener('click', nextImage);
function nextImage() {
    for (var i = 0; i < galleryImages.length; i++) {
        if (activeImage.src === galleryImages[i].src) {
            var nextImageVar = galleryImages[i + 1];
        }
    }
    if (nextImageVar === undefined) {
        activeImage.src = galleryImages[0].src;
    } else {
        activeImage.src = nextImageVar.src;
    }
}

galleryButtonLeft.addEventListener('click', prevImage);
function prevImage() {
    for (var i = 0; i < galleryImages.length; i++) {
        if (activeImage.src === galleryImages[i].src) {
            var nextImageVar = galleryImages[i - 1];
        }
    }
    if (nextImageVar === undefined) {
        activeImage.src = galleryImages[galleryImages.length - 1].src;
    } else {
        activeImage.src = nextImageVar.src;
    }
}


// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },
    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа
    slidesPerView: 6,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 10,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,

    // Скорость
    speed: 800,

    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',



    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 6,
        }
    },



});

// Инициализируем Swiper
let myImageSlider2 = new Swiper('.image-slider-2', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2'
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },
    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа
    slidesPerView: 6,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 10,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,

    // Скорость
    speed: 800,

    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',



    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 6,
        }
    },
});

// Инициализируем Swiper
let myImageSlider3 = new Swiper('.image-slider-3', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3'
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },
    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа
    slidesPerView: 6,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: false,

    // Отступ между слайдами
    spaceBetween: 10,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,

    // Скорость
    speed: 800,

    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',



    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 6,
        }
    },



});