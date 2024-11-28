function initMap() {
  
    var maceio = {lat: -9.654716, lng: -35.709316};

  // Definindo limites de latitude e longitude (exemplo: Maceió, Alagoas)
  var bounds = {
    north: -9.6000,  // Limite superior da latitude
    south: -9.7000,  // Limite inferior da latitude
    east: -35.6800,   // Limite leste da longitude
    west: -35.7300    // Limite oeste da longitude
    };
  var mapRestaurant = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    minZoom: 12,  // Limite mínimo de zoom
    maxZoom: 16,  // Limite máximo de zoom 
    center: maceio,
    mapId: '404869980cc2508a',
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    restriction: {
        latLngBounds: bounds,  // Restringe a área de navegação
        strictBounds: true     // Garante que o mapa não ultrapasse os limites definidos
    }
  });

  // Criar infowindow para todos os marcadores
  var infowindow = new google.maps.InfoWindow({
    disableAutoPan: true // Impede o mapa de recentralizar ao abrir o infowindow
  });
  
  // Remover botão "X" via CSS
  google.maps.event.addListener(infowindow, 'domready', function() {
    const closeButton = document.querySelector('.gm-ui-hover-effect');
    if (closeButton) {
      closeButton.style.display = 'none'; // Oculta o botão "X"
    }
  });

  // Função para criar marcadores
  function createMarker(position, title, labelText, infoContent) {
    var marker = new google.maps.Marker({
      position: position,
      map: mapRestaurant,
      title: title,
      icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          labelOrigin: new google.maps.Point(15, 40),
          size: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 32)
      },
      label: {
        text: labelText,
        fontWeight: 'bold',
        fontSize: '15px',
        color: 'black',
        backgroundColor: 'transparent'
      }
    });
    

    // Adicionando evento de mouseover para abrir o infowindow
    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.setContent(infoContent);
      infowindow.open(mapRestaurant, marker);
    });

    // Adicionando evento de mouseout para fechar o infowindow
    google.maps.event.addListener(marker, 'mouseout', function() {
      infowindow.close();
    });

    return marker;
  }


createMarker(
  {lat: -9.667746384687023, lng: -35.71395214777947},
  'Hotel Meridiano',
  'Hotel Meridiano',
  '<strong>Hotel Meridiano</strong><br>Av. Dr. Antônio Gouveia, 677 - Pajuçara, 57030-170 <br><br>Ponto de referência: Próximo ao Cheiro da Terra.'
);

createMarker(
  {lat: -9.66108825177758, lng: -35.69746406335066},
  'Maceió Mar Hotel',
  'Maceió Mar Hotel',
  '<strong>Maceió Mar Hotel</strong><br>Av. Álvaro Otacílio, 2991 - Ponta Verde, 57035-180 <br><br>Ponto de referência: Próximo ao Micale Restaurante.'
);

createMarker(
  {lat: -9.666292509981858, lng: -35.71258813319713},
  'Hotel  Best Western Premier Maceio',
  'Hotel  Best Western Premier Maceio',
  '<strong>Hotel  Best Western Premier Maceio</strong><br>Av. Dr. Antônio Gouveia, 925 - Pajuçara, 57030-170 <br><br>Ponto de referência: Próximo ao Imperador dos Camarões. '
);

createMarker(
 {lat: -9.670111486247261,lng: -35.715603676708405},
  'Hotel VistaMar',
  'Hotel VistaMar',
  '<strong>Hotel VistaMar</strong><br>Av. Dr. Antônio Gouveia, 361 - Pajuçara, 57030-170<br><br>Ponto de referência: Próximo ao Cheiro da Terra.'
);

createMarker(
  {lat: 9.649466795610548, lng: -35.701074161270256},
  'Hotel Atlantic Suites',
  'Hotel Atlantic Suites',
  '<strong>Hotel Atlantic Suites</strong><br> Av. Álvaro Otacílio, 4065 - Jatiúca, 57036-850<br><br>Ponto de referência: Próximo ao Truckzone.'
);

createMarker(
  {lat: -9.648195117660636, lng:-35.700532017191556},
  'Hotel Brisa Tower',
  'Hotel Brisa Tower',
  '<strong>Hotel Brisa Towe</strong><br>Av. Álvaro Otacílio, 4201 - Jatiúca, 57035-972<br><br>Ponto de referência: Próximo à Barraca do Siri'
);

createMarker(
  {lat: -9.632273506192572, lng: -35.697324674862166},
  'Hotel Ritz Suites',
  'Hotel Ritz Suites',
  '<strong>Hotel Ritz Suites</strong><br>Av. Brigadeiro Eduardo Gomes de Brito, 125 - Cruz das Almas, 57038-280<br><br>Ponto de referência: Próximo à Praia de Cruz das Almas.'
);
}