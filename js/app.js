"use strict"


function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
// scroll document false

function is_touch_device() {
    return ('ontouchstart' in window);
  }
  
  function bodyFixed() { //scroll - false
    if(is_touch_device()) {
      document.body.classList.add('fixed')
    } else {
      let x=window.scrollX;
      let y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
  }
  
  function bodyNotFixed() { // scroll - true
    if(is_touch_device()) {
      document.body.classList.remove('fixed')
    } else {
      window.onscroll=function(){window.scrollTo()};
  
    }
  }



// //header
// window.onscroll = function() {headerFixed()};

// let header = document.querySelector(".header-w");

// let sticky = header.offsetTop;

// function headerFixed() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }
// }
// if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }



//Popup close 
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup')) {
    target.classList.remove('active')
    bodyNotFixed()
    // bodyNotFixed()
  }
  if(target.classList.contains('completed__slide')) {
    target.closest(".popup").classList.remove('active')
    bodyNotFixed()
  }
}
)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
        popupClose[i].closest('.popup').classList.remove('active')
        bodyNotFixed()
    })
}
//открытие форм попап
// форма ОСТАВИТЬ ЗАЯВКУ
let btnApplication = document.querySelectorAll('.btn-application')
let formApplication = document.querySelector('.form-application')
let btns = document.querySelectorAll('.open-popup')
for(let i=0 ; i < btns.length ; i++) {
  btns[i].addEventListener("click",
  function() {
    let name =  btns[i].getAttribute('btn-name')
    if(name !== null) {
      bodyFixed()
      openPopup(name)
    }
  })
}
function openPopup(nameForm) {
  let form = document.querySelector('[form-name="'+nameForm+'"]')
  form.classList.add('active')
}
let propelledBtn = document.querySelector('.propelled__btn')
let snowmobile = document.querySelector('.snowmobile')
propelledBtn.onclick = function() {
  if(window.innerWidth > 539) {
    snowmobile.classList.add('active')
  }
}
// смена слова в кнопке в попапе
let popupBtn = document.querySelectorAll('.popup__btn')
function changePopupBtn(word) {
  for(let i=0 ; i < popupBtn.length ; i++) {
      popupBtn[i].innerHTML = word
  }
}

let flagsBtn = document.querySelectorAll('.flags__btn')
let flagsBtnHidden = document.querySelectorAll('.flags__btn_hidden')
for(let i=0 ; i < flagsBtn.length ; i++) {
  flagsBtn[i].addEventListener("mouseover",
  function() {
    flagsBtnChanger(i)
  })
}
function flagsBtnChanger(index) {
  changerActive(flagsBtn)
  changerActive(flagsBtnHidden)
  flagsBtn[index].classList.add('active')
  flagsBtnHidden[index].classList.add('active')
}










//Menu mobile
let nav_icon = document.querySelectorAll('.nav-icon')
let headerMobile = document.querySelector('.header-m')
for(let i=0 ; i < nav_icon.length ; i++) {
    nav_icon[i].addEventListener("click",
    function() {
        headerMobile.classList.toggle('active')
        for(let i = 0; i < nav_icon.length;i++) {
            nav_icon[i].classList.toggle('open')
        }
    })
}
// document.querySelector('.header__menu').onclick = function() {
//   document.querySelector('.header__menu').classList.toggle('active')
//   headerMobile.classList.toggle('active')
//   for(let i = 0; i < nav_icon.length;i++) {
//     nav_icon[i].classList.toggle('open')
//   }
// }

// Size-control
window.addEventListener('resize', function(event){
    if(window.innerWidth > 1023) {
      document.querySelector('.header-m').classList.remove('active')
      for(let i = 0; i < nav_icon.length;i++) {
        nav_icon[i].classList.remove('open')
      }
    }
    if(window.innerWidth > 539) {
      propelledBtn.innerHTML = 'Подробнее'
      changePopupBtn('Отправить')
      propelledBtn.removeAttribute('btn-name')

    } else {
      propelledBtn.innerHTML = 'Заказать'
      changePopupBtn('Оставить заявку')
      propelledBtn.setAttribute('btn-name','psm')
    }
})
if(window.innerWidth > 1023) {
  document.querySelector('.header-m').classList.remove('active')
  for(let i = 0; i < nav_icon.length;i++) {
    nav_icon[i].classList.remove('open')
  }
}
if(window.innerWidth > 539) {
  propelledBtn.innerHTML = 'Подробнее'
  changePopupBtn('Отправить')
  propelledBtn.removeAttribute('btn-name')

} else {
  propelledBtn.innerHTML = 'Заказать'
  changePopupBtn('Оставить заявку')
  propelledBtn.setAttribute('btn-name','psm')
}

