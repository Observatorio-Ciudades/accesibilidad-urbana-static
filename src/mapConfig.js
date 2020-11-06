let config = {
    fillOpacity: 0.4,
    // colorScale: ['#6FAFBF', '#EDD13B', '#D51D1D','#CA3A2D'],
    colorScale: ['#6FAFBF', '#EDD13B', '#D51D1D'],
    // colorScale: ['#163780', '#84AA80', '#EDD058', '#CA3A2D'],
    areaThreshold: 1,
    // claros
    // style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    // style: 'mapbox://styles/haxzie/ck0cctlg503xe1co6hmx1kunx',

    // áreas verdes
    // style: 'mapbox://styles/haxzie/ck0aovhaa389j1cpdls6va2f1',
    style: 'mapbox://styles/haxzie/cjxg35uth252i1cmu2r0gomx7',

    // obscuros
    // style: 'mapbox://styles/haxzie/ck0cc2cdn01241eohsj4fcz5p',
    // style: 'mapbox://styles/tugaarredondo/ckfowiqg00b6k19nxugunq2ww',

    accessToken: 'pk.eyJ1IjoidHVnYWFycmVkb25kbyIsImEiOiJjazh6aTNqZjQxaGRoM3RzZnJ3cW9xZWY2In0.6RxvV7485u2EJnuueGcryQ',
    showMarkers: true,
    alignment: 'center',
    theme: 'dark',
    title: 'Accesibilidad urbana 2020',
    subtitle: 'Accesibilidad urbana en tiempos de pandemia',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'prologue',
            title: '',
            full: false, 
            image: '',
            description: '',
            location: {
                center: [-103.3928603,  20.720328],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 0.8, 
                curve: 1,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'pathA',
            title: 'Zapoaslzcxdfljlkjpan, Jalisco',
            full: false, 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: {
                center: [-103.3943851,  20.7213538],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                speed: 0.8,
                curve: 1,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
                ,
                {
                    layer: 'points',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'pathB',
            title: 'Zapoaslzcxdfljlkjpan, Jalisco',
            full: false, 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: {
                center: [-103.3980482, 20.7191641],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 0.7,
                curve: 1, 
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'preOutroPaths',
            title: '',
            full: false, 
            image: '',
            description: '',
            location: {
                center: [-103.3964488,  20.7200531],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 0.7, 
                curve: 0.75,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'outroPaths',
            title: '',
            full: false, 
            image: '',
            description: '',
            location: {
                center: [-103.3964488,  20.7200531],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
                curve: 0.75,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'mtyA',
            title: 'Polígono Campana-Altamira, Monterrey, N.L.',
            full: false, 
            image: '',
            description: 'El polígono Campana-Altamira es una zona de grandes contrastes, a pesar de su ubicación central en la ciudad, conectada a vialidades principales y a menos de 2 kilómetros del Tecnológico de Monterrey y la zona comercial de Valle Oriente, sus pobladores viven con grandes carencias en el acceso a servicios básicos y calidad de vida.<br><br>La topografía es una de las condiciones más relevantes en la zona, ya que configura la estructura urbana, haciendo difícil y costosa la provisión de servicios básicos, generando un sistema discontinuo de calles y aumentando las posibilidades de riesgos de deslaves, inundaciones y fuertes escorrentías durante la temporada de lluvias.',
            location: {
                center: [-100.3784997,  25.6989061],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'mtyB',
            title: '',
            full: false, 
            image: '',
            description: 'La zona comenzó a urbanizarse con asentamientos informales durante la década de 1960 con migrantes originarios de zonas rurales del estado de Nuevo León y de otras partes del país, que llegaron en busca de oportunidades de empleo principalmente en la construcción e industria.<br><br>El uso de suelo en la parte de los lomeríos es predominantemente habitacional, con viviendas construidas progresivamente por los habitantes. El 33% de las viviendas en la zona tienen una situación irregular en cuanto a la tenencia de propiedad.<br><br>En las partes bajas del polígono, se encuentran las calles que conectan la zona con avenidas principales de la ciudad, y en torno a las cuales se concentran los comercios, servicios y equipamientos educativos y de salud, por lo que las personas que viven en los cerros tienen que desplazarse hasta las partes bajas para acceder a estos servicios.',
            location: {
                center: [-100.3784997,  25.6989061],
                zoom: 15,
                pitch: 50,
                bearing: 0.00
            },
            onChapterEnter: [                
                // {
                // layer: 'h3-hexes-layer',
                // opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mtyC',
            title: '',
            full: true, 
            image: '',
            description: 'El proceso de ocupación informal de la zona, aunado a la topografía con más de 40 grados de pendiente en las partes altas del cerro han condicionado la estructura y calidad de la red vial de la zona compuesta principalmente por calles, andadores, veredas y escalinatas. Esta red vial deficiente impide a los habitantes desplazarse al interior del polígono para acceder a servicios básicos de alimento, escuela y salud, y también hacia otros puntos de la ciudad donde se amplían las opciones de trabajo.<br><br>En promedio los habitantes dedican 72 minutos para subir y bajar de los cerros, y los costos de la canasta básica es hasta 32% más costoso en comparación con el otras partes de la ciudad.',
            location: {
                center: [-100.3784997,  25.6989061],
                zoom: 15,
                pitch: 50,
                bearing: 0.00
            },
            onChapterEnter: [                
                // {
                // layer: 'h3-hexes-layer',
                // opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mtyD',
            title: '',
            full: false, 
            image: '',
            description: 'El 85 % de los viajes en la zona son a pie, y de estos el 40% se realizan a la escuela, por lo que la calidad de calles y escalinatas es necesaria para mejorar la accesibilidad de la población a servicios básicos.',
            location: {
                center: [-100.3784997,  25.6989061],
                // center: [-103.4629855,  20.7200189],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [                
                // {
                // layer: 'h3-hexes-layer',
                // opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'gdlA',
            title: '​Zona Real, Zapopan.',
            full: false, 
            image: '',
            description: 'El área de enfoque, ubicada al poniente de la ciudad y a una distancia aproximada de 10 km del centro metropolitano es producto de etapas diversas de urbanización y ofertas diversificadas. Presenta una traza urbana discontinua y heterogénea en las que se puede encontrar tanto vivienda popular, vivienda social, como fraccionamientos cerrados de alta plusvalía. Se ubican en la zona exterior del Anillo Periférico y solo cuentan con una arteria vial sin las características de diseño para absorber el desarrollo de la zona.',
            location: {
                center: [-103.3943851,  20.7213538],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 5,
                curve: 1,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
                ,
                {
                    layer: 'points',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'gdlB',
            title: '​',
            full: false, 
            image: '',
            description: 'En el área de estudio conviven la ​vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda privada en baja densidad y zonas comerciales y de servicios. El uso predominante en las zonas populares es el habitacional de alta densidad con usos de suelo mixto en las calles principales. Mientras que el equipamiento de escala central ocupa la mayor extensión de suelo como el hospital, teatro, un museo para niños y centros comerciales. La zona no cuenta con ningún espacio público y las áreas verdes son de carácter privado.<br><br>Zona Real<br>Municipio: Zapopan, Jalisco<br>Colonias: Los Girasoles, Jardines de Santa Margarita, La Tuzania Eijdal, Santa Margarita Poniente, La Mora, as Bóvedas, Puerta del Valle, Tramo de Valle Real<br>Extensión: 243 hectáreas<br>Población: 30, 253 habitantes<br>Densidad bruta: 124.49 habitantes / hectárea',
            location: {
                center: [-103.3943851,  20.7213538],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 5,
                curve: 0.8,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
                ,
                {
                    layer: 'points',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'gdlC',
            title: '​',
            full: true, 
            image: '',
            description: 'La zona es producto de un crecimiento discontinuo, sin la infraestructura correspondiente y con iniciativas inmobiliarias desarticuladas que obedecen a lógicas muy distintas, además de contar con equipamientos de gran escala de tipo cultural, salud, administrativo y educativo, como el campus del Tec de Monterrey a 3 kilómetros al poniente. ​Los diferentes fragmentos funcionales, socioeconómicos y morfológicos no permiten la continuidad de la traza vial saturando las tres avenidas que estructuran la zona. L​ a zona se compone de tres distintas formas urbanas que producen una red de calles discontinua:<br><br>1. Manzanas rectangulares de 1 hectárea, con una red de calles continua y parcelas de aproximadamente 120m2. Con una densidad de 335 habitantes/ha<br>2. Macromanzanas de 19 hectáreas, subdivididas por andadores peatonales y calles locales, con parcelas de 100m2 o bloques de vivienda de 4 niveles y con una densidad de 300 habitantes/ha<br>3. Fraccionamientos cerrados de tamaño medio con un solo acceso controlado de 8-15 hectáreas aproximadamente y tamaño de parcela entre 250-300m2 con una densidad de 85 habitantes/ha<br>4. Macro lotes con alta capacidad de estacionamientos para equipamiento y zonas comerciales.',
            location: {
                center: [-103.3943851,  20.7213538],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 5,
                curve: 0.8,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
                ,
                {
                    layer: 'points',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'gdlD',
            title: '​',
            full: false, 
            image: '',
            description: '​Las zonas de mayor densidad poblacional y con una red de calles abierta son las zonas con niveles de marginación medio pero con mayor accesibilidad a satisfactores de escala barrial como tiendas de alimentos y farmacias.<br><br>En los sectores residenciales de baja densidad y en estructura cerrada con un solo acceso vehícular la accesibilidad a satisfactores implica distancias superiores a 1km como son tiendas de alimentos y farmacias.',
            location: {
                center: [-103.3943851,  20.7213538],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 5,
                curve: 0.8,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                {
                    layer: 'h3-hexes-layer',
                    opacity: 1
                }
                ,
                {
                    layer: 'points',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
    ]
};
