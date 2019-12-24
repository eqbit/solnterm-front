if (document.querySelector('#contacts-map')) {
  
  let mapCenter = [57.120006, 65.626630];
  
  function loadScript(url, callback) {
    
    let script = document.createElement('script');
    
    if (script.readyState) {  //IE
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' ||
          script.readyState === 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
    
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  
  let $map = $('#contacts-map')
  let mapTimeout;
  
  let ymap = function () {
    if (!$map.is('.loaded')) {
      $(window).on('scroll', ymapCallback);
    }
    else {
      $map.addClass('loaded');
      loadScript('https://api-maps.yandex.ru/2.1/?apikey=b651fec1-d70f-4c48-a6fa-393232c5cf36&lang=ru_RU', function () {
        ymaps.load(init);
      });
    }
  };
  
  let ymapCallback = function () {
    if ($map.visible(true)) {
      $map.addClass('loaded');
      $(window).unbind('scroll', ymapCallback);
      loadScript('https://api-maps.yandex.ru/2.1/?apikey=b651fec1-d70f-4c48-a6fa-393232c5cf36&lang=ru_RU', function () {
        ymaps.load(init);
      });
      clearTimeout(mapTimeout);
    }
  };
  
  mapTimeout = setTimeout(function () {
    if (!$map.is('.loaded')) {
      $map.addClass('loaded');
      $(window).unbind('scroll', ymapCallback);
      loadScript('https://api-maps.yandex.ru/2.1/?apikey=b651fec1-d70f-4c48-a6fa-393232c5cf36&lang=ru_RU', function () {
        ymaps.load(init);
      });
      clearTimeout(mapTimeout);
    }
  }, 10000);
  
  
  ymap();
  
  function init() {
    let actualMap = new ymaps.Map("contacts-map", {
        center: mapCenter,
        zoom: 17,
        
      }, {
        searchControlProvider: 'yandex#search'
      });
      actualMap.behaviors.disable('scrollZoom');
  }
  
}


