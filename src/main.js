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


    let points = {
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
            },
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
            },
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

    let pointTarget = {
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

    loadHexData("Guadalajara","min_supermercados");

    // async function loadHexData(city, serv) {
    //     let csvLayer = {};
    //     let newHexObj = {}

    //     d3.csv(`data/csv-hexes/${city}_data.csv`).then(function(csv) {

    //         console.log("loading new hex data..."); 
    //         // console.log(csv);
    //         let csvRaw = csv;
    //         // let csvFilter = csvRaw.filter(hex => hex.min_supermercados > 0);
    //         let csvFilter = csvRaw.filter(hex => hex[serv] > 0);
    //         console.log(csvFilter); 
            
    //         for (let i = 0; i<csvFilter.length; i++){
    //             // csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i].min_supermercados/100;
    //             csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i][serv]/100;
    //         }
            
    //         hexesLoaded = true;

    //         newHexObj["city"] = city;
    //         newHexObj[serv] = csvLayer;
    //         hexLayers.push(newHexObj);
    //         console.log("new hex object:")
    //         console.log(newHexObj)
    //         });

    //     return newHexObj;
    // }

    async function loadHexData(city, serv) {
        let csvLayer = {};
        let newHexObj = {};

        let responseCSV = await d3.csv(`data/csv-hexes/${city}_data.csv`);
        console.log("loading new hex data..."); 
        let csvRaw = await responseCSV;
        let csvFilter = await csvRaw.filter(hex => hex[serv] > 0);
        console.log( await csvFilter); 
        for (let i = 0; i<csvFilter.length; i++){
            // csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i].min_supermercados/100;
            if (serv != "pobtot") {
                csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i][serv]/100;
            } else {
                csvLayer[csvFilter[i].hex_id_9] =  (csvFilter[i][serv]/10.53325)/100;
            }
        }
        hexesLoaded = true;


        let currObj = await hexLayers.find(obj => obj.city == city);
        // let currObj = await hexLayers.find(obj => obj.city == currSelCityLabel);
        if (currObj) {
            // currObj[serv] =  csvLayer;

            for (let k = 0; k < hexLayers.length; k++) {
                if (hexLayers[k].city == city) {
                    hexLayers[k][serv] =  csvLayer;
                    // hexLayers.push( await newHexObj);
                    console.log("loading new hexes to existiiiiing object:");
                    console.log(hexLayers[k]);
                    return hexLayers[k];
                    // return currObj;
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
  
  
    // function normalizeLayer(layer, baseAtZero = false) {
    //     const hexagons = Object.keys(layer);
    //     // Pass one, get max
    //     const max = hexagons.reduce((max, hex) => Math.max(max, layer[hex]), -Infinity);
    //     const min = baseAtZero ? hexagons.reduce((min, hex) => Math.min(min, layer[hex]), Infinity) : 0;
    //     // Pass two, normalize
    //     hexagons.forEach(hex => {
    //         layer[hex] = (layer[hex] - min) / (max - min); 
    //     });
    //     return layer;
    // }
  
    let story = document.getElementById('story');
  
    for (let i = 5; i < config.chapters.length; i++) {
        let features = document.createElement('div');
        features.setAttribute('class', 'features');
        // let container = document.createElement('div');
        let container = document.getElementById(config.chapters[i].id);
        let chapter = document.createElement('div');
  
        if (i%2 != 0) {
                features.classList.remove('lefty');
                features.classList.add('righty');
            } else if (i%2 == 0) {
                features.classList.remove('righty');
                features.classList.add('lefty');
        }

  
        // if (config.chapters[i].title && config.chapters[i].title != "") {
        if (config.chapters[i].id == 'mtyA' || config.chapters[i].id == 'gdlA' || config.chapters[i].id == 'qroA' || config.chapters[i].id == 'cdmxA') {
            let title = document.createElement('h3');
            title.innerText = config.chapters[i].title;
            chapter.appendChild(title);
        }
  
        if (config.chapters[i].description != "") {
            let story = document.createElement('p');
            story.innerHTML = config.chapters[i].description;
            chapter.appendChild(story);
        }

        // if (config.chapters[i].shortInfo != "" && !config.chapters[i].full) {
        if (config.chapters[i].shortInfo != "") {
            if (config.chapters[i].shortInfo.length > 0) {

                let shortInfoCont;
                let shortInfoContB;
                if (config.chapters[i].id == "gdlC") {
          

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
                // let shortInfoCont = document.createElement('ul');
                // shortInfoCont.classList.add('short-info-cont');
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
                // chapter.appendChild(shortInfoCont);
            }
        }


        if (config.chapters[i].full) {
            features.classList.remove('features');
            features.classList.remove('lefty');
            features.classList.remove('righty');
            features.classList.add('full-chapter');

            // chapter.classList.remove('marco');
            console.log('full chapter on')
            let imgContainer = document.createElement('div')
            imgContainer.classList.add('img-container');
        }
        
        container.classList.add('step');

        if (config.chapters[i].full) {
            // container.setAttribute('id', config.chapters[i].id);
            container.classList.add('row');
            // container.classList.add('step');

        }
  

        if (i === 0) {
            container.classList.add('active');
        }

  
        chapter.classList.add(config.theme);
        if (!config.chapters[i].full) {
            chapter.classList.add("marco");
        } else {
            chapter.classList.add("main-col");
        }
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
        // style: "mapbox://styles/mapbox/dark-v9",
        center: config.chapters[0].location.center,
        zoom: 12,
        bearing: config.chapters[0].location.bearing,
        pitch: config.chapters[0].location.pitch,
        scrollZoom: false,
        transformRequest: transformRequest
    });
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
        // style: 'mapbox://styles/haxzie/ck0cc2cdn01241eohsj4fcz5p',
        // style: "mapbox://styles/mapbox/dark-v8",
        style: "mapbox://styles/mapbox/dark-v9",
        // style: "mapbox://styles/mapbox/night-v2",
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
  

    function renderPoints() {
        // map.addSource('points', {
        //     'type': 'geojson',
        //     'data': points
        // });

        map.loadImage(
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('cat', image);

                map.addSource('points', {
                    'type': 'geojson',
                    'data': points
                });
                // map.addLayer({
                //     'id': 'points',
                //     'type': 'symbol',
                //     'source': 'point',
                //     'layout': {
                //         'icon-image': 'cat',
                //         'icon-size': 0.25
                //     }
                // });
                map.addLayer({
                    'id': 'poi-labels',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'cat',
                        'icon-size': 0.25,
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
             
        // map.addLayer({
        //     'id': 'poi-labels',
        //     'type': 'symbol',
        //     'source': 'points',
        //     'layout': {
        //         'icon-image': 'cat',
        //         'icon-size': 0.25
        //         'icon-size': 4,
        //         'text-field': ['get', 'description'],
        //         'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        //         // 'text-radial-offset': 0.5,
        //         'text-justify': 'auto',
        //         'icon-image': ['concat', ['get', 'icon'], '-15'],
        //     }
        // });
    }

    function renderEachPoint() {
        // map.addSource('points', {
        //     'type': 'geojson',
        //     'data': points
        // });

        map.loadImage(
            'imgs/noun_Walking_1757932.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('walkA', image);

                map.addSource('pointA', {
                    'type': 'geojson',
                    'data': pointA
                });
                // map.addLayer({
                //     'id': 'points',
                //     'type': 'symbol',
                //     'source': 'point',
                //     'layout': {
                //         'icon-image': 'cat',
                //         'icon-size': 0.25
                //     }
                // });
                map.addLayer({
                    'id': 'poi-labelsA',
                    'type': 'symbol',
                    'source': 'pointA',
                    'layout': {
                        'icon-image': 'walkA',
                        'icon-size': 0.10,
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
                // map.addLayer({
                //     'id': 'points',
                //     'type': 'symbol',
                //     'source': 'point',
                //     'layout': {
                //         'icon-image': 'cat',
                //         'icon-size': 0.25
                //     }
                // });
                map.addLayer({
                    'id': 'poi-labelsB',
                    'type': 'symbol',
                    'source': 'pointB',
                    'layout': {
                        'icon-image': 'walkB',
                        'icon-size': 0.10,
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

                map.addSource('pointTarget', {
                    'type': 'geojson',
                    'data': pointTarget
                });
                // map.addLayer({
                //     'id': 'points',
                //     'type': 'symbol',
                //     'source': 'point',
                //     'layout': {
                //         'icon-image': 'cat',
                //         'icon-size': 0.25
                //     }
                // });
                map.addLayer({
                    'id': 'poi-labelsTarget',
                    'type': 'symbol',
                    'source': 'pointTarget',
                    'layout': {
                        'icon-image': 'groceries',
                        'icon-size': 0.15,
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
             
        // map.addLayer({
        //     'id': 'poi-labels',
        //     'type': 'symbol',
        //     'source': 'points',
        //     'layout': {
        //         'icon-image': 'cat',
        //         'icon-size': 0.25
        //         'icon-size': 4,
        //         'text-field': ['get', 'description'],
        //         'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        //         // 'text-radial-offset': 0.5,
        //         'text-justify': 'auto',
        //         'icon-image': ['concat', ['get', 'icon'], '-15'],
        //     }
        // });
    }
  
    async function renderHexes(map, hexagons, city) {
        // Transform the current hexagon map into a GeoJSON object
        // d3.schemeSpectral[7];
        // let hexColScale = d3.scaleDiverging([0.6, 0.30, 0.15, 0.1, 0.05], d3.interpolateSpectral);
        // console.log('draw this hexes');
        // console.log(hexagons);

        let geojson = geojson2h3.h3SetToFeatureCollection(
            Object.keys( await hexagons),
            hex => ({value: hexagons[hex], city:city})
        );
        console.log("drawing hexes");
        console.log(await geojson);
        
        
        let sourceId = `${city}-${currSelServLabel}-hex-source`;
        // let sourceId = `${city}-hex-source`;
        // let sourceId = 'h3-hexes';
        // let layerId = `${city}-layer`;
        let layerId = `${city}-${currSelServLabel}-layer`;
        let source = map.getSource(sourceId);
        let layerCheck = map.getLayer(layerId);
        
        // Add the source and layer if we haven't created them yet
        if (!source && !layerCheck) {
            map.addSource(sourceId, {
            type: 'geojson',
            data: await geojson
            });
            map.addLayer({
                id: layerId,
                source: sourceId,
                type: 'fill',
                // iconSize: 100,
                interactive: false,
                paint: {
                    'fill-outline-color': 'rgba(0,0,0,0)',
                    // 'fill-opacity': 0
                    "fill-opacity": 0,
                    "fill-opacity-transition": {duration: 2000},
                }
            });
            source = map.getSource(sourceId);
            source.setData(await geojson);
        }        
        // Update the layer paint properties, using the current config values
        
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
                    // [0.05, hexColScale(0.05)],
                    // [0.10, hexColScale(0.10)],
                    // [0.15, hexColScale(0.15)],
                    // [0.30, hexColScale(0.30)],
                    // [0.60, hexColScale(0.60)]
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
                    // [0.05, hexColScale(0.05)],
                    // [0.10, hexColScale(0.10)],
                    // [0.15, hexColScale(0.15)],
                    // [0.30, hexColScale(0.30)],
                    // [0.60, hexColScale(0.60)]
                ],
                type: 'exponential'
            }); 
        }
       
        // map.setPaintProperty(layerId, 'fill-color', 'rgba(255,0,0,255)');
        map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
    }

    function renderHexPaths(map, hexagons, label) {
        // 8948a202973ffff
  
        // Transform the current hexagon map into a GeoJSON object
        const geojson = geojson2h3.h3SetToFeatureCollection(
          Object.keys(hexagons),
          hex => ({value: hexagons[hex]})
        );
        
        const sourceId = `h3-${label}-source`;
        const layerId = `$h3-${label}-layer`;
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
        
        // Update the layer paint properties, using the current config values
        // map.setPaintProperty(layerId, 'fill-color', {
        //   property: 'value',
        //   stops: [
        //     [0, config.colorScale[0]],
        //     [0.5, config.colorScale[1]],
        //     [1, config.colorScale[2]]
        //   ]
        // });
        
    //     map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
      }
  
  

    function renderPaths(dataset, pathName, val) {
        let pathsData;
        let pathsCoords = [];
        

        // let pathColScale = d3.scaleQuantile()
        // // let pathColScale = d3.scaleQuantize()
        //     .domain([0.05,0.10,0.3])
        //     .range(config.colorScale);
        //     // .range(config.colorScale.reverse());

        d3.json(dataset).then(function(json) {
            // console.log(json.features); 
            pathsData = json.features;

            // console.log(`${pathsData.length} features in json` ); 
            for (let i = 0; i < json.features.length; i++) {
                // console.log(pathsData[i].geometry.coordinates)
                let newPathPoint = [pathsData[i].geometry.coordinates[0][0],pathsData[i].geometry.coordinates[1][1]]
                pathsCoords.push(newPathPoint);
            }
            // console.log("pathsCoords");
            // console.log(pathsCoords);

            map.addSource(pathName, {
                    "type": "geojson",
                    "data": json
            });
            var animationStep = 100;
            enableLineAnimation(pathName);

            function enableLineAnimation(layerId) {
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
                    map.setPaintProperty(layerId, 'line-dasharray', dashArraySeq[dashStep]);
                  }, animationStep);
              }

            if (pathName == "pathA") {
                map.addLayer({
                    'id': pathName,
                    'type': 'line',
                    'source': pathName,
                    // 'layout': {
                    //     'icon-size': 10
                    //     // 'line-join': 'round',
                    //     // 'line-cap': 'round'
                    // },
                    'paint': {
                        // 'line-color': pathColScale(val),
                        // 'line-color': '#6FAFBF',
                        // 'line-color': '#CF1750',
                        'line-color': '#FAE300',
                        'line-width': 5,
                        'line-opacity': 0.5
                        // 'line-dasharray': [2, 1]
                    }
                });
            } else {
                map.addLayer({
                    'id': pathName,
                    'type': 'line',
                    'source': pathName,
                    // 'layout': {
                    //     'icon-size': 10
                    //     // 'line-join': 'round',
                    //     // 'line-cap': 'round'
                    // },
                    'paint': {
                        // 'line-color': pathColScale(val),
                        // 'line-color': '#EBC639',
                        // 'line-color': '#F9E492',
                        'line-color': '#CF1750',
                        'line-width': 5,
                        'line-opacity': 0.5
                        // 'line-dasharray': [2, 1]
                    }
                });
            }

        })
    }
  
    // instantiate the scrollama
    let scroller = scrollama();
  
    let pathAOn = false;
    let pathBOn = false;
    let chartsOn = false;
    // let hexesOn = false;

    let pathALayer;
    let pathBLayer;
    let poiLabels;

    let initialHexes;

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

        
        // setup the instance, pass callback functions
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
                    poiLabels = map.getLayer('poi-labelsTarget');
                    // poiLabels = map.getLayer('poi-labels');

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

                    // if (initialHexes) {
                    //     map.removeLayer(`Guadalajara-${currSelServLabel}-layer`)
                    // }

                    if(typeof pathALayer !== 'undefined') {
                        map.setLayoutProperty('pathA', 'visibility', 'none');
                    }
                    if(typeof pathBLayer !== 'undefined') {
                        map.setLayoutProperty('pathB', 'visibility', 'none');
                    }
                    if(typeof poiLabels !== 'undefined') {
                        // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                        map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;

                case 1: 
                    if (!pathAOn) {
                        // renderPoints();
                        renderEachPoint();
                        renderPaths("data/edges_route_min_02.json", "pathA", 0.07);
                        pathAOn = true;
                    }
                    break;

                case 2: 
                    map.setLayoutProperty('pathA', 'visibility', 'visible');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'visible');     
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'visible');     
                    pathAChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(pathAChapter.location);
                    console.log("seccion paths");
                    break;

                case 3:
                    pathBChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(pathBChapter.location);
                    if (!pathBOn) {
                        renderPaths("data/edges_route_max_02.json", "pathB", 0.37);
                        pathBOn = true;
                    }
                    break;
                        
                case 4:
                    preOutroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(preOutroPathsChapter.location);
                    // if (hexesLoaded) {
                    //     renderHexes(map, hexLayers[0].min_supermercados, 'Guadalajara');  
                    // }
                    console.log("h3 hexes map on");
                    console.log(map);
                    break;
                case 5:
                    outroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(outroPathsChapter.location);
                    // map.setLayoutProperty('pathA', 'visibility', 'none');
                    // map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    if (hexesLoaded) {
                        renderHexes(map, hexLayers[0].min_supermercados, 'Guadalajara');  
                        initialHexes = map.getLayer(`Guadalajara-min_supermercados-layer`);
                        if(typeof initialHexes !== 'undefined') {
                            map.setLayoutProperty('Guadalajara-min_supermercados-layer', 'visibility', 'visible');
                        }

                    }
                    loadHexData("Monterrey","min_supermercados");
                    break;
                case 6:
                    
                    // renderHexPaths(map, { '8948a202973ffff': 409.37995833333343 }, "qroHexPath01");
                    // renderHexPaths(map, { '8948a20297bffff': 409.37995833333343 }, "qroHexPath02");

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
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

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
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
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 9:
                    let chapterMtyD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterMtyD.location);
                    satMap.flyTo(chapterMtyD.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 10:
                    let chapterGdlA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlA.location);
                    satMap.flyTo(chapterGdlA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 11:
                    if (!satOn) {
                        setSatOpacity();
                    }
                    let chapterGdlB = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlB.location);
                    satMap.flyTo(chapterGdlB.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 12:
                    if (satOn) {
                        setSatOpacity();
                    }

                    // renderHexPaths(map, { '894983cac23ffff': 100 }, "gdlHexPath01");
                    // renderHexPaths(map, { '894983caca3ffff': 100 }, "gdlHexPath02");

                    let chapterGdlC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlC.location);
                    satMap.flyTo(chapterGdlC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    loadHexData("Queretaro","min_supermercados");
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 13:
                    let chapterGdlD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlD.location);
                    satMap.flyTo(chapterGdlD.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 14:
                    let chapterQroA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroA.location);
                    satMap.flyTo(chapterQroA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    if (hexLayers[2]) {
                        renderHexes(map, hexLayers[2].min_supermercados, 'Querétaro');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 15:
                    if (!satOn) {
                        setSatOpacity();
                    }
                    let chapterQroB = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroB.location);
                    satMap.flyTo(chapterQroB.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
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
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    loadHexData("CDMX","min_supermercados");
                    break;
                case 17:
                    // console.log(loaded, hexLayers[3]);
                    let chapterQroD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroD.location);
                    satMap.flyTo(chapterQroD.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 18:
                    let chapterCDMXA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXA.location);
                    satMap.flyTo(chapterCDMXA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
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
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 20:
                    if (satOn) {
                        setSatOpacity();
                    }

                    // renderHexPaths(map, { '894983cac23ffff': 100 }, "cdmxHexPath01");
                    // renderHexPaths(map, { '894983caca3ffff': 100 }, "cdmxHexPath02");

                    let chapterCDMXC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXC.location);
                    satMap.flyTo(chapterCDMXC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 21:
                    let chapterCDMXD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXD.location);
                    satMap.flyTo(chapterCDMXD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsA', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labelsTarget', 'visibility', 'none');
                    break;
                case 22:
                    break;
                case 23:
                    if (!chartsOn) {
                        loadD3();
                    }
                    chartsOn = true;  
                    map.flyTo(currLocation);
                    satMap.flyTo(currLocation);
                    // satMap.scrollZoom.enable();
                    // map.addControl(new mapboxgl.NavigationControl());
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
                    // document.getElementById("map").style.zIndex = -4;
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
                    // map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
                    // document.getElementById("map").style.zIndex = 0;
                    document.getElementById("dashMap").style.zIndex = 0;
                    document.getElementById("map").style.zIndex = -10;


                    // if (!dashOn) {
                    //     setDashOpacity();
                    // }

                    if (!navEnabled) {
                        // map.addControl(new mapboxgl.NavigationControl(),'top-left');
                        dashMap.addControl(new mapboxgl.NavigationControl(),'top-left');
                        navEnabled = true;
                    } else {
                        dashMap.doubleClickZoom.enable();
                        dashMap.dragPan.enable();   
                        // map.doubleClickZoom.enable();
                        // map.dragPan.enable();

                        // map.scrollZoom.enable();
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

                        // if (map.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                        //     map.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        // }
                        //   if (map.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                        //     map.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        // }

                        currSelCity = event.target.value;
                        // let currSelHex = event.target.value;
                        console.log(`Selected ${selectCity.value}`);
                        console.log(`Selected ${event.target.value}`);
                        // console.log(`Selected ${selectCity.options[currSelCity-1].text}`);
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



                        // loadHexData(currSelCityLabel,currSelServLabel);
                        // changeHexes();
                      });

                      selectHex.addEventListener('change', (event) => {
                        currSelServ = event.target.value;
                        console.log(`selected serv option ${currSelServ}`);

                        // let pastSource = `${currSelCityLabel}-${currSelServLabel}-hex-source`;
                        // // let sourceId = `${city}-hex-source`;
                        // // let sourceId = 'h3-hexes';
                        // // let layerId = `${city}-layer`;
                        // let pastLayer = `${city}-${currSelServLabel}-layer`;

                        // map.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        // map.removeSource(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        

                        if (dashMap.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                            dashMap.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        }
                          if (dashMap.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                            dashMap.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        }


                        // if (map.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                        //     map.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        // }
                        //   if (map.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                        //     map.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        // }

                        // let oldLayerId = `${currSelCityLabel}-${currSelServLabel}-layer`;
                        // let oldLayerId = `${currSelCityLabel}-${currSelServLabel}-layer`;

                        // function setLayerSource(layerId, source, sourceLayer) {
                        //     var oldLayers = this.map.getStyle().layers;
                        //     var layerIndex = oldLayers.findIndex(l => l.id === layerId);
                        //     var layerDef = oldLayers[layerIndex];
                        //     var before = oldLayers[layerIndex + 1] && oldLayers[layerIndex + 1].id;
                        //     layerDef.source = source;
                        
                        //     if (sourceLayer) {
                        //       layerDef['source-layer'] = sourceLayer;
                        //     } else if (sourceLayer !== undefined) {
                        //       delete layerDef['source-layer'];
                        //     }
                        
                        //     this.map.removeLayer(layerId);
                        //     this.mapAddLayerBefore(layerDef, before);
                        //   }

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


                        // loadHexData(currSelCityLabel,currSelServLabel).then(changeHexes());
                        // changeHexes();
                    })

                    // map.on('click', function(e) {
                    //     map.scrollZoom.enable();
                    //     map.addControl(new mapboxgl.NavigationControl());
                    //     console.log('A click event has occurred at ' + e.lngLat);
                    // });
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

    // function disableArtPointer(id, prop) {
    //     let artNodes = document.getElementById(id).getElementsByTagName("div");
    //     for(let i = 0; i<artNodes.length; i++) {
    //         // artNodes[i].style.background = color;
    //         // artNodes[i].style.background = prop;
    //         artNodes[i].style.pointerEvents = prop;
    //     }
    // }

    async function changeHexes() {
        // let currObj = await hexLayers.find(obj => obj.city == "Mexicali");
        let currObj = await hexLayers.find(obj => obj.city == currSelCityLabel);
        console.log("changing hexes to", currObj.city, currSelServLabel);
        // if (currObj[currSelServLabel]) {
        renderHexes(dashMap, currObj[currSelServLabel],currSelCityLabel);
        // renderHexes(map, await currObj[currSelServLabel],currSelCityLabel);
        // }
        // if (await hexLayers.find(obj => obj.city == currSelCityLabel)) {
            // for (let k = 0; k < hexLayers.length; k++) {
            //     if (hexLayers[k].city == currSelCityLabel) {
            //     // if (await hexLayers[k].city == currSelCityLabel) {
            //     // if (await hexLayers[k].city == currSelCityLabel) {
            //         // let currObj = hexLayers.find(obj => obj.city == currSelCityLabel);
            //         console.log(`fetching ${hexLayers[k].city}`);
            //         // renderHexes(map, await hexLayers[k][currSelServLabel],currSelCityLabel);
            //         renderHexes(map, hexLayers[k][currSelServLabel],currSelCityLabel);
            //     }
            // }
        // }
        

    }
    
    // setup resize event
    window.addEventListener('resize', scroller.resize);
  }
  
  window.onload = init;
