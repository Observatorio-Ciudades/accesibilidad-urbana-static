let config = {
    // fillOpacity: 1,
    fillOpacity: 0.3,
    // colorScale: ['#4990A6', '#EBC255', '#BDC066','#E4904A', '#CA3B2E'],
    colorScale: ['#00FDFB', '#F6FA00', '#FED300','#FEA700', '#FF0200'],
    
    // colorScale: ['#6FAFBF', '#EDD13B', '#D51D1D','#CA3A2D'],
    // colorScale: ['#6FAFBF', '#EDD13B', '#D51D1D'],
    // colorScale: ['#163780', '#84AA80', '#EDD058', '#CA3A2D'],
    areaThreshold: 1,
    // claros
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    // style: 'mapbox://styles/haxzie/ck0cctlg503xe1co6hmx1kunx',

    // áreas verdes
    // style: 'mapbox://styles/haxzie/ck0aovhaa389j1cpdls6va2f1',
    // style: 'mapbox://styles/haxzie/cjxg35uth252i1cmu2r0gomx7',

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
                zoom: 16.5,
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
            title: '',
            full: false, 
            image: '',
            description: '',
            location: {
                center: [-103.3928603,  20.720328],
                // center: [-103.393551,  20.7213038],
                zoom: 17.5,
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
                },
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
            title: '',
            full: false, 
            image: '',
            description: '',
            location: {
                center: [-103.3963082, 20.7182341],
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
                center: [-103.3964488,  20.7180531],
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
                center: [-103.3964488,  20.7180531],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 1,
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
                zoom: 14,
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
            image: ['imgs/poligonos-mty_01.png'],
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
                center: [-103.44416667,  20.72305556],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: 3,
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
            // description: 'En el área de estudio conviven la ​vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda privada en baja densidad y zonas comerciales y de servicios. El uso predominante en las zonas populares es el habitacional de alta densidad con usos de suelo mixto en las calles principales. Mientras que el equipamiento de escala central ocupa la mayor extensión de suelo como el hospital, teatro, un museo para niños y centros comerciales. La zona no cuenta con ningún espacio público y las áreas verdes son de carácter privado.<br><br>Zona Real<br>Municipio: Zapopan, Jalisco<br>Colonias: Los Girasoles, Jardines de Santa Margarita, La Tuzania Eijdal, Santa Margarita Poniente, La Mora, as Bóvedas, Puerta del Valle, Tramo de Valle Real<br>Extensión: 243 hectáreas<br>Población: 30, 253 habitantes<br>Densidad bruta: 124.49 habitantes / hectárea',
            description: 'En el área de estudio conviven la ​vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda privada en baja densidad y zonas comerciales y de servicios. El uso predominante en las zonas populares es el habitacional de alta densidad con usos de suelo mixto en las calles principales. Mientras que el equipamiento de escala central ocupa la mayor extensión de suelo como el hospital, teatro, un museo para niños y centros comerciales. La zona no cuenta con ningún espacio público y las áreas verdes son de carácter privado.',
            location: {
                center: [-103.44416667,  20.72305556],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            title: '',
            full: true, 
            image: ['​imgs/poligonos-gdl_01.png', 'imgs/poligonos-gdl_02.png', 'imgs/poligonos-gdl_03.png', 'imgs/poligonos-gdl_04.png'],
            description: 'La zona es producto de un crecimiento discontinuo, sin la infraestructura correspondiente y con iniciativas inmobiliarias desarticuladas que obedecen a lógicas muy distintas, además de contar con equipamientos de gran escala de tipo cultural, salud, administrativo y educativo, como el campus del Tec de Monterrey a 3 kilómetros al poniente. ​Los diferentes fragmentos funcionales, socioeconómicos y morfológicos no permiten la continuidad de la traza vial saturando las tres avenidas que estructuran la zona. L​ a zona se compone de tres distintas formas urbanas que producen una red de calles discontinua:<br><br>1. Manzanas rectangulares de 1 hectárea, con una red de calles continua y parcelas de aproximadamente 120m2. Con una densidad de 335 habitantes/ha<br>2. Macromanzanas de 19 hectáreas, subdivididas por andadores peatonales y calles locales, con parcelas de 100m2 o bloques de vivienda de 4 niveles y con una densidad de 300 habitantes/ha<br>3. Fraccionamientos cerrados de tamaño medio con un solo acceso controlado de 8-15 hectáreas aproximadamente y tamaño de parcela entre 250-300m2 con una densidad de 85 habitantes/ha<br>4. Macro lotes con alta capacidad de estacionamientos para equipamiento y zonas comerciales.',
            location: {
                center: [-103.44416667,  20.72305556],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
                center: [-103.44416667,  20.72305556],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'qroA',
            title: '​Primer cuadro de la ciudad de Querétaro, Qro.',
            full: false, 
            image: '',
            description: 'La Zona Metropolitana de Querétaro en los últimos años ha tenido un crecimiento habitacional exponencial hacia las periferias dotándolos de algunos servicios y equipamientos básicos, sin embargo la parte central de la ciudad ha trascendido como una zona concentrada, principalmente de comercios a baja escala y al mismo tiempo siendo un principal nodo de actividades y servicios a escala municipal y estatal. El efecto que trae consigo, es la pérdida de población y habitabilidad aumentando al mismo tiempo la terciarización de los inmuebles   haciendo incosteable vivir dentro de la zona del Centro Histórico por los altos costos de los inmuebles.',
            location: {
                // center: [-100.3942692,  20.5898449],
                center: [-100.4445,  20.645611],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: 3,
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
            id: 'qroB',
            title: '',
            full: false, 
            image: '',
            // description: 'En el área de estudio conviven la ​vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda privada en baja densidad y zonas comerciales y de servicios. El uso predominante en las zonas populares es el habitacional de alta densidad con usos de suelo mixto en las calles principales. Mientras que el equipamiento de escala central ocupa la mayor extensión de suelo como el hospital, teatro, un museo para niños y centros comerciales. La zona no cuenta con ningún espacio público y las áreas verdes son de carácter privado.<br><br>Zona Real<br>Municipio: Zapopan, Jalisco<br>Colonias: Los Girasoles, Jardines de Santa Margarita, La Tuzania Eijdal, Santa Margarita Poniente, La Mora, as Bóvedas, Puerta del Valle, Tramo de Valle Real<br>Extensión: 243 hectáreas<br>Población: 30, 253 habitantes<br>Densidad bruta: 124.49 habitantes / hectárea',
            description: 'El centro histórico es una colonia diversa, mixta, compacta y accesible a equipamientos y servicios. Es uno de los centros históricos declarados Patrimonio Cultural de la Humanidad por la UNESCO. En la zona existe mucha inversión pública, mejoramiento de la imagen y del mobiliario urbano, pavimentos, banquetas, etc... Sin embargo es una zona que está bajo el efecto de la terciarización del suelo perdiendo el número de habitantes y aumentando el número de viviendas deshabitadas al mismo tiempo que aumenta la existencia de comercios y servicios. Por otro lado, el Río Querétaro ha representado un borde entre la zona histórica de Querétaro y la zona del “otro lado del río”.',
            location: {
                center: [-100.4445,  20.645611],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'qroC',
            title: '​',
            full: true, 
            image: ['imgs/poligonos-qro_01.png', 'imgs/poligonos-qro_02.png'],
            description: 'En su mayor área, la zona histórica está caracterizada por una retícula rectangular, también se puede identificar una sección con una retícula de plato roto, en el área dónde vivían los pueblos indígenas. El centro histórico tiene una gran diversidad de calles, en su mayoría son angostas y algunas de ellas que han sido diseñadas dando preferencia al peatón, convirtiéndolas en andadores peatonales. \n El centro histórico de la ciudad está dotado de comercios y servicios,sirviendo a una población que no reside en esta zona, ya que el 26.82 % de los inmuebles del centro histórico no tienen ningún uso ni actividad, se encuentran en completo abandono.',
            location: {
                center: [-100.4445,  20.645611],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'qroD',
            title: '',
            full: false, 
            image: '',
            description: 'La mayor parte del Centro Histórico se encuentra a una distancia...',
            location: {
                center: [-100.4445,  20.645611],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'cdmxA',
            title: '​Distrito Tlalpan, Ciudad de México.',
            full: false, 
            image: '',
            description: 'La zona se encuentra a un costado del Anillo Periférico Sur entre Viaducto Tlalpan y Calzada Acoxpa. Es también un área que se encuentra a menos de 5km de dos zonas catalogadas como Patrimonio de la Humanidad por parte de la UNESCO en la CDMX que son Ciudad Universitaria y el centro y zona de chinampas de Xochimilco. En la zona existe una alta mixticidad de usos de suelo desde habitacional, habitacional mixto, equipamiento, centro de barrio y espacio abierto. Por lo que existen importantes centros comerciales y educativos que brindan servicio a nivel regional y local.',
            location: {
                center: [-99.14000000, 19.28916667],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: 3,
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
            id: 'cdmxB',
            title: '​',
            full: false, 
            image: '',
            // description: 'En el área de estudio conviven la ​vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda privada en baja densidad y zonas comerciales y de servicios. El uso predominante en las zonas populares es el habitacional de alta densidad con usos de suelo mixto en las calles principales. Mientras que el equipamiento de escala central ocupa la mayor extensión de suelo como el hospital, teatro, un museo para niños y centros comerciales. La zona no cuenta con ningún espacio público y las áreas verdes son de carácter privado.<br><br>Zona Real<br>Municipio: Zapopan, Jalisco<br>Colonias: Los Girasoles, Jardines de Santa Margarita, La Tuzania Eijdal, Santa Margarita Poniente, La Mora, as Bóvedas, Puerta del Valle, Tramo de Valle Real<br>Extensión: 243 hectáreas<br>Población: 30, 253 habitantes<br>Densidad bruta: 124.49 habitantes / hectárea',
            description: 'En el área de estudio existen 27 equipamientos educativos, desde nivel preescolar hasta universitario, tanto públicos como privados lo cual constituye una importante población jóven que se traslada a esta zona debido al impacto regional que tienen los equipamientos de educación media superior y superior. Sin embargo, la población de la zona tiene un nivel de escolaridad promedio correspondiente a 11.4 años y solamente el 51.22% de la población mayor de 18 años cuenta con educación pos-básica.\nEn la zona se concentran más de 650 unidades económicas de gran y pequeña escala, el 45.46% de su población es económicamente activa, la mayoría son hombres.',
            location: {
                center: [-99.14000000, 19.28916667],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'cdmxC',
            title: '​',
            full: true, 
            image: ['imgs/poligonos-cdmx_01.png','imgs/poligonos-cdmx_02.png'],
            description: 'En el área predomina la retícula ortogonal y la retícula ortogonal deformada, teniendo manzanas con superficies muy diversas debido a la falta de continuidad de las calles entre ellas, y por el contrario, las vialidades principales de comunicación de la zona son las que seccionan las diferentes trazas. La movilidad está condicionada por la característica anterior ya que de la superficie de la zona, el 74,07% corresponde al área de las manzanas y solo alrededor del 26% corresponde a vialidades.\nAlgunas de estas vialidades se encuentran dentro de conjuntos habitacionales cerrados o de acceso controlado por los residentes. Por lo que, lo anterior limita aún más la comunicación entre los diferentes puntos de interés y vialidades de la zona. De igual forma, existen predios que ocupan manzanas completas que van de 3 a 21 hectáreas con uso de equipamiento o comercio que prolongan los trayectos tanto vehiculares como peatonales debido a que se tiene que rodear toda la manzana a la falta de vialidades que dividan la manzana y que afecta principalmente al peatón. La mayoría de estos predios se encuentran a un costado de Periférico.',
            location: {
                center: [-99.14000000, 19.28916667],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
            id: 'cdmxD',
            title: '​',
            full: false, 
            image: '',
            description: 'Narrativa de las condiciones de accesibilidad / Distancia a los satisfactores...',
            location: {
                center: [-99.14000000, 19.28916667],
                zoom: 13,
                pitch: 0,
                bearing: 0,
                speed: 2,
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
        }
    ]
};
