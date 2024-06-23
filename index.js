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

// Shake Button
function shakeButton() {
    let button = document.getElementById('btn');
    
    // Трясем кнопку 4 раза
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        button.style.transform = 'translate(3px, 0)';
      }, i * 100);
      setTimeout(() => {
        button.style.transform = 'translate(-3px, 0)';
      }, (i * 100) + 50);
      setTimeout(() => {
        button.style.transform = 'translate(0, 0)';
      }, (i * 100) + 100);
    }
  
    // Задержка перед следующим тряском
    setTimeout(() => {
      shakeButton();
    }, 2000);
  }
  
  shakeButton();




