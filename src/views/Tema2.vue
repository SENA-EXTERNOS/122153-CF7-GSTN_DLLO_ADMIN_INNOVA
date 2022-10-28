<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La creatividad

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='imagen relacionada')
      .col-md-7      
        p La <strong>creatividad</strong> puede entenderse como la fabricación de una idea o un concepto, un descubrimiento original que ocasiona la satisfacción del generador de una idea y de los usuarios, o beneficiarios, de su utilidad. Por lo mismo, se concibe como una de las habilidades más importantes del ser humano, porque es la que le permite crear nuevas cosas a partir de lo que ya es un hecho o existe en el mundo. Hablar de creatividad es hablar de exploración de nuevos caminos o nuevas alternativas, formas diferentes de hacer las cosas, pero siempre en la búsqueda del mejoramiento del producto, servicio o situación.
    
    p.mb-4 La creatividad tiene un proceso para su desarrollo; este proceso conlleva unos pasos que permiten que un procedimiento creativo tenga mayores posibilidades de llegar al éxito. Estas etapas son:

    .mx-auto.col-md-10.mb-5
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img16.svg', alt='diagrama de ejemplo')

              .tarjeta.color-fondo-terciario.p-4(x="31%" y="31%" numero="1" style='border-radius: 10px; width: 400px')
                p.mb-0.text-center En esta etapa se realiza el cuestionamiento sobre la necesidad, el entorno y el estado del arte del campo que se quiera impactar con la idea.
              
              .tarjeta.color-fondo-terciario.p-4(x="37%" y="12%" numero="2" style='border-radius: 10px; width: 400px')
                p.mb-0.text-center Se conceptualiza la idea y se estructura de manera más aterrizada.
               
              .tarjeta.color-fondo-terciario.p-4(x="74%" y="34%" numero="3" style='border-radius: 10px; width: 400px')
                p.mb-0 Esta etapa pone a prueba la idea, demostrando su usabilidad o aplicación con base en el análisis de la fase de cuestionamiento y preparación
              
              .tarjeta.color-fondo-terciario.p-4(x="76%" y="63%" numero="4" style='border-radius: 10px; width: 400px')
                p.mb-0 Se lanza el producto, adaptación, servicio o mejora para su uso y difusión.
   
    p Para el cumplimiento de estas etapas la creatividad debe tener varios elementos en cuenta.
    
    p.mb-4 Y en este proceso confluyen aspectos como:

    .row.justify-content-center.mb-4
      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img17.png', alt='imagen relacionada')  
      .col-md-8 
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Originalidad")
              .row
                .col-md-12.p-4.color-fondo
                  p Hace referencia a la producción o generación de ideas únicas o poco usuales que representan novedad. 
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Flexibilidad")
              .row
                .col-md-12.p-4.color-fondo
                  p Es la habilidad para producir una cantidad significativa de ideas desde diferentes perspectivas o puntos de vista.  
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Fluidez")
              .row
                .col-md-12.p-4.color-fondo
                  p Es la capacidad o habilidad para producir ideas que cumplan con los requisitos en un tiempo limitado.
              
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Relevancia")
              .row
                .col-md-12.p-4.color-fondo
                  p Es el elemento asociado con el detalle y la profundidad; significa investigar y expandir una idea dando la explicación enriquecida de su existencia y caracterizándola de forma más completa que la original.  
    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mt-4 
      |  Técnicas
   
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-primario.color-fondo.p-4.mb-4
          p.mb-0 Es así como la aplicación de procesos creativos, además de cumplir con elementos y tener unas etapas, tiene unas metodologías o técnicas para llegar al resultado esperado.    
    
    p.mb-4 Se pueden emplear diversas técnicas, algunas de ellas son: 
    
    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Lluvia de ideas (<i>Brainstorming</i>)")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es una de las técnicas más reconocidas y utilizadas en materia de procesos creativos, consiste en reunir un equipo (estratégico) de personas para que participen en la generación de ideas, luego del planteamiento claro de un propósito, situación o necesidad. Se debe igualmente asegurar un ambiente apto para la creatividad y finalmente, una vez evaluadas las ideas y sus derivaciones, dar retroalimentación a los participantes.
          .col-md-6
            figure
              img(data-aos="zoom-out-up" src='@/assets/curso/temas/texto_destacado/img18.svg', alt='imagen representativa')
      
          
      .py-3.py-md-4(titulo="Lista verbal de verificación (<i>Scamper</i>)")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Esta técnica resulta ser la confluencia de varias técnicas y sirve para mejorar productos o servicios a través del planteamiento de un listado de preguntas que incitan a pensar en nuevas alternativas: sustituir, adaptar, combinar, modificar, otros usos, eliminar o reordenar.
          .col-md-6
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img19.svg', alt='imagen representativa')

      .py-3.py-md-4(titulo="Estimulación de imágenes")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Una técnica utilizada para generar nuevas ideas, donde el equipo de personas seleccionado observa una serie de imágenes y lo relacionan con la información del problema o la situación a resolver.
          .col-md-6
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img20.svg', alt='imagen representativa')
  
      .py-3.py-md-4(titulo="Mapa mental")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es una técnica gráfica e ilustrativa muy útil para la generación de nuevas ideas por asociación y para dar orden a la información. En esta técnica se ilustra o plasma el problema o reto en el centro, y de allí se desprenden los temas relacionados con la intención a solucionar, dando una estructura; de estos temas surgen imágenes o palabras clave que van buscando relación con el propósito origen.
          .col-md-6
            figure
              img(data-aos="zoom-out-left" src='@/assets/curso/temas/texto_destacado/img21.svg', alt='imagen representativa')

    .bloque-texto-a.color-primario.p-3.p-sm-4.p-md-4.mb-4
      .row.m-0
        .col-lg-5
          figure
            img(data-aos="zoom-out-left" src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen representativa')

        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Recuerde que todas las ideas y novedades que surgen a partir del proceso creativo o de innovación, tienen propósitos muy claros de solución o aporte en situaciones de necesidad o de proyección de mejoramiento de un producto, proceso o servicio. Ahora bien, las aplicaciones de estas técnicas, tanto del proceso creativo como innovativo, tienen varios campos de acción; en nuestro caso están asociadas al impacto organizacional, entendiendo que es una alternativa para mejorar y hacer más eficiente y eficaz la empresa. 
    
    p.mb-4 Para dar claridad sobre el tema se presentan los ámbitos de desarrollo para la aplicación de estos conceptos:

    .row.justify-content-around.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up-right" src="@/assets/curso/temas/tarjetas/tarjeta1.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Proceso
            p.mb-0 Es un conjunto de tareas y procedimientos que se realizan en una empresa para la producción o elaboración de un bien o servicio, o para cumplir con una de las funciones de apoyo de la organización orientadas a su actividad principal. Ejemplo: proceso de elaboración de pan.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta2.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Producto
            p.mb-0 Es un bien material, cosa o elemento fabricado de manera natural o industrial para satisfacer una necesidad de consumo o utilidad. Ejemplo: celulares, champú, computadores, etc.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta3.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Servicio
            p.mb-0 Es la actividad mediante la cual se atiende un requerimiento o una necesidad. Es un bien intangible porque no está asociado a productos. Ejemplo: la salud, la educación, etc.    
    
    .row.justify-content-center.mb-4.mt-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img23.png', alt='imagen relacionada')
      .col-md-7      
        p Ahora, se denomina <strong>ecosistema de producto</strong> los casos en los cuales los productos o los servicios tienen relación entre sí, es decir, se encuentran interconectados de tal forma que se complementan unos a otros. Un ejemplo claro de ello es la tecnología celular, donde las diferentes marcas se han encargado de desarrollar productos complementarios para fidelizar el consumidor como relojes, audífonos, entre otros. De la misma manera se encuentra el <strong>ecosistema de servicios</strong> donde se desarrollan servicios para el consumidor, de manera que adquirir uno de ellos lo pueda llevar a una cadena consecutiva de otros.
    
    p.mb-4 Otra de las herramientas para llegar al logro de ese ecosistema o el desarrollo de productos, servicios o procesos innovadores, es la <strong>co-creación</strong>, donde confluyen experiencia, creatividad, propuestas e ideas de varias empresas que surgen a partir de alianzas estratégicas para este proceso.
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-primario.color-fondo.p-4.mb-4
          p.mb-0 La creatividad y la innovación pueden aplicarse en todos estos escenarios, de forma tal que permita el mejoramiento y la optimización de resultados a nivel de impacto en el mercado y con el consumidor, traduciéndose eso en mayores utilidades y mejores ventas.     
    
    .row.justify-content-center.mb-4.mt-4
      .col-md-7      
        p De acuerdo al contenido desarrollado en este componente formativo, se trae a colación un concepto que viene fortaleciéndose como parte de la industria creativa. Es la denominada <strong>economía naranja </strong>, conocida como el modelo de desarrollo en el que la creatividad y la diversidad cultural son pilares de transformación social y económica de Colombia como país y como región. Este modelo cuenta con elementos de desarrollo social, económico y cultural; está fundamentado en la creación, producción y distribución de bienes y servicios culturales y creativos, que pueden ser protegidos por los derechos de propiedad intelectual, es decir, cómo se convierten las ideas en dinero. En otras palabras, la economía naranja está basada en creaciones intelectuales de bienes y servicios establecidos en el talento de las personas y en el patrimonio cultural de la humanidad: el arte, el diseño, los videojuegos, las películas y la artesanía, generan un valor agregado en gran proporción por la generación de ideas creativas que intervienen para su desarrollo.
      .col-md-5
        figure.mw-sm-350px(style="margin-top: 40px;")
          img(src='@/assets/curso/temas/texto_destacado/img24.png', alt='imagen relacionada')

    p.mb-4 Existen dos grupos en los que podría clasificarse la economía naranja: 

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tarjetas/avatar1.png", alt="alt").img90.m-auto
            h4.text-center Industria cultural
            p.text-center.mb-0 Constituida por el arte, el entretenimiento, el diseño, la arquitectura, la publicidad e inclusive la gastronomía.
        .col-lg-5.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tarjetas/avatar2.png", alt="alt").img90.m-auto
            h4.text-center Economía del conocimiento
            p.text-center.mb-0 Conformada por la educación, la robótica, las telecomunicaciones, la investigación y el desarrollo, la tecnología, la nanotecnología y la industria aeroespacial.
    
    p.mb-4  Para ilustrar un poco mejor las actividades que se clasifican como economía naranja, se mencionan algunas que el Gobierno Colombiano determina.   
    
    p.mb-4 Artes y patrimonio:

    .row.justify-content-center.mb-4
      .col-md-8 
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Artes visuales")
              .row
                .col-md-12.p-4.color-fondo
                  p Pintura, escultura, fotografía, video arte y <i>performance</i>. 
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Artes escénicas")
              .row
                .col-md-12.p-4.color-fondo
                  p Conciertos, ópera, circo, orquestas, danza y teatro.  
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Turismo y <br> patrimonio <br> cultural")
              .row
                .col-md-12.p-4.color-fondo
                  p Museos, cocinas tradicionales, artesanías, parques naturales, bibliotecas, archivos, festivales y carnavales.
              
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Educación")
              .row
                .col-md-12.p-4.color-fondo
                  p Formación en oficios de las artes y el patrimonio, formación en prácticas artísticas, formación en gestión y emprendimiento cultural. 
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Gastronomía")
              .row
                .col-md-12.p-4.color-fondo
                  p Cocinas tradicionales y bebidas alcohólicas tradicionales. 
              
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Artesanías")
              .row
                .col-md-12.p-4.color-fondo
                  p Indígena, tradicional popular y contemporánea.
      
      .col-md-4.col-lg-4(style="margin-top: 80px; ")
        img(src='@/assets/curso/temas/texto_destacado/img25.png', alt='imagen relacionada')  

    p.mb-4 Industrias creativas, nuevos medios y <i>software</i> de contenidos:
    
    .row.justify-content-center.mb-4
      .col-md-4.col-lg-4(style="margin-top: 20px; ")
        img(src='@/assets/curso/temas/texto_destacado/img26.png', alt='imagen relacionada') 
      .col-md-8 
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Medios digitales")
              .row
                .col-md-12.p-4.color-fondo
                  p Videojuegos, contenidos interactivos audiovisuales, plataformas digitales, creación de <i>software</i>, creación de <i>apps</i> (código programación) y animación. Agencias de noticias y otros servicios de información.  
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Diseño")
              .row
                .col-md-12.p-4.color-fondo
                  p Interiores, artes gráficas e ilustración, joyería, juguetes, industrial (productos), arquitectura, moda y mobiliario.   
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Publicidad")
              .row
                .col-md-12.p-4.color-fondo
                  p Servicios de asesoría, productos creativos, producción de material publicitario, utilización de medios de difusión, creación y realización de campañas de publicidad, campañas de mercadeo y otros servicios publicitarios.
    
    p.mb-4 Industrias culturales: 

    .row.justify-content-center.mb-4
      .col-md-8 
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Editorial")
              .row
                .col-md-12.p-4.color-fondo
                  p Librerías, libros, periódicos, revistas y literatura.  
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Audiovisual")
              .row
                .col-md-12.p-4.color-fondo
                  p Cine, televisión, video y radio.   
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Fonografía")
              .row
                .col-md-12.p-4.color-fondo
                  p Música grabada. 
      .col-md-4.col-lg-4(style="margin-top: 20px; ")
        img(src='@/assets/curso/temas/texto_destacado/img27.png', alt='imagen relacionada')             
    
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(style="background-color: #E8E8E8")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0
          h2.mb-0 Es importante recordar que hablar del concepto economía naranja, es abordar una industria que ha venido ganando relevancia para el sector económico. Sus beneficios han estado enmarcados en: 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            ol.lista-ol
              li 
                span.fas.fa-check(style='color: #f85316')
                | Beneficios de carácter social y económico.
              li 
                span.fas.fa-check(style='color: #f85316')
                | Generación o creación de empleo.
              li 
                span.fas.fa-check(style='color: #f85316')
                | Reducción de la brecha social.
              li 
                span.fas.fa-check(style='color: #f85316')
                | Producción de bienes y servicios con alto componente innovativo.
              li 
                span.fas.fa-check(style='color: #f85316')
                | Diferenciación y competitividad en el mercado.

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4.mt-4
          p.mb-0 La importancia de la economía naranja radica en su intención y objetivo de propiciar las condiciones para la generación de empleo digno en el sector cultural. Además de apoyar la materialización de ideas nuevas, creativas y productos innovadores, el fortalecimiento de los saberes ancestrales, las prácticas del patrimonio cultural y la transferencia de conocimiento en materia de tradición. Este tipo de economía se ha convertido en el atenuante para que algunas personas hayan optado por renunciar a sus roles como empleados y se transformen en exploradores del mundo del emprendimiento como alternativa para hacer de sus ideas una realidad.     
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
