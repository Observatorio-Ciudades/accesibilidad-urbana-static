function init() {

    let cityCoords = [
        { name: "Aguascalientes", center: [-102.291,21.881]},
        { name: "Cuernavaca", center: [-99.234,18.918]},
        { name: "Guadalajara", center: [-103.344,20.6736]},
        { name: "Mérida", center: [-89.6216,20.9677]},
        { name: "Mexicali", center: [-115.446,32.6469]},
        { name: "Ciudad de México", center: [-99.1269,19.4978]},
        { name: "Monterrey", center: [-100.309,25.6714]},
        { name: "Puebla", center: [-98.2062,19.0413]},
        { name: "Querétaro", center: [-100.392,20.5931]},
        { name: "Saltillo", center: [-101,25.4333]},
        { name: "San Luis Potosí", center: [-100.97916,22.1498]}
    ];


    console.log("holiii");
    let csvLayer = {};
    let mapLayers;
    let hexesLoaded = false;
    let hexesGenerated = false;
    let satOn = false;


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

    loadHexData("Guadalajara");

    function loadHexData(city) {
        let data = d3.csv(`data/csv-hexes/${city}_data.csv`).then(function(csv) {
            console.log(csv);
            console.log("holaaaaaaaa"); 
            let csvRaw = csv;
            let csvFilter = csvRaw.filter(hex => hex.min_supermercados > 0);
            console.log(csvFilter); // Hello, world!
            
            for (let i = 0; i<csvFilter.length; i++){
                csvLayer[csvFilter[i].hex_id_9] =  csvFilter[i].min_supermercados/100;
                // console.log("hex values:");
                // console.log(csvLayer[csvFilter[i].hex_id_9]);
            }
            // console.log("csvLayer"); 
            // console.log(csvLayer);
            
            hexesLoaded = true;
            
            const layer = {};
            let h3Resolution = 9;
            
        //    function createDataLayer() {
        //         json.forEach(({lat, lng}) => {
        //         const h3Index = h3.geoToH3(lat, lng, h3Resolution);
        //         layer[h3Index] = (layer[h3Index] || 0) + 1;
        //         });
        //         return normalizeLayer(layer);
        //     }
            
        //     function combineLayers() {
        //         const combined = {};
        //         mapLayers.forEach(({hexagons, weight}) => {
        //             Object.keys(hexagons).forEach(hex => {
        //             combined[hex] = (combined[hex] || 0) + hexagons[hex] * weight;
        //             });
        //         });
        //         return normalizeLayer(combined);
        //     }
            });
    }
  

  
  
    function normalizeLayer(layer, baseAtZero = false) {
        const hexagons = Object.keys(layer);
        // Pass one, get max
        const max = hexagons.reduce((max, hex) => Math.max(max, layer[hex]), -Infinity);
        const min = baseAtZero ? hexagons.reduce((min, hex) => Math.min(min, layer[hex]), Infinity) : 0;
        // Pass two, normalize
        hexagons.forEach(hex => {
            layer[hex] = (layer[hex] - min) / (max - min); 
        });
        return layer;
    }
  
    let layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity']
    }
  
    let alignments = {
        'left': 'lefty',
        'center': 'centered',
        'right': 'righty'
    }
  
    // function getLayerPaintType(layer) {
    //     let layerType = map.getLayer(layer).type;
    //     return layerTypes[layerType];
    // }
  
    // function setH3Opacity(layer) {
    //     let paintProps = getLayerPaintType(layer.layer);
    //     paintProps.forEach(function (prop) {
    //         map.setPaintProperty(layer.layer, prop, layer.opacity);
    //     });
    // }
  
    let story = document.getElementById('story');
  
    // let header = document.createElement('div');
    // if (config.title) {
    //     let titleText = document.createElement('h1');
    //     titleText.innerText = config.title;
    //     header.appendChild(titleText);
    // }
  
    // if (config.subtitle) {
    //     let subtitleText = document.createElement('h2');
    //     subtitleText.innerText = config.subtitle;
    //     header.appendChild(subtitleText);
    // }
  
    // if (config.byline) {
    //     let bylineText = document.createElement('p');
    //     bylineText.innerText = config.byline;
    //     header.appendChild(bylineText);
    // }
  
    // if (header.innerText.length > 0) {
    //     header.classList.add(config.theme);
    //     header.setAttribute('id', 'header');
    //     story.appendChild(header);
    // }

    // config.chapters.forEach((record, idx) => {

    for (let i = 5; i < config.chapters.length; i++) {
        let features = document.createElement('div');
        features.setAttribute('class', 'features');
        let container = document.createElement('div');
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
        }
  
        // if (record.image) {
        //     let image = new Image();
        //     image.src = record.image;
        //     chapter.appendChild(image);
        // }
  
        if (config.chapters[i].description ) {
            let story = document.createElement('p');
            story.innerHTML = config.chapters[i].description;
            chapter.appendChild(story);
        }
  
        if (config.chapters[i].title) {
            let title = document.createElement('h3');
            title.innerText = config.chapters[i].title;
            chapter.appendChild(title);
        }

        if (!config.chapters[i].full) {
            container.setAttribute('id', config.chapters[i].id);
            container.classList.add('step');
        } else {
            container.classList.add('row');
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
  

    // function getLayerPaintType(layer) {
    //     var layerType = map.getLayer(layer).type;
    //     return layerTypes[layerType];
    // }

    function setH3Opacity() {
        if (hexesLoaded) {
            
            //     let paintProps = getLayerPaintType(layer.layer);
            //     paintProps.forEach(function (prop) {
            //     map.setPaintProperty(layer.layer, prop, layer.opacity);
            // });
                // renderHexesCsv(map, csvLayer);
                renderHexes(map, csvLayer);
                hexesGenerated = true;      
        }
    }


    // let layerIDs = []; // Will contain a list used to filter against.
    // let filterInput = document.getElementById('filter-input');

    // function filterPlace() {

    // }

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
                'icon-size': 5,
                'text-field': ['get', 'description'],
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                // 'text-radial-offset': 0.5,
                'text-justify': 'auto',
                'icon-image': ['concat', ['get', 'icon'], '-15'],
            }
        });
    }
  
    function renderHexes(map, hexagons) {
        // Transform the current hexagon map into a GeoJSON object
        const geojson = geojson2h3.h3SetToFeatureCollection(
            Object.keys(hexagons),
            hex => ({value: hexagons[hex], city:"Gdl"})
        );
        console.log("drawing hexes");
        console.log(geojson);
        
        
        let sourceId = 'h3-hexes';
        let layerId = `${sourceId}-layer`;
        let source = map.getSource(sourceId);
        let layerCheck = map.getLayer(layerId);
        
        // Add the source and layer if we haven't created them yet
        if (!source && !layerCheck) {
            map.addSource(sourceId, {
            type: 'geojson',
            data: geojson
            });
            map.addLayer({
                id: layerId,
                source: sourceId,
                type: 'fill',
                // iconSize: 100,
                interactive: false,
                paint: {
                    'fill-outline-color': 'rgba(0,0,0,0)',
                    'fill-opacity': 0
                }
            });
            source = map.getSource(sourceId);
            source.setData(geojson);
        }        
        // Update the layer paint properties, using the current config values
        map.setPaintProperty(layerId, 'fill-color', {
            property: 'value',
            stops: [  
                [0.05, config.colorScale[0]],
                [0.10, config.colorScale[1]],
                [0.30, config.colorScale[2]],
                // [0.40, config.colorScale[3]]
            ]
        });            
        // map.setPaintProperty(layerId, 'fill-color', 'rgba(255,0,0,255)');
        map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
    }
  
  
    // function renderHexesCsv(map, hexagons) {
    //     // Transform the current hexagon map into a GeoJSON object
    //     const geojson = geojson2h3.h3SetToFeatureCollection(
    //         Object.keys(hexagons),
    //         hex => ({value: hexagons[hex]})
    //     );
    //     // console.log("geojson:");
    //     console.log("drawing hexes");
    //     console.log(geojson);
        
        
    //     const sourceId = 'h3-hexes';
    //     const layerId = `${sourceId}-layer`;
    //     let source = map.getSource(sourceId);
        
    //     // Add the source and layer if we haven't created them yet
    //     if (!source) {
    //         map.addSource(sourceId, {
    //         type: 'geojson',
    //         data: geojson
    //         });
    //         map.addLayer({
    //         id: layerId,
    //         source: sourceId,
    //         type: 'fill',
    //         interactive: false,
    //         paint: {
    //             'fill-outline-color': 'rgba(0,0,0,0)',
    //             'fill-opacity': 0,
    //         }
    //         });
    //         source = map.getSource(sourceId);
    //     }
  
    //     // Update the geojson data
    //     source.setData(geojson);
        
    //     // Update the layer paint properties, using the current config values
    //     map.setPaintProperty(layerId, 'fill-color', {
    //         property: 'value',
    //         stops: [
    //         [0, "red"],
    //         [100, "orange"],
    //         [200, "yellow"]        
    //         // [0, config.colorScale[0]],
    //         // [100, config.colorScale[1]],
    //         // [200, config.colorScale[2]]
    //         ]
    //     });            
    //     // map.setPaintProperty(layerId, 'fill-color', 'rgba(255,0,0,255)');
    //     map.setPaintProperty(layerId, 'fill-opacity', config.fillOpacity);
    // }
  
    // function renderAreas(map, hexagons) {
    //     // Transform the current hexagon map into a GeoJSON object
    //     let geojson = geojson2h3.h3SetToFeature(
    //         Object.keys(hexagons).filter(hex => hexagons[hex] > config.areaThreshold)
    //     );
        
    //     const sourceId = 'h3-hex-areas';
    //     const layerId = `${sourceId}-layer`;
    //     let source = map.getSource(sourceId);
        
    //     // Add the source and layer if we haven't created them yet
    //     if (!source) {
    //         map.addSource(sourceId, {
    //         type: 'geojson',
    //         data: geojson
    //         });
    //         map.addLayer({
    //         id: layerId,
    //         source: sourceId,
    //         type: 'line',
    //         interactive: false,
    //         paint: {
    //             'line-width': 3,
    //             'line-color': config.colorScale[2],
    //         }
    //         });
    //         source = map.getSource(sourceId);
    //     }
    //     // Update the geojson data
    //     source.setData(geojson);
    // }

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
                    'line-color': pathColScale(val),
                    'line-width': 5,
                    'line-opacity': 0.75
                    // 'line-dasharray': [2, 1]
                }
            });
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
                    // map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');

                    // map.setLayoutProperty('pathA', 'visibility', 'visible');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'visible');

                    // portadaChapter.onChapterEnter.forEach(setH3Opacity);
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
                    break;

                case 1: 
                    if (!pathAOn) {
                        renderPoints();
                        renderPaths("data/edges_route_min_02.json", "pathA", 0.07);
                        pathAOn = true;
                    }

                    // if(typeof pathALayer !== 'undefined' || typeof pathBLayer !== 'undefined' || typeof poiLabels !== 'undefined') {
                        // Remove map layer & source.
                        // map.removeLayer('pathA').removeSource('route');
                    //     map.removeLayer('pathA');
                    //     map.removeLayer('pathB');
                    //     map.removeLayer('poi-labels');
                    // }


                    break;

                case 2: 
                map.setLayoutProperty('pathA', 'visibility', 'visible');
                // map.setLayoutProperty('pathB', 'visibility', 'visible');
                map.setLayoutProperty('poi-labels', 'visibility', 'visible');
                // map.setLayoutProperty('pathA', 'visibility', 'visible');
                // map.setLayoutProperty('pathB', 'visibility', 'visible');
                // map.setLayoutProperty('poi-labels', 'visibility', 'visible');

    
                    // map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');
                     // map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');

                    // console.log("entering", response.index);
                    pathAChapter = config.chapters.find(chap => chap.id === response.element.id);




                    map.flyTo(pathAChapter.location);
                    console.log("seccion paths");
                    // if (!pathAOn) {
                    //     renderPaths("data/edges_route_min_02.json", "pathA", 0.7);
                    //     pathAOn = true;
                    // }
                    // map.setLayoutProperty('pathA', 'visibility', 'visible');
                    // map.setLayoutProperty('pathB', 'visibility', 'visible');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'visible');


                
                    break;

                case 3:
                    // map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');
                    pathBChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(pathBChapter.location);
                    if (!pathBOn) {
                        renderPaths("data/edges_route_max_02.json", "pathB", 0.37);
                        // map.setLayoutProperty('pathB', 'visibility', 'visible');
                        // map.setLayoutProperty('pathA', 'visibility', 'visible');
                        // map.setLayoutProperty('poi-labels', 'visibility', 'visible');
                        pathBOn = true;
                    }
  
                    
                    break;
                        
                case 4:
                    preOutroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(preOutroPathsChapter.location);

                    if (!hexesGenerated) {
                        preOutroPathsChapter.onChapterEnter.forEach(setH3Opacity);
                        hexesGenerated = true;
                    }
                    console.log("h3 hexes map on");
                    console.log(map);
                    // map.setLayoutProperty('pathA', 'visibility', 'visible');
                    // map.setLayoutProperty('pathB', 'visibility', 'visible');
                    // map.setLayoutProperty('poi-labels', 'visibility', 'visible');
                    break;
                case 5:
                    outroPathsChapter = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(outroPathsChapter.location);
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 6:
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    let chapterMtyA = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterMtyA.location);
                    satMap.flyTo(chapterMtyA.location);

                    if (satOn) {
                        setSatOpacity();
                    }
                    break;
                case 7:
                    let chapterMtyB = config.chapters.find(chap => chap.id === response.element.id);
                    map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');
                    // map.setStyle("mapbox://styles/mapbox/satellite-v9");
                    setSatOpacity();
                    map.flyTo(chapterMtyB.location);
                    satMap.flyTo(chapterMtyB.location);


                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    map.setLayoutProperty('h3-hexes-layer', 'visibility', 'none');
                    


                    break;
                case 8:
                    let chapterSatMty = config.chapters.find(chap => chap.id === response.element.id);
                    map.flyTo(chapterSatMty.location);
                    satMap.flyTo(chapterSatMty.location);

                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');

                    break;
                case 9:
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    break;
                case 10:
                    map.setLayoutProperty('pathA', 'visibility', 'none');
                    map.setLayoutProperty('pathB', 'visibility', 'none');
                    map.setLayoutProperty('poi-labels', 'visibility', 'none');
                    if (satOn) {
                        setSatOpacity();
                    }
                    break;

                case 11:
                    if (!chartsOn) {
                        loadD3();
                    }
                    chartsOn = true;  
                    map.flyTo(currLocation);
                    satMap.flyTo(currLocation);
                    // satMap.scrollZoom.enable();
                    // map.addControl(new mapboxgl.NavigationControl());

                    
                    let selectCity = document.getElementById("h3-dash-cities");
                    let selectHex = document.getElementById("h3-dash-hexes");

                    selectCity.addEventListener('change', (event) => {
                        console.log(`Selected ${selectCity.value}`);
                        console.log(`Selected ${event.target.value}`);
                        currLocation.center = cityCoords[event.target.value-1].center;
                        if (event.target.value-1 == 5) {
                            currLocation.zoom = 10;
                        }
                        map.jumpTo(currLocation);
                        satMap.jumpTo(currLocation);
                        // const result = document.querySelector('.result');
                        // result.textContent = `You like ${event.target.value}`;
                      });

                    map.on('click', function(e) {
                        map.scrollZoom.enable();
                        map.addControl(new mapboxgl.NavigationControl());

                        // The event object (e) contains information like the
                        // coordinates of the point on the map that was clicked.
                        console.log('A click event has occurred at ' + e.lngLat);
                    });
                    break;

                // case 12:
                //     // map.setLayoutProperty('pathA', 'visibility', 'none');
                //     // map.setLayoutProperty('pathB', 'visibility', 'none');
                //     // map.setLayoutProperty('poi-labels', 'visibility', 'none');
                //     // map.setStyle("mapbox://styles/haxzie/ck0cc2cdn01241eohsj4fcz5p");
                //     // map.setStyle("mapbox://styles/mapbox/dark-v9");

                //     // map.flyTo(currLocation);
                //     // satMap.flyTo(currLocation);

                //     // let selectCity = document.getElementById("h3-dash-cities");
                //     // let selectHex = document.getElementById("h3-dash-hexes");

                //     // selectCity.addEventListener('change', (event) => {
                //     //     console.log(`Selected ${selectCity.value}`);
                //     //     console.log(`Selected ${event.target.value}`);
                //     //     currLocation.center = cityCoords[event.target.value-1].center;
                //     //     map.jumpTo(currLocation);
                //     //     satMap.jumpTo(currLocation);
                //     //     // const result = document.querySelector('.result');
                //     //     // result.textContent = `You like ${event.target.value}`;
                //     //   });

                //     // console.log(`Selected ${selectHex.value}`);
                //     // console.log(`Selected ${selectCity.value}`);

                //     break;

                default:  
              }
  
  
              
              
      
            })
            .onStepExit(response => {
  
              if (response.index > 3 && response.index < 3) {
                response.element.classList.remove('active');
                let chapter = config.chapters.find(chap => chap.id === response.element.id);
                if (chapter.onChapterExit.length > 0 ) {
                    // chapter.onChapterExit.forEach(setH3Opacity);
                }
              }
  
  
            });
    });
    
  
    // setup resize event
    window.addEventListener('resize', scroller.resize);
  }
  
  window.onload = init;
