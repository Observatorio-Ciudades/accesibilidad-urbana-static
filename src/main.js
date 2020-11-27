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
    let satOn = false;
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
            csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i][serv]/100;
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
  
        // if (config.chapters[i].title && config.chapters[i].title != "") {
        if (config.chapters[i].id == 'mtyA' || config.chapters[i].id == 'gdlA' || config.chapters[i].id == 'qroA' || config.chapters[i].id == 'cdmxA') {
            let title = document.createElement('h3');
            title.innerText = config.chapters[i].title;
            chapter.appendChild(title);
        }
  
        if (config.chapters[i].description ) {
            let story = document.createElement('p');
            story.innerHTML = config.chapters[i].description;
            chapter.appendChild(story);
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
    if (!map) {
        map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
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
    

    let satMapContainer = document.getElementById("satMap");

    

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
  

    function renderPoints() {
        map.addSource('points', {
            'type': 'geojson',
            'data': points
        });
             
        map.addLayer({
            'id': 'poi-labels',
            'type': 'symbol',
            'source': 'points',
            'layout': {
                'icon-size': 4,
                'text-field': ['get', 'description'],
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                // 'text-radial-offset': 0.5,
                'text-justify': 'auto',
                'icon-image': ['concat', ['get', 'icon'], '-15'],
            }
        });
    }
  
    async function renderHexes(map, hexagons, city) {
        // Transform the current hexagon map into a GeoJSON object
        // d3.schemeSpectral[7];
        // let hexColScale = d3.scaleDiverging([0.6, 0.30, 0.15, 0.1, 0.05], d3.interpolateSpectral);

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
        map.setPaintProperty(layerId, 'fill-color', {
            property: 'value',
            stops: [  
                [0.05, config.colorScale[0]],
                [0.10, config.colorScale[1]],
                [0.15, config.colorScale[2]],
                [0.30, config.colorScale[3]],
                [0.60, config.colorScale[4]]
                // [0.05, hexColScale(0.05)],
                // [0.10, hexColScale(0.10)],
                // [0.15, hexColScale(0.15)],
                // [0.30, hexColScale(0.30)],
                // [0.60, hexColScale(0.60)]
            ],
            type: 'exponential'
        });            
        // map.setPaintProperty(layerId, 'fill-color', 'rgba(255,0,0,255)');
        map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
    }
  
  

    function renderPaths(dataset, pathName, val) {
        let pathsData;
        let pathsCoords = [];
        

        let pathColScale = d3.scaleQuantile()
        // let pathColScale = d3.scaleQuantize()
            .domain([0.05,0.10,0.3])
            .range(config.colorScale);
            // .range(config.colorScale.reverse());

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
                        'line-color': '#94F9F7',
                        'line-width': 5,
                        'line-opacity': 0.75
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
                        'line-color': '#F9E492',
                        'line-width': 5,
                        'line-opacity': 0.75
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
                // debug: true
            })
            .onStepEnter(response => {
              console.log(response);
              response.element.classList.add('active');
            
              switch(response.index) {
                case 0: 
                    portadaChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(portadaChapter.location);

                    console.log("holiii switch");
                    let pathALayer = map.getLayer('pathA');
                    let pathBLayer = map.getLayer('pathB');
                    let poiLabels = map.getLayer('poi-labels');

                    if(typeof pathALayer !== 'undefined') {
                        map.setLayoutProperty('pathA', 'visibility', 'none');
                    }
                    if(typeof pathBLayer !== 'undefined') {
                        map.setLayoutProperty('pathB', 'visibility', 'none');
                    }
                    if(typeof poiLabels !== 'undefined') {
                        map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    }
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;

                case 1: 
                    if (!pathAOn) {
                        renderPoints();
                        renderPaths("data/edges_route_min_02.json", "pathA", 0.07);
                        pathAOn = true;
                    }
                    break;

                case 2: 
                    map.setLayoutProperty('pathA', 'visibility', 'visible');
                    map.setLayoutProperty('poi-labels', 'visibility', 'visible');     
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
                    if (hexesLoaded) {
                        renderHexes(map, hexLayers[0].min_supermercados, 'Guadalajara');  
                    }
                    console.log("h3 hexes map on");
                    console.log(map);
                    break;
                case 5:
                    outroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(outroPathsChapter.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    loadHexData("Monterrey","min_supermercados");
                    break;
                case 6:
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 8:
                    let chapterMtyC = config.chapters.find(chap => chap.id === response.element.id);
                    console.log("mtyc debug step", response.element.id)
                    console.log("mtyc bug chapter", chapterMtyC.id)
                    map.flyTo(chapterMtyC.location);
                    satMap.flyTo(chapterMtyC.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 10:
                    let chapterGdlA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlA.location);
                    satMap.flyTo(chapterGdlA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 12:
                    if (satOn) {
                        setSatOpacity();
                    }
                    let chapterGdlC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterGdlC.location);
                    satMap.flyTo(chapterGdlC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 14:
                    let chapterQroA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroA.location);
                    satMap.flyTo(chapterQroA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 16:
                    if (satOn) {
                        setSatOpacity();
                    }
                    let chapterQroC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroC.location);
                    satMap.flyTo(chapterQroC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    loadHexData("CDMX","min_supermercados");
                    break;
                case 17:
                    // console.log(loaded, hexLayers[3]);
                    let chapterQroD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterQroD.location);
                    satMap.flyTo(chapterQroD.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 18:
                    let chapterCDMXA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXA.location);
                    satMap.flyTo(chapterCDMXA.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 20:
                    if (satOn) {
                        setSatOpacity();
                    }
                    let chapterCDMXC = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXC.location);
                    satMap.flyTo(chapterCDMXC.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 21:
                    let chapterCDMXD = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterCDMXD.location);
                    satMap.flyTo(chapterCDMXD.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
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
                    break;
                case 24:
                    let selectCity = document.getElementById("h3-dash-cities");
                    let selectHex = document.getElementById("h3-dash-hexes");

                    selectCity.addEventListener('change', (event) => {
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

                        if (map.getLayer(`${currSelCityLabel}-${currSelServLabel}-layer`)) {
                            map.removeLayer(`${currSelCityLabel}-${currSelServLabel}-layer`);
                        }
                          if (map.getSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`)) {
                            map.removeSource(`${currSelCityLabel}-${currSelServLabel}-hex-source`);
                        }

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
                                currSelServLabel = "min_pobtot";
                                break;
                            default:                                    
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
        // let currObj = await hexLayers.find(obj => obj.city == "Mexicali");
        let currObj = await hexLayers.find(obj => obj.city == currSelCityLabel);
        console.log("changing hexes to", currObj.city, currSelServLabel);
        // if (currObj[currSelServLabel]) {
        renderHexes(map, currObj[currSelServLabel],currSelCityLabel);
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
