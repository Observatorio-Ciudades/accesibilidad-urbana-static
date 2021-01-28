window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function init() {   
    let cityCoords = [
        { name: "Aguascalientes", center: [-102.291,21.881]},
        { name: "Cuernavaca", center: [-99.234,18.918]},
        { name: "Guadalajara", center: [-103.344,20.6736]},
        { name: "Mérida", center: [-89.6216,20.9677]},
        { name: "Mexicali", center: [-115.446,32.6469]},
        { name: "CDMX", center: [-99.1269,19.2891]},
        { name: "Monterrey", center: [-100.309,25.6714]},
        { name: "Puebla", center: [-98.2062,19.0413]},
        { name: "Querétaro", center: [-100.392,20.5931]},
        { name: "Saltillo", center: [-101,25.4333]},
        { name: "San Luis Potosí", center: [-100.97916,22.1498]}
    ];

    let currSelCityLabel = "Guadalajara"
    let currSelCity = 3;
    let currSelServ = 3;
    let currSelServLabel = "min_supermercados";
    let hexesLoaded = false;
    let mapOn = true;
    let satOn = false;
    let dashOn = false;
    let hexLayers = [];

    let pointA = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'description': "Juan",
                    'icon': 'marker'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-103.3943851,  20.7213538]
                }
            }
        ]
    };

    let pointTargetA = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'description': 'Tienda de comida',
                    'icon': 'grocery'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-103.3918757, 20.7202675]
                }
            }
        ]
    };

    let pointB = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'description': 'Elisa',
                    'icon': 'marker'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-103.397106,  20.7194]
                }
            }
        ]
    };

    let pointTargetB = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'description': 'Tienda de comida',
                    'icon': 'grocery'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-103.396695,20.7159999]        
                }
            }
        ]
    };


    loadHexData("Guadalajara","min_supermercados");

    async function loadHexData(city, serv) {
        let csvLayer = {};
        let newHexObj = {};

        let responseCSV = await d3.csv(`data/csv-hexes/${city}_data.csv`);
        console.log("loading new hex data..."); 
        let csvRaw = await responseCSV;
        let csvFilter = await csvRaw.filter(hex => hex[serv] > 0);
        console.log( await csvFilter); 
        for (let i = 0; i<csvFilter.length; i++){
            if (serv != "pobtot") {
                csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i][serv]/100;
            } else {
                csvLayer[csvFilter[i].hex_id_9] =  (csvFilter[i][serv]/10.53325)/100;
            }
        }
        hexesLoaded = true;


        let currObj = await hexLayers.find(obj => obj.city == city);
        if (currObj) {
            for (let k = 0; k < hexLayers.length; k++) {
                if (hexLayers[k].city == city) {
                    hexLayers[k][serv] =  csvLayer;
                    console.log("loading new hexes to existiiiiing object:");
                    console.log(hexLayers[k]);
                    return hexLayers[k];
                }
            }
        } else {
            newHexObj["city"] = city;
            newHexObj[serv] =  csvLayer;
            hexLayers.push(  newHexObj);
            console.log("loading new hex object:");
            console.log( newHexObj);
            return newHexObj;
        }
    }
  
    let bodyAcc = document.getElementById('body-accesibilidad');
    let story = document.getElementById('story');
  
    for (let i = 5; i < config.chapters.length; i++) {
        let features = document.createElement('div');
        features.setAttribute('class', 'features');
        let container = document.getElementById(config.chapters[i].id);
        let chapter = document.createElement('div');
        if (config.chapters[i].id == 'gdlC') {
            chapter.classList.add('chapter-gdlC');
        }
  
        if (config.chapters[i].id != "mxOut") {
            if (i%2 != 0) {
                    features.classList.remove('lefty');
                    features.classList.add('righty');
                } else if (i%2 == 0) {
                    features.classList.remove('righty');
                    features.classList.add('lefty');
            }
        } else {
            features.classList.add('center');
        }

  
        if (config.chapters[i].id == 'mtyA' || config.chapters[i].id == 'gdlA' || config.chapters[i].id == 'qroA' || config.chapters[i].id == 'cdmxA') {
            let title = document.createElement('h3');
            title.innerText = config.chapters[i].title;
            chapter.appendChild(title);
        }
  
        if (config.chapters[i].description != "") {
            let story = document.createElement('p');
            story.innerHTML = config.chapters[i].description;
            // if (config.chapters[i].id == 'gdlC') {
            //     story.classList.add('gdlC-description');
            // }
            chapter.appendChild(story);
  
        }

        if (config.chapters[i].shortInfo != "") {
            if (config.chapters[i].shortInfo.length > 0) {

                let shortInfoCont;
                let shortInfoContB;
                if (config.chapters[i].id == "gdlC" || config.chapters[i].id == "qroC") {
                    shortInfoCont = document.createElement('ol');
                    shortInfoCont.classList.add('short-info-ol-cont');
                    chapter.appendChild(shortInfoCont);
                    let titleFull = document.createElement('h3');
                    chapter.appendChild(titleFull);
                    titleFull.innerText = config.chapters[i].title;
                } else if (config.chapters[i].id == "qroB") {
                    shortInfoCont = document.createElement('ul');
                    shortInfoCont.classList.add('short-info-ul-cont');
                    chapter.appendChild(shortInfoCont);

                    shortInfoContB = document.createElement('ul');
                    shortInfoContB.classList.add('short-info-ul-cont');
                    chapter.appendChild(shortInfoContB);
                } else {
                    shortInfoCont = document.createElement('ul');
                    shortInfoCont.classList.add('short-info-ul-cont');
                    chapter.appendChild(shortInfoCont);
                }

                let shortInfoLis = [];
                let shortInfoLisB = [];
    
                for (let k = 0; k < config.chapters[i].shortInfo.length; k++) {
                    shortInfoLis[k] = document.createElement('li');
                    shortInfoLis[k].innerHTML = config.chapters[i].shortInfo[k];

                    if (config.chapters[i].full) {
                        shortInfoLis[k].style.color = 'white';
                        shortInfoLis[k].style.lineHeight = '2em';
                    }
                    
                    shortInfoCont.appendChild(shortInfoLis[k]);

                    if (config.chapters[i].id == "qroB") {
                        shortInfoLisB[k] = document.createElement('li');
                        shortInfoLisB[k].innerHTML = config.chapters[i].shortInfoB[k];
                        shortInfoContB.appendChild(shortInfoLisB[k]);
                    }
                }
            }
        }


        if (config.chapters[i].full) {
            features.classList.remove('features');
            features.classList.remove('lefty');
            features.classList.remove('righty');
            features.classList.add('full-chapter');
            console.log('full chapter on')
            let imgContainer = document.createElement('div')
            imgContainer.classList.add('img-container');
        }
        
        container.classList.add('step');

        if (config.chapters[i].full) {
            container.classList.add('row');
        }
  
        if (i === 0) {
            container.classList.add('active');
        }

        chapter.classList.add(config.theme);
        // if (config.chapters[i].id != "mxOut") {
            if (!config.chapters[i].full) {
                chapter.classList.add("marco");
            } else {
                chapter.classList.add("main-col");
            }
        // }
        container.appendChild(chapter);
        features.appendChild(container);
        story.appendChild(features);
    }
  
    mapboxgl.accessToken = config.accessToken;
    const transformRequest = (url) => {
        const hasQuery = url.indexOf("?") !== -1;
        const suffix = hasQuery ? "&pluginName=journalismScrollytelling" :
            "?pluginName=journalismScrollytelling";
        return {
            url: url + suffix
        }
    }
  
    let map; 
    let satMap;
    let dashMap;
    
    if (!map) {
        map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.center,
        zoom: 12,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        scrollZoom: false,
        transformRequest: transformRequest,
        fadeDuration: 500,
        attributionControl: true
    });
    // map.addControl(new mapboxgl.AttributionControl(), 'top-left');
    }


    if (!satMap) {
        satMap = new mapboxgl.Map({
            container: 'satMap',
            style: "mapbox://styles/mapbox/satellite-v9",
            center: config.chapters[0].location.center,
            zoom: 12,
            bearing: config.chapters[0].location.bearing,
            pitch: config.chapters[0].location.pitch,
            scrollZoom: false,
            transformRequest: transformRequest
        });
    }

    if (!dashMap) {
        dashMap = new mapboxgl.Map({
            container: 'dashMap',
            style: "mapbox://styles/mapbox/dark-v9",
            center: [-103.344,20.6736],
            zoom: 10,
            bearing: 0,
            pitch: 0,
            scrollZoom: false,
            transformRequest: transformRequest
        });
    }

    Promise.resolve().then(function() {
    if (map.loaded()) {
            resolve(map);
     }
    });

    Promise.resolve().then(function() {
        if (satMap.loaded()) {
                resolve(satMap);
         }
    });

    Promise.resolve().then(function() {
        if (dashMap.loaded()) {
                resolve(dashMap);
         }
    });
    
    let satMapContainer = document.getElementById("satMap");
    let dashMapContainer = document.getElementById("dashMap");
    let mapContainer = document.getElementById("map");
    
    function setMapOpacity() {
        if (!mapOn) {
            mapContainer.classList.remove('fade-out');
            mapContainer.classList.add('fade-in');
            mapOn = true;
        } else {
            mapContainer.classList.remove('fade-in');
            mapContainer.classList.add('fade-out');
            mapOn = false;
        }
    }
    
    function setSatOpacity() {
        if (!satOn) {
            satMapContainer.classList.remove('fade-out');
            satMapContainer.classList.add('fade-in');
            satOn = true;
        } else {
            satMapContainer.classList.remove('fade-in');
            satMapContainer.classList.add('fade-out');
            satOn = false;
        }
    }

    function setDashOpacity() {
        if (!dashOn) {
            dashMapContainer.classList.remove('fade-out');
            dashMapContainer.classList.add('fade-in');
            dashOn = true;
        } else {
            dashMapContainer.classList.remove('fade-in');
            dashMapContainer.classList.add('fade-out');
            dashOn = false;
        }
    }
  
    function renderEachPoint() {
        map.loadImage(
            'imgs/noun_Walking_1757932.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('walkA', image);

                map.addSource('pointA', {
                    'type': 'geojson',
                    'data': pointA
                });
                map.addLayer({
                    'id': 'poi-labelsA',
                    'type': 'symbol',
                    'source': 'pointA',
                    'layout': {
                        'icon-image': 'walkA',
                        'icon-size': 0.12,
                        // 'icon-size': 4,
                        // 'text-field': ['get', 'description'],
                        // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                        // 'text-radial-offset': 0.5,
                        'text-justify': 'auto',
                        // 'icon-image': ['concat', ['get', 'icon'], '-15'],
                    }
                });
            }
        );

        map.loadImage(
            'imgs/noun_Walking_1757932.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('walkB', image);

                map.addSource('pointB', {
                    'type': 'geojson',
                    'data': pointB
                });
                map.addLayer({
                    'id': 'poi-labelsB',
                    'type': 'symbol',
                    'source': 'pointB',
                    'layout': {
                        'icon-image': 'walkB',
                        'icon-size': 0.12,
                        // 'icon-size': 4,
                        // 'text-field': ['get', 'description'],
                        // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                        // 'text-radial-offset': 0.5,
                        'text-justify': 'auto',
                        // 'icon-image': ['concat', ['get', 'icon'], '-15'],
                    }
                });
            }
        );

        map.loadImage(
            'imgs/noun_Shopping Cart_658220.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('groceries', image);

                map.addSource('pointTargetA', {
                    'type': 'geojson',
                    'data': pointTargetA
                });
                map.addLayer({
                    'id': 'poi-labelsTargetA',
                    'type': 'symbol',
                    'source': 'pointTargetA',
                    'layout': {
                        'icon-image': 'groceries',
                        'icon-size': 0.17,
                        // 'icon-size': 4,
                        // 'text-field': ['get', 'description'],
                        // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                        // 'text-radial-offset': 0.5,
                        'text-justify': 'auto',
                        // 'icon-image': ['concat', ['get', 'icon'], '-15'],
                    }
                });

                map.addSource('pointTargetB', {
                    'type': 'geojson',
                    'data': pointTargetB
                });
                map.addLayer({
                    'id': 'poi-labelsTargetB',
                    'type': 'symbol',
                    'source': 'pointTargetB',
                    'layout': {
                        'icon-image': 'groceries',
                        'icon-size': 0.17,
                        // 'icon-size': 4,
                        // 'text-field': ['get', 'description'],
                        // 'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                        // 'text-radial-offset': 0.5,
                        'text-justify': 'auto',
                        // 'icon-image': ['concat', ['get', 'icon'], '-15'],
                    }
                });
            }
        );
    }
  
    async function renderHexes(map, hexagons, city) {
        let geojson = geojson2h3.h3SetToFeatureCollection(
            Object.keys( await hexagons),
            hex => ({value: hexagons[hex], city:city})
        );
        console.log("drawing hexes");
        console.log(await geojson);
        
        
        let sourceId = `${city}-${currSelServLabel}-hex-source`;
        let layerId = `${city}-${currSelServLabel}-layer`;
        let source = map.getSource(sourceId);
        let layerCheck = map.getLayer(layerId);
        
        if (!source && !layerCheck) {
            map.addSource(sourceId, {
            type: 'geojson',
            data: await geojson
            });
            map.addLayer({
                id: layerId,
                source: sourceId,
                type: 'fill',
                interactive: false,
                paint: {
                    'fill-outline-color': 'rgba(0,0,0,0)',
                    "fill-opacity": 0,
                    "fill-opacity-transition": {duration: 2000}
                }
            });
            source = map.getSource(sourceId);
            source.setData(await geojson);
        }        
        
        if (currSelServLabel != "pobtot") {
            console.log('not drawing pop tot...')
            map.setPaintProperty(layerId, 'fill-color', {
                property: 'value',
                stops: [  
                    [0.05, config.colorScale[0]],
                    [0.10, config.colorScale[1]],
                    [0.20, config.colorScale[2]],
                    [0.30, config.colorScale[3]],
                    [0.50, config.colorScale[4]]
                ],
                type: 'exponential'
            });     
        } else {
            console.log('drawing pop tot...')
            map.setPaintProperty(layerId, 'fill-color', {
                property: 'value',
                stops: [  
                    [0.50, config.colorScale[0]],
                    [1, config.colorScale[1]],
                    [2, config.colorScale[2]],
                    [3, config.colorScale[3]],
                    [5, config.colorScale[4]]
                ],
                type: 'exponential'
            }); 
        }       
        map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
    }

    function renderHexPaths(map, hexagons, label) {
        // Transform the current hexagon map into a GeoJSON object
        const geojson = geojson2h3.h3SetToFeatureCollection(
          Object.keys(hexagons),
          hex => ({value: hexagons[hex]})
        );
        
        const sourceId = `h3-${label}-source`;
        const layerId = `h3-${label}-layer`;
        // const layerId = `$h3-${label}-layer`;
        let source = map.getSource(sourceId);
        
        // Add the source and layer if we haven't created them yet
        if (!source) {
          map.addSource(sourceId, {
            type: 'geojson',
            data: geojson
          });
          map.addLayer({
            id: layerId,
            source: sourceId,
            type: 'line',
            interactive: false,
            paint: {
            //   'fill-outline-color': 'rgba(0,0,0,1)',
            //   'fill-color': 'rgba(0,0,0,1)'
              'line-color': 'rgba(0,0,0,1)',
              'line-width': 5
            }
          });
          source = map.getSource(sourceId);
        }

        let animationStep = 100;
        enableLineAnimation(layerId);

        function enableLineAnimation(hexPathLayerId) {
            var dashStep = 0;
            let dashArraySeq = [
              [0, 4, 3],
              [1, 4, 2],
              [2, 4, 1],
              [3, 4, 0],
              [0, 1, 3, 3],
              [0, 2, 3, 2],
              [0, 3, 3, 1]
            ];
            setInterval(() => {
                dashStep = (dashStep + 1) % dashArraySeq.length;
                map.setPaintProperty(hexPathLayerId, 'line-dasharray', dashArraySeq[dashStep]);
              }, animationStep);
          }

        // Update the geojson data
        source.setData(geojson);
      }
  
  

    function renderPaths(dataset, pathName, val) {
        let pathsData;
        let pathsCoords = [];
        
        d3.json(dataset).then(function(json) {
            pathsData = json.features;
            for (let i = 0; i < json.features.length; i++) {
                let newPathPoint = [pathsData[i].geometry.coordinates[0][0],pathsData[i].geometry.coordinates[1][1]]
                pathsCoords.push(newPathPoint);
            }
            map.addSource(pathName, {
                    "type": "geojson",
                    "data": json
            });
            let animationStep = 100;
            enableLineAnimation(pathName);

            function enableLineAnimation(layerId) {
                let dashStep = 0;
                let dashArraySeq = [
                  [0, 4, 3],
                  [1, 4, 2],
                  [2, 4, 1],
                  [3, 4, 0],
                  [0, 1, 3, 3],
                  [0, 2, 3, 2],
                  [0, 3, 3, 1]
                ];
                setInterval(() => {
                    dashStep = (dashStep + 1) % dashArraySeq.length;
                    map.setPaintProperty(layerId, 'line-dasharray', dashArraySeq[dashStep]);
                  }, animationStep);
              }

            if (pathName == "pathA") {
                map.addLayer({
                    'id': pathName,
                    'type': 'line',
                    'source': pathName,
                    'paint': {
                        'line-color': '#F8EC7A',
                        'line-width': 5,
                        'line-opacity': 0.5
                    }
                });
            } else {
                map.addLayer({
                    'id': pathName,
                    'type': 'line',
                    'source': pathName,
                    'paint': {
                        'line-color': '#F6B17E',
                        'line-width': 5,
                        'line-opacity': 0.5
                    }
                });
            }
        })
    }
  
    let scroller = scrollama();
  
    let pathAOn = false;
    let pathBOn = false;
    let chartsOn = false;

    let pathALayer;
    let pathBLayer;
    let poiLabels;

    let initialHexes;
    let mtyHexPath01, mtyHexPath02, gdlHexPath01, gdlHexPath02, qroHexPath01, qroHexPath02, cdmxHexPath01, cdmxHexPath02;

    let navEnabled = false;
    let portadaChapter;
    let pathAChapter;
    let pathBChapter;
    let preOutroPathsChapter;
    let outroPathsChapter;
    let currLocation =  {
        center: cityCoords[2].center, // Gdl
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
        speed: 5, 
        curve: 1,
        easing: function (t) {
            return t;
        }
    }

    let marker = new mapboxgl.Marker()
        .setLngLat([-103.3943851,  20.7213538])
        // .addTo(map);
  
    map.on("load", function () {
        console.log("objeto mapbox:")
        console.log(map)
        bodyAcc.classList.remove('scroll-off');

        scroller
            .setup({
                step: '.step',
                offset: 0.8,
                progress: true,
                debug: false
            })
            .onStepEnter(response => {
              console.log(response);
              response.element.classList.add('active');
            
              switch(response.index) {
                case 0: 
                    portadaChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(portadaChapter.location);

                    console.log("holiii switch");
                    initialHexes = map.getLayer(`Guadalajara-min_supermercados-layer`);
                    finalHexes = dashMap.getLayer(`Guadalajara-min_supermercados-layer`);
                    pathALayer = map.getLayer('pathA');
                    pathBLayer = map.getLayer('pathB');
                    poiLabels = map.getLayer('poi-labelsA');
                    poiLabels = map.getLayer('poi-labelsB');
                    poiLabels = map.getLayer('poi-labelsTargetA');
                    poiLabels = map.getLayer('poi-labelsTargetB');
                    
                    if(typeof initialHexes !== 'undefined') {
                        map.setLayoutProperty('Guadalajara-min_supermercados-layer', 'visibility', 'none');
                    }           

                    if(typeof finalHexes !== 'undefined') {
                        dashMap.setLayoutProperty('Guadalajara-min_supermercados-layer', 'visibility', 'none');
                    }
                    if (dashMap.getLayer(`Guadalajara-min_hospitales-layer`)) {
                        // map.removeLayer(`Guadalajara-${currSelServLabel}-layer`)
                        dashMap.setLayoutProperty('Guadalajara-min_hospitales-layer', 'visibility', 'none');
                    }
                    if (dashMap.getLayer(`Guadalajara-min_farmacias-layer`)) {
                        // map.removeLayer(`Guadalajara-${currSelServLabel}-layer`)
                        dashMap.setLayoutProperty('Guadalajara-min_farmacias-layer', 'visibility', 'none');
                    }
                    if (dashMap.getLayer(`Guadalajara-pobtot-layer`)) {
                        // map.removeLayer(`Guadalajara-${currSelServLabel}-layer`)
                        dashMap.setLayoutProperty('Guadalajara-pobtot-layer', 'visibility', 'none');
                    }


                    if(typeof pathALayer !== 'undefined') {
                        map.setLayoutProperty('pathA', 'visibility', 'visible');
                    }
                    if(typeof pathBLayer !== 'undefined') {
                        map.setLayoutProperty('pathB', 'visibility', 'none');
                    }
                    if(typeof poiLabels !== 'undefined') {
                        // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    if (!pathAOn) {
                        // renderPoints();
                        renderEachPoint();
                        renderPaths("data/edges_route_min_02.json", "pathA", 0.07);
                        pathAOn = true;
                    }
                    break;

                case 1: 
                    // if (!pathAOn) {
                    //     // renderPoints();
                    //     renderEachPoint();
                    //     renderPaths("data/edges_route_min_02.json", "pathA", 0.07);
                    //     pathAOn = true;
                    // }
                    break;

                case 2: 
                    map.setLayoutProperty('pathA', 'visibility', 'visible');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'visible');     
                    pathAChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(pathAChapter.location);
                    console.log("seccion paths");
                    if (!pathBOn) {
                        renderPaths("data/edges_route_max_03.json", "pathB", 0.37);
                        pathBOn = true;
                    }
                    break;

                case 3:
                    pathBChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(pathBChapter.location);
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'visible');    
                    break;
                        
                case 4:
                    mtyHexPath01 = map.getLayer('h3-mtyHexPath01-layer');
                    mtyHexPath02 = map.getLayer('h3-mtyHexPath02-layer');
                    gdlHexPath01 = map.getLayer('h3-gdlHexPath01-layer');
                    gdlHexPath02 = map.getLayer('h3-gdlHexPath02-layer');
                    qroHexPath01 = map.getLayer('h3-qroHexPath01-layer');
                    qroHexPath01 = map.getLayer('h3-qroHexPath01-layer');
                    cdmxHexPath01 = map.getLayer('h3-cdmxHexPath01-layer');
                    cdmxHexPath02 = map.getLayer('h3-cdmxHexPath02-layer');

                    if (typeof mtyHexPath01 !== 'undefined') {
                        map.setLayoutProperty('h3-mtyHexPath01-layer', 'visibility', 'none');
                    }
                    if (typeof mtyHexPath02 !== 'undefined') {
                        map.setLayoutProperty('h3-mtyHexPath02-layer', 'visibility', 'none');
                    }
                    if (typeof gdlHexPath01 !== 'undefined') {
                        map.setLayoutProperty('h3-gdlHexPath01-layer', 'visibility', 'none');
                    }
                    if (typeof gdlHexPath02 !== 'undefined') {
                        map.setLayoutProperty('h3-gdlHexPath02-layer', 'visibility', 'none');
                    }
                    if (typeof qroHexPath01 !== 'undefined') {
                        map.setLayoutProperty('h3-qroHexPath01-layer', 'visibility', 'none');
                    }
                    if (typeof qroHexPath02 !== 'undefined') {
                        map.setLayoutProperty('h3-qroHexPath02-layer', 'visibility', 'none');
                    }
                    if (typeof cdmxHexPath01 !== 'undefined') {
                        map.setLayoutProperty('h3-cdmxHexPath01-layer', 'visibility', 'none');
                    }
                    if (typeof cdmxHexPath02 !== 'undefined') {
                        map.setLayoutProperty('h3-cdmxHexPath02-layer', 'visibility', 'none');
                    }

                    preOutroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(preOutroPathsChapter.location);
                    console.log(map);
                    // map.setLayoutProperty('poi-labelsA', 'visibility', 'visible');     
                    // map.setLayoutProperty('poi-labelsB', 'visibility', 'visible');     
                    // map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'visible');     
                    // map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'visible');     
                    
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');     
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');     
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none'); 
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none'); 
                    if (hexesLoaded) {
                        renderHexes(map, hexLayers[0].min_supermercados, 'Guadalajara');  
                        initialHexes = map.getLayer(`Guadalajara-min_supermercados-layer`);
                        if(typeof initialHexes !== 'undefined') {
                            map.setLayoutProperty('Guadalajara-min_supermercados-layer', 'visibility', 'visible');
                        }
                    }
                    break;

                case 5:
                    renderHexPaths(map, { '8648a202fffffff': 100 }, "mtyHexZone");

                    outroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(outroPathsChapter.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');     
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');     
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none'); 
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none'); 
                    loadHexData("Monterrey","min_supermercados");
                    break;
                case 6:
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    // renderHexPaths(map, { '8648a202fffffff': 100 }, "mtyHexZone");
                    let chapterMtyA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterMtyA.location);
                    satMap.flyTo(chapterMtyA.location);
                    if (hexLayers[1]) {
                        renderHexes(map, hexLayers[1].min_supermercados, 'Monterrey');
                    }

                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 7:
                    let chapterMtyB = config.chapters.find(chap => chap.id === response.element.id);
                    setSatOpacity();
                    map.flyTo(chapterMtyB.location);
                    satMap.flyTo(chapterMtyB.location);
                    
                    // map.removeLayer(`h3-mtyHexZone-layer`)

                    // let mtyHexZone = map.getLayer('mtyHexZone');
                    map.setLayoutProperty('h3-mtyHexZone-layer', 'visibility', 'none');



                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 8:
                    let chapterMtyC = config.chapters.find(chap => chap.id === response.element.id);
                    renderHexPaths(map, { '8948a202973ffff': 100 }, "mtyHexPath01");
                    renderHexPaths(map, { '8948a20297bffff': 100 }, "mtyHexPath02");
                    console.log("mtyc debug step", response.element.id)
                    console.log("mtyc bug chapter", chapterMtyC.id)
                    map.flyTo(chapterMtyC.location);
                    satMap.flyTo(chapterMtyC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 9:
                    renderHexPaths(map, { '8749ab4b0ffffff': 100 }, "gdlHexZone");

                    let chapterMtyD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterMtyD.location);
                    satMap.flyTo(chapterMtyD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 10:
                    // renderHexPaths(map, { '8749ab4b0ffffff': 100 }, "gdlHexZone");
                    let chapterGdlA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlA.location);
                    satMap.flyTo(chapterGdlA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 11:

                    map.setLayoutProperty('h3-gdlHexZone-layer', 'visibility', 'none');

                    if (!satOn) {
                        setSatOpacity();
                    }
                    let chapterGdlB = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlB.location);
                    satMap.flyTo(chapterGdlB.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 12:
                    if (satOn) {
                        setSatOpacity();
                    }
                    let chapterGdlC = config.chapters.find(chap => chap.id === response.element.id);    
                    renderHexPaths(map, { '8949ab4b013ffff': 100 }, "gdlHexPath01");
                    renderHexPaths(map, { '8949ab4b097ffff': 100 }, "gdlHexPath02");
                    // renderHexPaths(map, { '8949ab4b00bffff': 100 }, "gdlHexPath01");
                    // renderHexPaths(map, { '8949ab4b097ffff': 100 }, "gdlHexPath02");
                    map.flyTo(chapterGdlC.location);
                    satMap.flyTo(chapterGdlC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    loadHexData("Queretaro","min_supermercados");
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 13:
                    renderHexPaths(map, { '874983cacffffff': 100 }, "qroHexZone");

                    let chapterGdlD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlD.location);
                    satMap.flyTo(chapterGdlD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 14:
                    // renderHexPaths(map, { '874983cacffffff': 100 }, "qroHexZone");

                    let chapterQroA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroA.location);
                    satMap.flyTo(chapterQroA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');

                    if (hexLayers[2]) {
                        renderHexes(map, hexLayers[2].min_supermercados, 'Querétaro');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 15:
                    map.setLayoutProperty('h3-qroHexZone-layer', 'visibility', 'none');

                    if (!satOn) {
                        setSatOpacity();
                    }
                    let chapterQroB = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroB.location);
                    satMap.flyTo(chapterQroB.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 16:
                    if (satOn) {
                        setSatOpacity();
                    }
                    renderHexPaths(map, { '894983cac23ffff': 100 }, "qroHexPath01");
                    renderHexPaths(map, { '894983caca3ffff': 100 }, "qroHexPath02");
                    let chapterQroC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroC.location);
                    satMap.flyTo(chapterQroC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    loadHexData("CDMX","min_supermercados");
                    break;
                case 17:
                    let chapterQroD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroD.location);
                    satMap.flyTo(chapterQroD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 18:
                    let chapterCDMXA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXA.location);
                    satMap.flyTo(chapterCDMXA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    if (hexLayers[3]) {
                        renderHexes(map, hexLayers[3].min_supermercados, 'CDMX');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 19:
                    if (!satOn) {
                        setSatOpacity();
                    }
                    let chapterCDMXB = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXB.location);
                    satMap.flyTo(chapterCDMXB.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 20:
                    if (satOn) {
                        setSatOpacity();
                    }
                    renderHexPaths(map, { '894983cac23ffff': 100 }, "cdmxHexPath01");
                    renderHexPaths(map, { '894983caca3ffff': 100 }, "cdmxHexPath02");
                    let chapterCDMXC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXC.location);
                    satMap.flyTo(chapterCDMXC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 21:
                    let chapterCDMXD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXD.location);
                    satMap.flyTo(chapterCDMXD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTargetB', 'visibility', 'none');
                    break;
                case 22:
                    let chapterMxOut = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterMxOut.location);
                    satMap.flyTo(chapterMxOut.location);
                    break;
                case 23:
                    if (!chartsOn) {
                        loadD3();
                    }
                    chartsOn = true;  
                    map.flyTo(currLocation);
                    satMap.flyTo(currLocation);
                    document.getElementById("map").style.zIndex = -4;
                    document.getElementById("dashMap").style.zIndex = -4;
                    if (dashOn) {
                        setDashOpacity();
                    }
                    if (!mapOn) {
                        setMapOpacity();
                    }

                    if (map.getLayer(`Monterrey-${currSelServLabel}-layer`)) {
                        // map.removeLayer(`Monterrey-${currSelServLabel}-layer`)
                        map.setLayoutProperty('Monterrey-min_supermercados-layer', 'visibility', 'none');
                    }

                    if (map.getLayer(`Queretaro-${currSelServLabel}-layer`)) {
                        // map.removeLayer(`Queretaro-${currSelServLabel}-layer`)
                        map.setLayoutProperty('Queretaro-min_supermercados-layer', 'visibility', 'none');
                    }

                    if (map.getLayer(`CDMX-${currSelServLabel}-layer`)) {
                        // map.removeLayer(`CDMX-${currSelServLabel}-layer`)
                        map.setLayoutProperty('CDMX-min_supermercados-layer', 'visibility', 'none');
                    }

                    if (map.getLayer(`Guadalajara-${currSelServLabel}-layer`)) {
                        // map.removeLayer(`Guadalajara-${currSelServLabel}-layer`)
                        map.setLayoutProperty('Guadalajara-min_supermercados-layer', 'visibility', 'none');
                    }
                    break;
                case 24:
                    console.log('CHANGED TRIGGER TO 0.2')
                    scroller.offsetTrigger(0.2);
                    scroller.enable();
                    document.getElementById("map").style.zIndex = -10;
                    document.getElementById("dashMap").style.zIndex = -4;
                    if (!dashOn) {
                        setDashOpacity();
                    }
                    if (satOn) {
                        setSatOpacity();

                    }
                    if (mapOn) {
                        setMapOpacity();
                    }
                    loadHexData('Guadalajara','min_supermercados')
                        .then(results =>  changeHexes())
                        .catch(err => console.log("errooooor",err));
                    break;
                case 25:
                    if (!dashOn) {
                        setDashOpacity();
                    }
                    document.getElementById("dashMap").style.zIndex = 0;
                    document.getElementById("map").style.zIndex = -10;

                    if (!navEnabled) {
                        dashMap.addControl(new mapboxgl.NavigationControl(),'top-left');
                        navEnabled = true;
                    } else {
                        dashMap.doubleClickZoom.enable();
                        dashMap.dragPan.enable();   
                    }
                                      
                    let selectCity = document.getElementById("h3-dash-cities");
                    let selectHex = document.getElementById("h3-dash-hexes");

                    selectCity.addEventListener('change', (event) => {
                        if (dashMap.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                            dashMap.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        }
                          if (dashMap.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                            dashMap.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        }

                        currSelCity = event.target.value;
                        console.log(`Selected ${selectCity.value}`);
                        console.log(`Selected ${event.target.value}`);
                        currSelCityLabel = selectCity.options[currSelCity-1].text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        console.log(currSelCityLabel);
                        
                        let currHexesLoaded = false; 

                        currLocation.center = cityCoords[event.target.value-1].center;
                        if (event.target.value-1 == 5) {
                            currLocation.zoom = 10;
                        }
                        map.jumpTo(currLocation);
                        satMap.jumpTo(currLocation);
                        dashMap.jumpTo(currLocation);
                        
                        loadHexData(currSelCityLabel,currSelServLabel)
                            .then(results =>  changeHexes())
                            .catch(err => console.log("errooooor",err));
                      });

                      selectHex.addEventListener('change', (event) => {
                        currSelServ = event.target.value;
                        console.log(`selected serv option ${currSelServ}`);

                        if (dashMap.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                            dashMap.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        }
                          if (dashMap.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                            dashMap.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        }

                        switch(currSelServ) {
                            case "1":
                                currSelServLabel = "min_farmacias";
                                break;
                            case "2":
                                currSelServLabel = "min_hospitales";
                                break;
                            case "3":
                                currSelServLabel = "min_supermercados";
                                break;
                            case "4":
                                currSelServLabel = "pobtot";
                                break;
                            default:                                    
                        }

                        if (currSelServLabel != "pobtot") {
                            document.getElementById("img-legend-servs").style.display = "flex";
                            document.getElementById("img-legend-pobtot").style.display = "none";
                        } else {
                            document.getElementById("img-legend-servs").style.display = "none";
                            document.getElementById("img-legend-pobtot").style.display = "flex";
                        }

                        console.log("loading other selected hexes...")
                        console.log(currSelCityLabel,currSelServLabel)
                        loadHexData(currSelCityLabel,currSelServLabel)
                            .then(results =>  {
                                console.log('changed hex data')
                                if (results) {
                                    changeHexes();
                                }
                            })
                            .catch(err => console.log("errooooor",err));
                    })
                    break;
                case 26:
                    document.getElementById("map").style.zIndex = -4;
                    document.getElementById("dashMap").style.zIndex = -4;
                    break;
                default:  
              }
      
            })
            .onStepExit(response => {

              if (response.index > 3 && response.index < 3) {
                response.element.classList.remove('active');
                let chapter = config.chapters.find(chap => chap.id === response.element.id);
                if (chapter.onChapterExit.length > 0 ) {
                }
              }  
            });
    });

    async function changeHexes() {
        let currObj = await hexLayers.find(obj => obj.city == currSelCityLabel);
        console.log("changing hexes to", currObj.city, currSelServLabel);
        renderHexes(dashMap, currObj[currSelServLabel],currSelCityLabel);


    }
    
    // setup resize event
    window.addEventListener('resize', scroller.resize);
  }
  
  window.onload = init;