export default {
  global: {
    componenteFormativo: 'Innovación, creatividad y emprendimiento',
    descripcionCurso:
      'El mundo experimenta cada vez más la complejidad que conllevan los cambios, los nuevos entornos provenientes de la tecnología, la normatividad, la competencia, y actúa conforme a su capacidad adaptativa para afrontarlos. Esta condición da la entrada a la innovación y a la creatividad, como punto de partida a la exploración de nuevos caminos para descubrir valiosas oportunidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto de innovación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La creatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Emprendimiento – Intra-emprendimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Administrando la innovación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto de innovación',
      referencia:
        'SolucionaEmpresarialTV. (2016).<em> Qué es el modelo Canvas</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SN0BL3S7bk0',
    },
    {
      tema: 'Concepto de innovación',
      referencia:
        'Design Thinking España- (2020).<i> Metodología Design Thinging. ¡Aprende a aplicar sus fases con ejemplos</i> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_ul3wfKss58',
    },
    {
      tema: 'La creatividad',
      referencia:
        'Design Thinking España- (2021).<i> Qué es el brainstorming y para qué sirve</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_4OlfGwxydA',
    },
    {
      tema: 'La creatividad',
      referencia:
        'Economía Naranja. (s.f.). ABC.<i> Economía Naranja.</i> (video). YouTube.',
      tipo: 'Página web',
      link: 'https://www.academia.edu/40009301/ABC_DE_LA_ECONOM%C3%8DA_NARANJA',
    },
  ],
  glosario: [
    {
      termino: 'Creatividad',
      significado:
        'puede entenderse como la fabricación de una idea o un concepto, un descubrimiento original que ocasiona la satisfacción del generador de una idea y de los usuarios, o beneficiarios, de su utilidad.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'es un método para la generación de ideas innovadoras que focaliza su eficacia en entender y solucionar las necesidades de los usuarios, clientes o consumidores.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'puede concebirse como ese impulso para materializar una idea a través del descubrimiento de oportunidades y de la implementación de modelos creativos e innovadores.',
    },
    {
      termino: 'Innovación',
      significado:
        'hace alusión a la llegada de algo nuevo, de algo que no existía, de modificación, y ha sido muy ligada al ámbito empresarial, concebida como un proceso estratégico.',
    },
    {
      termino: 'Investigación y Desarrollo (I+D)',
      significado:
        'es el proceso de investigación en conocimientos técnicos y científicos, con el objetivo de desarrollar nuevos productos, procesos o materiales a partir de tecnologías aplicadas.',
    },
    {
      termino: 'Lista verbal de verificación <em>(Scamper)</em>',
      significado:
        'confluencia de varias técnicas y sirve para mejorar productos o servicios a través del planteamiento de un listado de preguntas que incitan a pensar en nuevas alternativas.',
    },
    {
      termino: 'Lluvia de ideas <em>(Brainstorming)</em>',
      significado:
        'consiste en reunir un equipo (estratégico) de personas para que participen en la generación de ideas, luego del planteamiento claro de un propósito, situación o necesidad.',
    },
    {
      termino: 'Mapa mental',
      significado:
        'en esta técnica se ilustra o plasma el problema o reto en el centro, y de allí se desprenden los temas relacionados con la intención a solucionar, dando una estructura; de estos temas surgen imágenes o palabras clave que van buscando relación con el propósito origen.',
    },
    {
      termino: 'Mercado',
      significado:
        'es un conjunto de transacciones de procesos o intercambio de bienes o servicios entre individuos, que llegan a acuerdo entre el producto o servicio y el precio que se cobra por éste.',
    },
    {
      termino: 'Oferta',
      significado:
        'son aquellos bienes y servicios que los oferentes (empresas-organizaciones) están dispuestos a poner a la venta en el mercado a unos precios específicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cortés Sánchez, J. M. (2017).<em> Sistema de gestión de calidad: ISO 9001:2015.</em> Ediciones de la U, Bogotá. ',
    },
    {
      referencia:
        'De Pablo, F. y Lasa, M. (2017). <em>Dibújalo: Innova, crea y comunica de manera visual.</em> Editorial LID.',
    },
    {
      referencia:
        'Galván, L. (2017). <em>Creatividad para el cambio: innovación para la vida y la empresa.</em> Ecoe Ediciones, Bogotá. ',
    },
    {
      referencia:
        'Lussier, R. N. y Achuan, C. F. (2016). <em>Liderazgo: teoría, aplicación y desarrollo de habilidades.</em> Cengage Learning.',
    },
    {
      referencia:
        'Moote, I. (2014). <em>DESIGN THINKING: para la innovación estratégica.</em> Empresa activa.',
    },
    {
      referencia:
        'Parra Alviz, M., López Posada, L. M. & Rubio Guerrero, G. (2017). <em>Emprendimiento y creatividad: aspectos esenciales para crear empresa.</em> Ecoe Ediciones, Bogotá.',
    },
    {
      referencia:
        'Riveros Tovar, P. (2019).<em> Coolhunting, tendencias e innovación: a la cacería del futuro.</em> Ediciones de la U, Bogotá. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
