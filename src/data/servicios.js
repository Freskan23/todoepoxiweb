export const servicios = [
    {
        id: 'suelos',
        titulo: 'Suelos de Resina Epoxi',
        slug: 'suelos-epoxi',
        heroImage: '/images/servicios/suelos-hero.png',
        subtitulo: 'Pavimentos Continuos de Alto Rendimiento',
        descripcion: 'Nuestros suelos de resina epoxi representan la cumbre de la ingeniería de superficies. Diseñados para quienes buscan una estética impecable sin renunciar a la resistencia industrial, nuestros pavimentos ofrecen una superficie continua, sin juntas, totalmente impermeable y personalizable hasta el último detalle.',
        historia: 'Desde lofts minimalistas hasta centros logísticos de alta intensidad, hemos perfeccionado la técnica de aplicación para garantizar una adherencia molecular y un acabado que desafía el paso del tiempo.',
        especificaciones: [
            { label: 'Resistencia Térmica', value: 'Hasta 60°C constante / 80°C puntual' },
            { label: 'Espesor Típico', value: '2mm a 4mm según sistema' },
            { label: 'Dureza Shore D', value: '80-85 (Alta resistencia al impacto)' },
            { label: 'Suelo Radiante', value: '100% Compatible y eficiente' },
            { label: 'Certificación', value: 'Grado alimentario y antibacteriano' }
        ],
        proceso: [
            { paso: '01', titulo: 'Preparación Mecánica', desc: 'Lijado con diamante o granallado para abrir el poro y asegurar la unión química.' },
            { paso: '02', titulo: 'Imprimación Técnica', desc: 'Capa base que sella la superficie y evita burbujas de aire.' },
            { paso: '03', titulo: 'Capa de Diseño', desc: 'Aplicación artística de pigmentos metálicos o áridos seleccionados.' },
            { paso: '04', titulo: 'Sellado de Cuarzo', desc: 'Capa protectora de poliuretano de alta resistencia (Mate, Satinado o Brillo).' }
        ],
        items: [
            { titulo: 'Showroom Metálico Gold & Coal', image: '/images/portfolio/suelos-1.png', tag: 'Comercial' },
            { titulo: 'Residencial Terrazzo Modern', image: '/images/portfolio/suelos-2.png', tag: 'Villas' },
            { titulo: 'Garaje de Colección Titanium', image: '/images/garajes.png', tag: 'Premium Garage' },
            { titulo: 'Suelo Industrial de Alta Carga', image: '/images/industrial.png', tag: 'Industrial' }
        ]
    },
    {
        id: 'encimeras',
        titulo: 'Encimeras de Cocina y Baño',
        slug: 'encimeras-epoxi',
        heroImage: '/images/servicios/encimeras-hero.png',
        subtitulo: 'Superficies de Lujo con Porosidad Cero',
        descripcion: 'Redefina su cocina con superficies que imitan las piedras más preciosas del mundo con una resistencia técnica inalcanzable por los materiales naturales. Nuestras encimeras de resina se fabrican a medida, permitiendo vetas continuas que fluyen por los bordes y el salpicadero sin una sola unión visible.',
        historia: 'Es la solución predilecta para arquitectos que buscan el look del mármol Calacatta o el granito exótico pero requieren un material que no se manche, no sea poroso y sea totalmente higiénico.',
        especificaciones: [
            { label: 'Porosidad', value: '0% (Absolutamente impermeable)' },
            { label: 'Antibacterias', value: 'Superficie certificada para alimentos' },
            { label: 'Mantenimiento', value: 'Mínimo (Limpieza con agua y jabón neutro)' },
            { label: 'Resistencia UV', value: 'Protección total contra amarilleamiento' },
            { label: 'Vetas Personalizadas', value: 'Diseño artístico a mano alzada' }
        ],
        proceso: [
            { paso: '01', titulo: 'Plantillado', desc: 'Toma de medidas láser de los muebles de cocina.' },
            { paso: '02', titulo: 'Base Estructural', desc: 'Preparación del soporte de alta densidad.' },
            { paso: '03', titulo: 'Colado Artístico', desc: 'Creación de vetas y efectos de profundidad en resina líquida.' },
            { paso: '04', titulo: 'Pulido Ceramico', desc: 'Acabado final de alto brillo o seda mediante pulido progresivo.' }
        ],
        items: [
            { titulo: 'Isla de Cocina Marble Effect', image: '/images/servicios/encimeras-hero.png', tag: 'Luxury Kitchen' },
            { titulo: 'Encimera Obsidian Gloss', image: '/images/portfolio/encimeras-1.png', tag: 'Modern Design' },
            { titulo: 'Emerald Green & Gold', image: '/images/portfolio/encimeras-2.png', tag: 'Exotic Series' }
        ]
    },
    {
        id: 'mesas',
        titulo: 'Mesas de Diseño (River Tables)',
        slug: 'mesas-resina',
        heroImage: '/images/servicios/mesas-hero.png',
        subtitulo: 'Mobiliario de Autor y Maderas Nobles',
        descripcion: 'Cada mesa es una obra de arte irrepetible. Seleccionamos personalmente tablones de nogal español, olivo centenario o roble salvaje, respetando sus bordes naturales y fusionándolos con resinas de alta transparencia que parecen agua cristalina congelada.',
        historia: 'Nuestra pasión por la madera y la precisión química se unen para crear piezas que se convierten en el centro de atención de cualquier estancia. No fabricamos muebles, creamos herencias.',
        especificaciones: [
            { label: 'Madera', value: 'Nogal, Olivo, Roble (Secado controlado)' },
            { label: 'Resina', value: 'Epoxi de grado óptico (Crystal Clear)' },
            { label: 'Tratamiento UV', value: 'Estabilizadores HALS de última generación' },
            { label: 'Acabado Madera', value: 'Aceites naturales de grado alimentario' },
            { label: 'Patas', value: 'Acero artesanal o cristal templado' }
        ],
        proceso: [
            { paso: '01', titulo: 'Cata de Maderas', desc: 'El cliente elige el tablón específico para su proyecto.' },
            { paso: '02', titulo: 'Sellado de Bordes', desc: 'Tratamiento de la madera para evitar burbujas en el colado.' },
            { paso: '03', titulo: 'Colado Profundo', desc: 'Vertido de resina en capas de hasta 5cm de una sola vez.' },
            { paso: '04', titulo: 'Acepillado y Nivelado', desc: 'Calibrado de la pieza mediante fresadora CNC.' }
        ],
        items: [
            { titulo: 'Mesa de Comedor Walnut River', image: '/images/servicios/mesas-hero.png', tag: 'Fine Dining' },
            { titulo: 'Mesa Minimal Smoke Oak', image: '/images/portfolio/mesas-1.png', tag: 'Minimalist' },
            { titulo: 'Coffee Table Shou Sugi Ban', image: '/images/portfolio/mesas-2.png', tag: 'Artistic' }
        ]
    },
    {
        id: 'arte',
        titulo: 'Arte y Decoración en Resina',
        slug: 'arte-resina',
        heroImage: '/images/servicios/arte-hero.png',
        subtitulo: 'Profundidad, Luz y Textura Mineral',
        descripcion: 'El arte con resina epoxi permite capturar la luz y crear profundidades que ninguna otra técnica pictórica puede lograr. Desde murales inspirados en geodas naturales hasta cuadros que replican de forma hiperrealista el movimiento de las olas del mar, nuestras obras añaden una dimensión de lujo táctil a sus paredes.',
        historia: 'Trabajamos con pigmentos puros, cristales naturales y metales preciosos para crear piezas que cambian según la incidencia de la luz, ofreciendo una experiencia visual dinámica.',
        especificaciones: [
            { label: 'Dimensiones', value: 'Formatos personalizados hasta 3 metros' },
            { label: 'Materiales', value: 'Cuarzos, Pan de Oro, Pigmentos Metálicos' },
            { label: 'Capas', value: 'Efecto 3D mediante 3-5 capas superpuestas' },
            { label: 'Instalación', value: 'Sistemas de colgado de alta seguridad incluidos' },
            { label: 'Exclusividad', value: 'Certificado de autenticidad de pieza única' }
        ],
        proceso: [
            { paso: '01', titulo: 'Diseño Conceptual', desc: 'Paleta de colores y selección de texturas minerales.' },
            { paso: '02', titulo: 'Base de Escultura', desc: 'Modelado de relieves y formas base.' },
            { paso: '03', titulo: 'Multicapa de Resina', desc: 'Vertidos sucesivos para crear profundidad real.' },
            { paso: '04', titulo: 'Sellado de Vidrio', desc: 'Capa final autonivelante para un acabado espejo impecable.' }
        ],
        items: [
            { titulo: 'Geode Masterpiece Blue Gold', image: '/images/servicios/arte-hero.png', tag: 'Premium Art' },
            { titulo: 'Ocean Flow 3D Texture', image: '/images/portfolio/arte-1.png', tag: 'Coastal series' },
            { titulo: 'Liquid Metal Titanium Abstract', image: '/images/portfolio/arte-2.png', tag: 'Office Luxury' }
        ]
    }
];
