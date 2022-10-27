<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Emprendimiento – Intra-emprendimiento

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
      .bloque-texto-g__img(style="width: 470px ")(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img29.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p ¿Sabía que el término emprendimiento en sí mismo ha estado presente a lo largo de la historia? El propósito o impulso de emprender de algunas personas, ha sido el motor creador para las empresas exitosas que existen hoy en día. El emprendimiento es un tema  recurrente en materia de exploración de modelos e ideas de negocio, dado los modelos económicos que no ofrecen, en muchas ocasiones,  oportunidades viables. Por esto, el emprendimiento puede concebirse como ese impulso para materializar una idea a través del descubrimiento de oportunidades y de la implementación de modelos creativos e innovadores. En definitiva, podría ser de manera concreta una actividad nueva que realiza una persona (o un grupo de personas) para obtener ganancias económicas o sencillamente generar un impacto social.

    p.mb-4 El emprendimiento puede clasificarse en varios tipos:

    .row.justify-content-center.mb-4
      .col-md-3.col-lg-4(style="margin-top: 20px; ")
        img(src='@/assets/curso/temas/texto_destacado/img30.png', alt='imagen relacionada') 
      .col-md-8 
        TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Emprendimiento <br> social")
              .row
                .col-md-12.p-4.color-fondo
                  p Está orientado a la solución de una problemática social y del impacto positivo a una comunidad, incluso, sin intenciones de lucro económico.  
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Emprendimiento <br> cultural")
              .row
                .col-md-12.p-4.color-fondo
                  p Esta modalidad de emprendimiento está muy ligada a la explicación de economía naranja, donde se generan ideas de organizaciones o de empresas culturales, con el propósito de no dejar que se pierda el valor simbólico de los productos y costumbres de un país.   
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Emprendimiento <br> empresarial")
              .row
                .col-md-12.p-4.color-fondo
                  p Implica el desarrollo de un producto o negocio, con el fin de generar ingresos para cubrir gastos básicos. Este tipo de emprendimiento ha surgido a partir de crisis económicas que han llevado a las personas a idear propuestas creativas e innovadoras en el mercado. El ser emprendedor tiene sus ventajas en cuanto a la generación de empleos y a la independencia con la que se cuenta al ser su propio jefe.
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4
          p.mb-0 El emprendimiento ha surgido del análisis de diversas vertientes teóricas, de autores que han fijado su postura a partir de enfoques distintos, como el económico y el psicológico. Algunas de estas teorías son:     
    
    h3 Teorías según enfoque económico 
    
    .row.justify-content-around.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up-right" src="@/assets/curso/temas/tarjetas/tarjeta4.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Teoría del beneficio del empresario
            p.mb-0 Se considera el emprendedor como único factor productivo.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta4.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Teoría de los costes de transacción
            p.mb-0 Esta teoría busca solucionar cuál es la estructura de gobierno más conveniente para una empresa (venta de idea, redes, alianzas, creación de empresa).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta4.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Teoría del desarrollo económico de Schumpeter
            p.mb-0 Establece que el factor de desarrollo económico asociado a la creación de nuevas empresas depende del empresario. También defiende que el fenómeno tecnológico y la innovación tecnológica, son el impulso que mueve la producción de capital a través de la transformación.    
    
    h3.mb-4.mt-4 Teorías según enfoque psicológico

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up-right" src="@/assets/curso/temas/tarjetas/tarjeta5.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Teoría de los rasgos de personalidad
            p.mb-0 Esta teoría tiene dos supuestos elementales. El primero, determina que el empresario tiene un perfil psicológico distinto del resto de la población., y el segundo, que el empresario de éxito cuenta con un perfil psicológico distinto de los empresarios menos exitosos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta5.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-3 Teoría del empresario de Kirzner
            p.mb-0 Establece que el capitalismo es un proceso de descubrimiento, donde ni los productos, ni los recursos están dados. Así, los objetos resultado de una creación, no pueden atribuirse a los recursos, sino a la capacidad del emprendedor de estar alerta, que es justamente lo que lo hace diferente de los demás

    .row.justify-content-center.mb-4
      .col-md-4
        figure.mw-sm-350px(style="margin-top: 25px;")
          img(src='@/assets/curso/temas/texto_destacado/img31.png', alt='imagen relacionada')
      .col-md-8
        p.mb-4 Ahora bien, convertirse en un emprendedor implica, además de poner en marcha la idea o la creación, mantenerla en el mercado. Situación que en muchas ocasiones termina siendo más retadora que el mismo lanzamiento de la idea, porque los ambientes donde se reconoce la capacidad de hacer las cosas de manera especial y diferente para capturar la atención y el interés de los consumidores, son de mucha competitividad. Hablar de <strong>competitividad</strong> en el contexto del emprendimiento no dista mucho del contexto empresarial; una empresa se denomina competitiva cuando tiene la capacidad de hacer las cosas mejor que la competencia, bien sea en términos de producción, de empresa, de producto etc.       
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4
            p.mb-0  Los diversos escenarios de competencia con los que cuenta una empresa o un emprendimiento pueden estar focalizados en sus productos, en sus bienes, servicios, pero también en sus procesos. El hecho que dos empresas cuenten con el mismo producto, pero que lo comercialicen de manera diferente y uno resulte ser más exitoso que otro, puede ser uno de esos valores diferenciadores para ganar mercado, consumidores y por ende mayores ventas y utilidades. De este tema se ocupa el mercadeo o también el llamado <i>marketing</i>.  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
      .bloque-texto-g__img(style="width: 470px ")(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img32.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p <strong>¿Qué es el <i>marketing</i>?</strong> Es la actividad o conjunto de actividades, instrucciones y procesos para crear, entregar, comunicar y capturar la atención de los consumidores, clientes, socios y la sociedad en general. Aquí se logra que las personas se interesen en un producto o servicio de su empresa, y por esto quieran consumirlo, comprarlo o invertir en él. El marketing, para definir las estrategias de captación, realiza investigaciones de mercado, análisis y comprensión de los intereses de sus clientes potenciales.
   
    h3
      i#t_3_1.fas.fa-square.me-3.cuadrado.mt-4 
      |  Intra-emprendimiento
    
    .row.justify-content-center.mb-4.mt-4
      .col-md-7      
        p También existe una manera de aplicar el emprendimiento en empresas ya existentes y consolidadas, como lo es la alternativa de crear un nuevo negocio dentro de una organización, simultáneamente a la actividad que ya realiza: el desarrollo de un proyecto que mejora la eficiencia interna o que aumenta las ventas (utilidades), encontrar nuevas aplicaciones a un producto existente. Este impulso de nuevas ideas por parte de los trabajadores o integrantes de una empresa hace que se obtengan beneficios y valor agregado. Podemos concluir que esta es una iniciativa que surge al interior de la empresa con la intención de que luego se convierta en una organización independiente.<br> Si bien es una práctica útil y apropiada para innovar al interior de las organizaciones, es necesario propiciar y crear el ambiente para lograrlo.

      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img33.png', alt='imagen relacionada')

    p.mb-4 Por esto, a continuación, se presentarán los pasos para incentivar el intra-emprendimiento en una empresa:  
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-10.mb-4.mb-md-0(style="margin-top: 90px;")
              p Facilitar y promover la escucha activa de las ideas.
            .col-md-2.col-sm-7.mt-4
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')

          .row
            .col-md-2.col-sm-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa')
                
            .col-md-10(style="margin-top: 50px;")
              p Involucrar activamente a la alta dirección.
        
          .row
            .col-md-10.mb-4.mb-md-0(style="margin-top: 40px;")
              p Estructurar bien el proceso.
          
            .col-md-2.col-sm-7
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')

          .row
            .col-md-2.col-sm-7.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')

            .col-md-10(style="margin-top: 50px;")
              p Incorporar estrategias o mecanismos de incentivo. 
          
          .row
            .col-md-10.mb-4.mb-md-0(style="margin-top: 40px;")
              p Anticipar y asumir el fracaso anticipadamente.
          
            .col-md-2.col-sm-7
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder5.svg', alt='imagen ilustrativa')
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-11
        .cajon.color-primario.color-fondo.p-4.mb-4
          p.mb-0 Podemos concluir que el intra-emprendimiento es importante porque promueve la generación de valor agregado al interior de las empresas a través de la creatividad y la innovación.     
     
</template>

<script>
export default {
  name: 'Tema3',
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