//смена слова в propelled__btn
// let formCallBtn = document.querySelectorAll('.form-btn')
// let formCall = document.querySelector('.form-call-me')
// for(let i=0 ; i < formCallBtn.length ; i++) {
//     formCallBtn[i].addEventListener("click",
//     function() {
//         formCall.classList.add('active')
//         bodyFixed()
//     })
// }


// // form call-me

// const formCallMe = document.querySelector('.form-call-me')
// formCallMe.addEventListener('submit', formSend)

// async function formSend(e) {
//     e.preventDefault();
//     let error = formValidate(formCallMe)

//     let formData = new FormData(formCallMe)
//     if(error === 0 ) {
//         formCallMe.classList.add('_sending');
//         let response = await fetch('../sendmail.php', {
//             method: 'POST',
//             body: formData
//         });
//         if(response.ok) {
//             let result = await response.json();
//             alert(result.message);
//             formCallMe.reset();
//             formCallMe.classList.remove('_sending');
//         } else {
//             alert('Ошибка!')
//             formCallMe.classList.remove('_sending');
//         }
//     } else {

//     }
// }

// function formValidate(form) {
//     let error = 0
//     let formReq = document.querySelectorAll('.req');

//     for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);
//         if(input.classList.contains('form-call-me__mail')) {
//             if(emailTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__name')) {
//             if(input.value == 0) {
//                 formAddError(input)
//                 error++
//             }
//         }
//         if(input.classList.contains('form-call-me__mob')) {
//             if(phoneTest(input)) {
//                 formAddError(input)
//                 error++
//             }
//         }
//     }
//     return error
// }

// function formAddError(input) {
//     input.classList.add('_error');
//     input.classList.add('_error')
// }

// function formRemoveError(input) {
//     input.classList.remove('_error');
//     input.classList.remove('_error')
// }

// function emailTest(input) {
//     return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value)
// }

// function phoneTest(input) {
//     return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
// }

// // gallery click

// // check mobile
// function is_touch_device() {
//     return ('ontouchstart' in window);
// }

// let galleryPic = document.querySelectorAll('.lightbox-item')

// if(!is_touch_device()) {
//     for(let i=0 ; i < galleryPic.length ; i++) {
//         galleryPic[i].addEventListener("click",
//         function(event) {
//             event = event || window.event;
//             let target = event.target
//             let src = galleryPic[i].getAttribute('src')
//             createLightBoxPopup(src)
//             bodyFixed()
//         })
//     }
// }
// function createLightBoxPopup(name) {
//     let box = document.querySelector('.lightbox')
//     box.classList.add('active')
//     let lightboxPic = box.querySelector('.lightbox__img')
//     lightboxPic.setAttribute('src', name)
// }

// //scroll up

// function toTop() {
//     $('body,html').animate({scrollTop:0},500);
// }

// $(function() {
//     $('.up-btn').on('click', toTop);
//  })


// swiper categories
const swiper_categories = new Swiper('.categories__swiper', {
    slidesPerView: 3,
    spaceBetween: 122,
    navigation: {
        nextEl: '.categories__next',
        prevEl: '.categories__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 8 
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      839: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1109: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1650: {
        slidesPerView: 3,
        spaceBetween: 122,
      }
    }
})

// swiper propelled
const swiper_propelled = new Swiper('.propelled__swiper', {
    slidesPerView: 5,
    spaceBetween: 45,
    navigation: {
        nextEl: '.propelled__next',
        prevEl: '.propelled__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 8 
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      839: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1291: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1604: {
        slidesPerView: 5,
        spaceBetween: 45,
      }
    }
})

