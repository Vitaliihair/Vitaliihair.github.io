// Плавная прокрутка по якорным ссылкам

function slowScroll(id) {
  let offset = 0;
  $('html , body').animate({
    scrollTop:$(id).offset().top - offset
  }, 1000);
  return false;
}

// Yandex maps
let center = [43.5951976893704,39.717826278298716];
function Init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 18,
        scrollZoom: false ,
        behaviors:['none'],
        // oneFingerZoom:false,
    });

    let placemark = new ymaps.Placemark (center, {}, {
       searchControlProvider: 'yandex#search'
       
    });
    map.geoObjects.add(placemark);
}
ymaps.ready(Init);


function togglePopup(event) {
  event.preventDefault();
  const popup = document.getElementById('popup');
  popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

// Вешаем обработчики на обе кнопки после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn');
  const btn1 = document.getElementById('btn1');
  
  if (btn) btn.addEventListener('click', togglePopup);
  if (btn1) btn1.addEventListener('click', togglePopup);

  // Обработчик закрытия попапа
  document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (!popup) return;
    
    const popupContent = document.querySelector('.popup-content');
    const isBtn = event.target.closest('#btn, #btn1');
    
    if (popup.style.display === 'flex' && !isBtn && !popupContent.contains(event.target)) {
      popup.style.display = 'none';
    }
  });
});



//  function togglePopup(event) {
//     event.preventDefault();
//     const popup = document.getElementById('popup');
//     popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
//   }

//   // Обработчик закрытия попапа
//   document.addEventListener('click', function(event) {
//     const popup = document.getElementById('popup');
//     const btn = document.getElementById('btn');
//     const btn = document.getElementById('btn1');
//     const popupContent = document.querySelector('.popup-content');
    
//     if (popup.style.display === 'flex' && 
//         !popupContent.contains(event.target) && 
//         event.target !== btn && 
//         !btn.contains(event.target)) {
//       popup.style.display = 'none';
//     }
//   });

// function togglePopup(event) {
//   event.preventDefault();
//   const popup = document.getElementById('popup');
//   popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
// }

// // Назначаем обработчики для обеих кнопок
// document.getElementById('btn').addEventListener('click', togglePopup);
// document.getElementById('btn1').addEventListener('click', togglePopup);

// // Обработчик закрытия попапа
// document.addEventListener('click', function(event) {
//   const popup = document.getElementById('popup');
//   const btn = document.getElementById('btn');
//   const btn1 = document.getElementById('btn1');
//   const popupContent = document.querySelector('.popup-content');
  
//   if (popup.style.display === 'flex' && 
//       !popupContent.contains(event.target) && 
//       event.target !== btn && 
//       event.target !== btn1 && 
//       !btn.contains(event.target) &&
//       !btn1.contains(event.target)) {
//     popup.style.display = 'none';
//   }
// });

// // Открытие попапа по клику на кнопку Записаться
//  function togglePopup(event) {
//     event.preventDefault();
//     const popup = document.getElementById('popup');
//     if (popup.style.display === 'none') {
//       popup.style.display = 'flex';
//     } else {
//       popup.style.display = 'none';
//     }
//   }
  
//   // Закрытие попапа при клике вне его области
//   document.addEventListener('click', function(event) {
//     const popup = document.getElementById('popup');
//     const btn = document.getElementById('btn');
    
//     if (popup.style.display === 'flex' && 
//         !popup.contains(event.target) && 
//         event.target !== btn && 
//         !btn.contains(event.target)) {
//       popup.style.display = 'none';
//     }
//   });

// function togglePopup(event) {
//     event.preventDefault();
//     const popup = document.getElementById('popup');
//     popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
//   }

  // // Исправленный обработчик закрытия попапа
  // document.addEventListener('click', function(event) {
  //   const popup = document.getElementById('popup');
  //   const btn = document.getElementById('btn');
  //   const popupContent = document.querySelector('.popup-content');
    
  //   // Если попап открыт и клик был не по кнопке и не по контенту попапа
  //   if (popup.style.display === 'flex' && 
  //       !popupContent.contains(event.target) && 
  //       event.target !== btn) {
  //     popup.style.display = 'none';
  //   }
  // });



