let config = {
    // fillOpacity: 1,
    fillOpacity: 0.50,
    // colorScale: ['#4990A6', '#EBC255', '#BDC066','#E4904A', '#CA3B2E'],
    colorScale: ['#FAE300', '#FD7900', '#CF1750','#7A0DA6', '#2C51BE'],
    // colorScale: ['#00FDFB', '#F6FA00', '#FED300','#FEA700', '#FF0200'],
    
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
            shortInfo: '',
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
            shortInfo: '',
            location: {
                center: [-103.3928603,  20.720328],
                // center: [-103.393551,  20.7213038],
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
                {
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                },
                {
                    // layer: 'points',
                    // opacity: 1
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
            shortInfo: '',
            location: {
                // center: [-103.3963082, 20.7182341],
                center: [-103.3943082, 20.7182341],
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
            shortInfo: '',
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
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
            shortInfo: '',
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
            description: 'El polígono Campana-Altamira es una zona de grandes contrastes, a pesar de su ubicación central en la ciudad y cercanía a vialidades principales y la zona comercial de Valle Oriente, sus pobladores viven con grandes carencias en el acceso a servicios básicos y con mala calidad de vida.<br/><br/>La topografía es una de las condiciones más relevantes en la zona, ya que configura la estructura urbana, haciendo difícil y costosa la provisión de servicios básicos, generando un sistema discontinuo de calles y aumentando las posibilidades de riesgo por deslaves, inundaciones y fuertes escorrentías durante la temporada de lluvias.',
            // description: 'El polígono Campana-Altamira es una zona de grandes contrastes, a pesar de su ubicación central en la ciudad y cercanía a vialidades principales y la zona comercial de Valle Oriente, sus pobladores viven con grandes carencias en el acceso a servicios básicos y calidad de vida.<br><br>La topografía es una de las condiciones más relevantes en la zona, ya que configura la estructura urbana, haciendo difícil y costosa la provisión de servicios básicos, generando un sistema discontinuo de calles y aumentando las posibilidades de riesgo por deslaves, inundaciones y fuertes escorrentías durante la temporada de lluvias.',
            shortInfo: '',
            location: {
                // center: [-100.3784997,  25.6989061],
                center: [-100.3060218384377, 25.63671823966798],
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
            // description: 'La zona comenzó a urbanizarse con asentamientos informales durante la década de 1960 con migrantes originarios de zonas rurales del estado de Nuevo León y de otras partes del país, que llegaron en busca de oportunidades de empleo principalmente en la construcción y la industria.<br><br>El uso de suelo en la parte de los lomeríos es predominantemente habitacional, con viviendas construidas progresivamente por los habitantes. El 33% de las viviendas en la zona presentan irregularidades en la tenencia de propiedad.<br><br>En las partes bajas del polígono, se encuentran las calles que conectan la zona con avenidas principales de la ciudad, y en ellas se da la mayor concentración de comercios, servicios y equipamientos educativos y de salud. Esto provoca que las personas que viven en los cerros tengan que desplazarse hasta las partes bajas para acceder a estos servicios.',
            description: 'La zona comenzó a urbanizarse con asentamientos informales durante la década de 1960 con migrantes originarios de zonas rurales del estado de Nuevo León y de otras partes del país, quienes llegaron en busca de oportunidades de empleo principalmente en la construcción y la industria.<br/><br/>El uso de suelo en la parte de los lomeríos es predominantemente habitacional, con viviendas construidas progresivamente por los habitantes. El 33% de las viviendas en la zona presentan irregularidades en la tenencia de propiedad.<br/><br/>En las partes bajas del polígono, se encuentran las calles que conectan la zona con avenidas principales de la ciudad, y en ellas se da la mayor concentración de comercios, servicios y equipamientos educativos y de salud. Esto provoca que las personas que viven en los cerros tengan que desplazarse hasta las partes bajas para acceder a estos servicios.',
            shortInfo: ['Polígono Campana-Altamira','Municipio: Monterrey, Nuevo León','Extensión: 170 hectáreas ','Población: 19,543 habitantes','Densidad bruta: 114.95 habitantes / hectárea'],
            location: {
                center: [-100.3060218384377, 25.63671823966798],
                zoom: 14,
                pitch: 0,
                // pitch: 50,
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
            // description: 'El proceso de ocupación informal de la zona, aunado a la topografía con más de 40 grados de pendiente en las partes altas del cerro, han condicionado la estructura y calidad de la red vial de la zona, compuesta principalmente por calles, andadores, veredas y escalinatas. Esta red vial deficiente impide a los habitantes desplazarse al interior de la zona para acceder a servicios básicos de alimento, escuela y salud, y también hacia otros puntos de la ciudad donde se amplían las opciones de empleo.<br><br>De acuerdo al Plan Integral para el Desarrollo del Polígono Campana-Altamira, debido a la ausencia de servicios y comercios básicos de alimentación, los costos de la canasta básica son hasta 32% más elevados, en comparación con otras partes de la ciudad. En un contexto de pobreza y vulnerabilidad social, estos precios ponen una situación de mayor precariedad económica a los habitantes.',
            description: 'El proceso de ocupación informal de la zona, aunado a la topografía con más de 40 grados de pendiente en las partes altas del cerro, han condicionado la estructura y calidad de la red vial de la zona, compuesta principalmente por calles, andadores, veredas y escalinatas. Esta red vial deficiente impide a los habitantes desplazarse al interior de la zona para acceder a servicios básicos de alimento, escuela y salud, y también hacia otros puntos de la ciudad donde se amplían las opciones de empleo.<br/><br/>De acuerdo al Plan Integral para el Desarrollo del Polígono Campana-Altamira, debido a la ausencia de servicios y comercios básicos de alimentación, los costos de la canasta básica son hasta 32% más elevados, en comparación con otras partes de la ciudad. En un contexto de pobreza y vulnerabilidad social, estos precios ponen una situación de mayor precariedad económica a los habitantes.',
            shortInfo: '',
            location: {
                center: [-100.3060218384377, 25.63671823966798],
                zoom: 15,
                pitch: 0,
                // pitch: 50,
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
            // description: 'El 85 % de los viajes en la zona son a pie, y de estos el 40% se realizan a la escuela, por lo que la calidad de calles y escalinatas es necesaria para mejorar la accesibilidad de la población a servicios básicos.<br><br>A pesar de contar con la presencia de comercios de abarrotes o farmacia en un radio de 500 metros caminando, en comparación con los habitantes de las zonas planas, los habitantes del Cerro de la Campana requieren hasta 70 minutos para realizar un viaje completo (subir y bajar).',
            description: 'A pesar de contar con la presencia de comercios de abarrotes o farmacia en un radio de 500 metros caminando, en comparación con los habitantes de las zonas planas, los habitantes del Cerro de la Campana requieren hasta 70 minutos para realizar un viaje completo (subir y bajar).',
            shortInfo: ['Consejo Interinstitucional Campana-Altamira. (2016).','Plan Integral para el Desarrollo del Polígono Campana-Altamira. Monterrey, N.L.'],
            // shortInfo: ['Referencias:','Consejo Interinstitucional Campana-Altamira. (2016).','Plan Integral para el Desarrollo del Polígono Campana-Altamira. Monterrey, N.L.'],
            location: {
                center: [-100.3060218384377, 25.63671823966798],
                // center: [-103.4629855,  20.7200189],
                zoom: 14,
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
            title: '​Zona Real, Zapopan',
            full: false, 
            image: '',
            description: 'La Zona Real se ubica al poniente de la ciudad de Guadalajara y es producto de diversas etapas de urbanización y ofertas diversificadas. Con una traza urbana discontinua y heterogénea, se puede encontrar tanto vivienda popular y vivienda social, como fraccionamientos cerrados de alta plusvalía. Se ubican al exterior del Anillo Periférico y solo cuentan con acceso vial por Av. Servidor Público sin las características de diseño ni la capacidad de carga para absorber el intenso desarrollo de la zona.',
            // description: 'La Zona Real se ubica al poniente de la ciudad de Guadalajara y es producto de diversas etapas de urbanización y ofertas diversificadas. Con una traza urbana discontinua y heterogénea, se puede encontrar tanto vivienda popular y vivienda social, como fraccionamientos cerrados de alta plusvalía. Se ubican al exterior del Anillo Periférico y solo cuentan con acceso vial por Av. Servidor Público sin las características de diseño ni la capacidad de carga para absorber el intenso desarrollo de la zona.',
            shortInfo: '',
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
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
            // description: 'En esta zona se encuentra vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda de alta plusvalía  en baja densidad junto con zonas comerciales y de servicios.En las zonas populares predomina el uso habitacional, con alta densidad, junto con comercios sobre las vialidades principales. Mientras que el equipamiento de escala central, como un hospital privado, un centro cultural, un museo para niños y centros comerciales, ocupa la mayor extensión de suelo. Es importante destacar que la zona no cuenta con ningún espacio público y las áreas verdes existentes son de dominio privado.',
            description: 'En esta zona se encuentra vivienda popular de la década de 1970, vivienda social en formato de macromanzana de la década de 1980, y un desarrollo de reciente urbanización que aglomera varios conjuntos cerrados de vivienda de alta plusvalía  en baja densidad junto con zonas comerciales y de servicios.En las zonas populares predomina el uso habitacional, con alta densidad, junto con comercios sobre las vialidades principales. Mientras que el equipamiento de escala central, como un hospital privado, un centro cultural, un museo para niños y centros comerciales, ocupa la mayor extensión de suelo. Es importante destacar que la zona no cuenta con ningún espacio público y las áreas verdes existentes son de dominio privado.',
            shortInfo: ['Zona Real','Municipio: Zapopan, Jalisco','Extensión: 243 hectáreas ','Población: 30,253 habitantes','Densidad bruta: 124.49 habitantes / hectárea'],
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'gdlC',
            title: 'Las tres distintas formas urbanas identificadas son:',
            full: true, 
            image: ['​imgs/poligonos-gdl_01.png', 'imgs/poligonos-gdl_02.png', 'imgs/poligonos-gdl_03.png', 'imgs/poligonos-gdl_04.png'],
            // description: 'La zona es producto de un crecimiento discontinuo a partir de iniciativas inmobiliarias desarticuladas que obedecen a lógicas muy distintas. Además se ubican enclaves funcionales de gran escala de tipo cultural, salud, administrativo y educativo, como el campus del Tec de Monterrey ubicado a 3 kilómetros al poniente. Los diferentes fragmentos funcionales, socioeconómicos y morfológicos no permiten la continuidad de la traza vial saturando las únicas tres avenidas que estructuran la zona.',
            description: 'La zona es producto de un crecimiento discontinuo a partir de iniciativas inmobiliarias desarticuladas que obedecen a lógicas muy distintas. Además se ubican enclaves funcionales de gran escala de tipo cultural, salud, administrativo y educativo, como el campus del Tec de Monterrey ubicado a 3 kilómetros al poniente. Los diferentes fragmentos funcionales, socioeconómicos y morfológicos no permiten la continuidad de la traza vial saturando las únicas tres avenidas que estructuran la zona. ',
            shortInfo: ['Manzanas rectangulares de 1 hectárea, con una red de calles continua y parcelas de aproximadamente 120m2. Con una densidad de 335 habitantes/ha','Macromanzanas de 19 hectáreas, subdivididas por andadores peatonales y calles locales, con parcelas de 100m2 o bloques de vivienda de 4 niveles y con una densidad de 300 habitantes/ha','Fraccionamientos cerrados de tamaño medio con un solo acceso controlado de 8-15 hectáreas aproximadamente y tamaño de parcela entre 250-300m2 con una densidad de 85 habitantes/ha','Macro lotes con alta capacidad de estacionamientos para equipamiento y zonas comerciales.'],
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
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
            // description: 'Las zonas de mayor densidad poblacional y con una red de calles abierta son las zonas con niveles de marginación medio pero con mayor accesibilidad a tiendas de alimentos y farmacias. Una persona que vive en el fraccionamiento popular de la Tuzania Ejidal cuenta con una tienda de conveniencia a 4 minutos caminando por calles locales.<br><br>En los sectores residenciales de baja densidad y en estructura cerrada con un solo acceso vehícular,  la accesibilidad a satisfactores implica caminar distancias superiores a 1km para llegar a tiendas de alimentos y farmacias. Los residentes de Puerta Real, caminan durante 25 minutos a la tienda más cercana.',
            description: ' Las zonas de mayor densidad poblacional y con una red de calles abierta son las zonas con niveles de marginación medio pero con mayor accesibilidad a tiendas de alimentos y farmacias. Una persona que vive en el fraccionamiento popular de la Tuzania Ejidal cuenta con una tienda de conveniencia a 4 minutos caminando por calles locales.<br/><br/>En los sectores residenciales de baja densidad y en estructura cerrada con un solo acceso vehícular,  la accesibilidad a satisfactores implica caminar distancias superiores a 1km para llegar a tiendas de alimentos y farmacias. Los residentes de Puerta Real, caminan durante 25 minutos a la tienda más cercana, por lo que generalmente no caminan, y al depender del vehículo propio se generan consecuencias adversas vinculadas a la movilidad motorizada.',
            shortInfo: '',
            location: {
                // center: [-103.44416667,  20.72305556],
                // center: [-103.41316667,  20.72305556],
                // center: [-103.41366667,  20.72305556],
                // center: [-103.41366667,  20.72305556],
                center: [-103.41566667,  20.72305556],
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'qroA',
            title: '​Periferias de la ciudad de Querétaro',
            full: false, 
            image: '',
            // description: 'El crecimiento que la ciudad de Querétaro tuvo a finales del siglo XX se debió en gran medida a la llegada de nuevas industrias, impulsando el desarrollo socioeconómico y crecimiento urbano de la ciudad hasta el punto de conformarse como una Zona Metropolitana.',
            description: 'Las colonias residenciales que surgieron a partir del desarrollo industrial, como Lomas de Satélite, una colonia de vivienda popular subsidiada por organismos productores de vivienda y así como Jurica, una zona residencial-campestre con grandes parcelas<br/><br/>Así mismo, se encuentran los grandes macrolotes con uso de suelo industrial, que limitan la conexión de Jurica con el resto de las colonias que la rodean, por lo cual la convivencia entre los habitantes de ambas colonias es nula.<br/><br/>Jurica es un desarrollo en su mayoría habitacional con una densidad baja. En contraste, Lomas de Satélite, es una colonia popular desarrollada a mitad de los 70’s que cuenta con una mayor densidad de habitantes, mayor mezcla de usos y presencia de servicios en las calles principales.',
            shortInfo: '',
            location: {
                // center: [-100.3942692,  20.5898449],
                // center: [-100.4445,  20.645611],
                center: [-100.4442188,  20.6431689],
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
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
            // description: 'Jurica es un desarrollo en su mayoría habitacional con una densidad baja. En contraste, Lomas de Satélite, es una colonia popular desarrollada a mitad de los 70’s que cuenta con una mayor densidad de habitantes, mayor mezcla de usos y presencia de servicios en las calles principales.',
            description: '',
            // shortInfo: ['Jurica (Colonia completa)','Colonia residencial/campestre','Municipio: Querétaro, Querétaro','Extensión: 278 ha','Población: 5,300 habitantes','Densidad bruta: 19.06 habitantes / hectárea','','Lomas de Satélite (Colonia completa)','Colonia popular','Municipio: Querétaro, Querétaro','Extensión: 13 ha','Población:  642 habitantes','Densidad bruta: 49.38 habitantes / hectárea'],
            shortInfo: ['Jurica','Municipio: Querétaro, Querétaro','Extensión: 278 ha','Población: 5,300 habitantes','Densidad bruta: 19.06 habitantes / hectárea'],
            // shortInfoB: ['Lomas de Satélite (Colonia completa)','Colonia popular','Municipio: Querétaro, Querétaro','Extensión: 13 ha','Población:  642 habitantes','Densidad bruta: 49.38 habitantes / hectárea'],
            shortInfoB: ['Lomas de Satélite', 'Municipio: Querétaro, Querétaro','Extensión: 13 ha','Población: 642 habitantes','Densidad bruta: 49.38 habitantes / hectárea'],
            location: {
                // center: [-100.4445,  20.645611],
                center: [-100.4442188,  20.6431689],            
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
                    // layer: 'h3-hexes-layer',
                    // opacity: 1
                }
                ,
                {
                    // layer: 'points',
                    // opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'qroC',
            title: 'Macrolotes con actividad industrial​',
            full: true, 
            image: ['imgs/poligonos-qro_01.png', 'imgs/poligonos-qro_02.png'],
            // description: 'Extensión promedio de manzanas: 9.80 ha',
            description: 'Macrolotes con actividad industrial:<br/>Extensión promedio de manzanas: 9.80 ha<br/><br/>Jurica:<br/>Extensión promedio de manzanas: 5.54 ha<br/><br/>Lomas de Satelite<br/>Extensión promedio de manzanas: 0.80 ha',
            shortInfo: '',
            // shortInfo: ['Macrolotes con actividad industrial','Extensión promedio de manzanas: 9.80 ha'],
            // shortInfoB: ['Jurica:','Extensión promedio de manzanas: 5.54 ha'],
            // shortInfoC: ['Lomas de Satelite','Extensión promedio de manzanas: 0.80 ha'],
            location: {
                // center: [-100.4445,  20.645611],
                center: [-100.4442188,  20.6431689],                
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
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'qroD',
            title: '',
            full: false, 
            image: '',
            // description: 'Un habitante que vive en Jurica, tiene que caminar en promedio durante 21 minutos para acceder a un supermercado, mientras que un habitante de Lomas de Satélite tiene acceso al mismo servicio a tan solo 6 minutos caminando.',
            description: 'Un habitante que vive en Jurica, tiene que caminar en promedio durante 21 minutos para acceder a un supermercado, mientras que un habitante de Lomas de Satélite tiene acceso al mismo servicio a tan solo 6 minutos caminando.',
            shortInfo: '',
            location: {
                // center: [-100.4445,  20.645611],
                center: [-100.4442188,  20.6431689],                
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
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'cdmxA',
            title: '​Distrito Tlalpan, Ciudad de México.',
            full: false, 
            image: '',
            // description: 'El  área se encuentra al sur de la ciudad en la alcaldía de Tlalpan y a los límites de la mancha urbana a 8 kilómetros de la zona de las pocas localidades rurales aún quedan al sur en Xochimilco. Esta zona se encuentra a menos de 5km de dos zonas catalogadas como Patrimonio de la Humanidad por parte de la UNESCO en la CDMX que son Ciudad Universitaria y el centro y zona de chinampas de Xochimilco. En la zona existe una alta mixticidad de usos de suelo desde habitacional, habitacional mixto, equipamiento, centro de barrio y espacio abierto. Por lo que existen importantes centros comerciales y educativos que brindan servicio a nivel regional y local.',
            description: 'El  área se encuentra al sur de la ciudad en la alcaldía de Tlalpan y a los límites de la mancha urbana a 8 kilómetros de la zona de las pocas localidades rurales aún quedan al sur en Xochimilco. Esta zona se encuentra a menos de 5km de dos zonas catalogadas como Patrimonio de la Humanidad por parte de la UNESCO en la CDMX que son Ciudad Universitaria y el centro y zona de chinampas de Xochimilco. En la zona existe una alta mixticidad de usos de suelo desde habitacional, habitacional mixto, equipamiento, centro de barrio y espacio abierto. Por lo que existen importantes centros comerciales y educativos que brindan servicio a nivel regional y local.',
            shortInfo: '',
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
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
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
            // description: 'En el área de estudio existen 27 equipamientos educativos, desde nivel preescolar hasta universitario, tanto públicos como privados lo cual constituye una importante población jóven que se traslada a esta zona debido al impacto regional que tienen los equipamientos de educación media superior y superior. Sin embargo, la población de la zona tiene un nivel de escolaridad promedio correspondiente a 11.4 años y solamente el 51.22% de la población mayor de 18 años cuenta con educación pos-básica.<br><br>',
            description: 'Esta zona es parte del área urbana que se empezó a desarrollar en 1970 de la alcaldía Tlalpan. Actualmente la zona está consolidada, identificándose áreas con cierta especialización en servicios y comercios al concentrar, además de vivienda popular, de nivel medio y residencial, instalaciones de comercio y equipamiento educativo. Predomina el uso habitacional, especialmente de la vivienda unifamiliar, seguido del uso de equipamiento educativo y comercial de impacto regional. Por lo que en la zona existe una importante población flotante y de jóvenes que se traslada a esta zona a los equipamientos de educación media superior y superior.',
            shortInfo: ['Distrito Tlalpan','Municipio: Tlalpan, Cdmx','Extensión: 260 hectáreas ','Población: 26,544 habitantes','Densidad bruta: 102.09 habitantes / hectárea'],
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
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'cdmxC',
            title: '​',
            full: true, 
            image: ['imgs/poligonos-cdmx_01.png','imgs/poligonos-cdmx_02.png'],
            // description: 'En el área predomina la retícula ortogonal y la retícula ortogonal deformada, teniendo manzanas con superficies muy diversas debido a la falta de continuidad de las calles entre ellas, y por el contrario, las vialidades principales de comunicación de la zona son las que seccionan las diferentes trazas. La movilidad está condicionada por la característica anterior ya que de la superficie de la zona, el 74,07% corresponde al área de las manzanas y solo alrededor del 26% corresponde a vialidades.<br><br>Algunas de estas  vialidades se encuentran dentro de conjuntos habitacionales cerrados o de acceso controlado por los residentes. Por lo que, lo anterior limita aún más la comunicación entre los diferentes puntos de interés y vialidades de la zona. De igual forma, existen predios que ocupan manzanas completas que van de 3 a 21 hectáreas con uso de equipamiento o comercio que prolongan los trayectos tanto vehiculares como peatonales debido a que se tiene que rodear toda la manzana a la falta de vialidades que dividan la manzana y que afecta principalmente al peatón. La mayoría de estos predios se encuentran a un costado de Periférico.',
            description: 'En el área predomina la retícula ortogonal y la retícula ortogonal deformada, teniendo manzanas con superficies muy diversas debido a la falta de continuidad de las calles entre ellas, y por el contrario, las vialidades principales de comunicación de la zona son las que seccionan las diferentes trazas. La movilidad está condicionada por la característica anterior ya que de la superficie de la zona, el 74,07% corresponde al área de las manzanas y solo alrededor del 26% corresponde a vialidades.<br/><br/>Algunas de estas vialidades se encuentran dentro de conjuntos habitacionales cerrados o de acceso controlado por los residentes. Por lo que, lo anterior limita aún más la comunicación entre los diferentes puntos de interés y vialidades de la zona. De igual forma, existen predios que ocupan manzanas completas que van de 3 a 21 hectáreas con uso de equipamiento o comercio que prolongan los trayectos tanto vehiculares como peatonales debido a que se tiene que rodear toda la manzana a la falta de vialidades que dividan la manzana y que afecta principalmente al peatón. La mayoría de estos predios se encuentran a un costado de Periférico.',
            shortInfo: '',
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
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'cdmxD',
            title: '​',
            full: false, 
            image: '',
            description: 'Las zonas con menor accesibilidad ubicadas al sur del área y a un costado de Periférico se deben a las barreras físicas como son avenidas difíciles de cruzar, calles cerradas y equipamientos a lado uno del otro con perímetros cerrados a través de muros ciegos,  a pesar de la proximidad a avenidas principales Periférico, estaciones de tren ligero del mismo, así como de tener en la cercanía supermercados, farmacias y hospitales a no más de 1km en ningún caso pero cuyo trayectos pueden ir de 5 a 15min caminando.<br/><br/>Las zonas con mayor accesibilidad ubicadas al norte del área tienen esta condición por tener una traza urbana ortogonal con manzanas de 135m de largo, sin calles cerradas y cuya proximidad de menos de 300 metros  a supermercados, farmacias y hospitales facilita los trayectos hacia los mismos que toma menos de 5 min llegar alguno de ellos caminando.',
            // description: 'Narrativa de las condiciones de accesibilidad / Distancia a los satisfactores...',
            shortInfo: '',
            location: {
                center: [-99.14000000, 19.28916667],
                zoom: 6,
                pitch: 0,
                bearing: 0,
                speed: 0.75,
                curve: 0.8,
                easing: function (t) {
                    return t;
                }
            },
            onChapterEnter: [
                // {
                //     layer: 'h3-hexes-layer',
                //     opacity: 1
                // }
                // ,
                // {
                //     layer: 'points',
                //     opacity: 1
                // }
            ],
            onChapterExit: [

            ]
        }
    ]
};
