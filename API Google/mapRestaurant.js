function initMap() {
  
    var maceio = {lat: -9.654716, lng: -35.709316};
    // Definindo limites de latitude e longitude (exemplo: Maceió, Alagoas)
    var bounds = {
      north: -9.6300,  // Limite superior da latitude
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

    // Marcadores
    createMarker(
      {lat: -9.662948904897716, lng: -35.705528388292315},
      'Janga Restaurante - Ponta Verde',
      'Janga',
      '<strong>Janga Restaurante</strong><br>Av. Silvio Carlos Viana, 1731 - Ponta Verde, 57035-160 <br><br>Ponto de referência: Próximo ao Pavilhão do Artesanato.'
    );

    createMarker(
      {lat: -9.64773857150687, lng: -35.71438437661612},
      'Janga Restaurante - Maceió Shopping',
      'Janga',
      '<strong>Janga Restaurante</strong><br>Av. Comendador Gustavo Paiva, 2990 - Loja 297 - Mangabeiras, 57032-901<br><br>Ponto de referência: Dentro do Maceió Shopping, perto do Cinema.'
    );

    createMarker(
      {lat: -9.6604074947626, lng: -35.70282382264964},
      'Restaurante Vero - Ponta Verde',
      'Vero',
      '<strong>Restaurante Vero</strong><br>R. Machado Lemos, 238 - Ponta Verde, 57035-170<br><br>Ponto de referência: Próximo a Praça do Skate.'
    );

    createMarker(
      {lat: -9.669103468132306, lng: -35.715707220524031},
      'Restaurante Vero - Pajuçara',
      'Vero',
      '<strong>Restaurante Vero</strong><br>R. Dr. Lessa de Azevedo, 580 - Pajuçara, 57030-180<br><br>Ponto de referência: Próximo à Praia de Pajuçara.'
    );

    createMarker(
      {lat: -9.664931476641032, lng: -35.710036876615774},
      'Imperador dos Camarões',
      'Imperador dos Camarões',
      '<strong>Imperador dos Camarões</strong><br>Av. Dr. Antônio Gouveia, 21 - Pajuçara, 57030-170<br><br>Ponto de referência: Próximo ao Centro Cultural Arte Pajuçara.'
    );

    createMarker(
      {lat: -9.65019337157097, lng: -35.70681410695361},
      'Black Beer Parrilha',
      'Black Beer Parrilha',
      '<strong>Black Beer Parrilha</strong><br>Av. Dr. Antônio Gomes de Barros, 630 - Jatiúca, 57036-000<br><br>Ponto de referência: Próximo ao Truckzone'
    );

    createMarker(
      {lat:-9.66364, lng: -35.70571},
      'Kanoa Restaurante',
      'Kanoa',
      '<strong>Kanoa Restaurante</strong><br>Orla de Ponta Verde - Av. Silvio Carlos Viana, 25 - Ponta Verde, 57035-160<br><br>Ponto de referência: Próximo ao Pavilhão do Artesanato.'
    );

    createMarker(
      {lat: -9.663558952154164, lng: -35.70406182088279},
      'Lopana Restaurante',
      'Lopana',
      '<strong>Lopana Restaurante</strong><br>Orla da Ponta Verde - Av. Silvio Carlos Viana, 27 - Ponta Verde, 57035-160<br><br>Ponto de referência: Próximo ao Clube do Pirata.'
    );

    createMarker(
      {lat:  -9.669572811274842, lng: -35.71509207434716},
      'Bali Sorveteria',
      'Bali',
      '<strong>Bali Sorveteria</strong><br>Av. Dr. Antônio Gouveia, 451 - Pajuçara, 57030-170<br><br>Ponto de referência: Próximo ao Vistamar Hotel Maceió.'
    );
  }