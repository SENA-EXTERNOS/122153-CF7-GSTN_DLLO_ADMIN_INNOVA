<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Administrando la innovación

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img34.png', alt='imagen relacionada')
      .col-md-7      
        p Es importante entender la innovación como un proceso que posibilita el mejoramiento de una empresa en varios aspectos, es entender la importancia de esta y la necesidad de llevar a cabo prácticas adecuadas para incentivar escenarios creativos e innovadores. La administración de empresas o la intervención administrativa hace referencia a la metodología y forma de organizar en ambientes organizacionales a los seres humanos, los recursos, las necesidades, los objetivos, entre otros. De tal forma se esbozan algunos aspectos relevantes en materia de administración de la innovación desde el entorno empresarial. 
    
    h3
      i#t_4_1.fas.fa-square.me-3.cuadrado.mt-4 
      |  Habilidades blandas para la innovación 
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-10
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4.mt-4
          p.mb-0 Las habilidades blandas, también conocidas como <i>soft skills</i>, son aquellas que se asocian con la inteligencia emocional y que se identifican como destrezas en la persona para comunicarse e interactuar con los integrantes de la empresa de manera asertiva. Actualmente, es necesario, a nivel profesional, trabajar en estas habilidades, desarrollarlas y potencializarlas, debido a que terminan siendo el valor agregado y el factor diferenciador de otros profesionales.    
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p Además de ello, diferentes estudios han explorado sobre el impacto de este tipo de habilidades en el entorno laboral, hoy las empresas son conocedoras de la calidad técnica de los profesionales. Sin embargo, han empezado a requerir en los perfiles profesionales, no solo conocimientos técnicos, sino también el control de estos en términos de inteligencia emocional para que esto coadyuve con un sano y agradable clima organizacional, más aún en el ambiente cambiante que experimentamos en la actualidad. En el campo de la innovación, existen habilidades a destacar, como lo son el liderazgo y el trabajo en equipo. Conozcamos cada una de ellas.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img35.png', alt='imagen relacionada')

    h3.mb-4 a. Liderazgo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
      .bloque-texto-g__img(style="width: 470px ")(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img36.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p En el caso del liderazgo, se concibe como una de las habilidades complementarias más importantes al momento de ejercer como profesional o integrante de una organización. La clave para el ejercicio del liderazgo está en cinco variables que deben confluir: la influencia, los objetivos organizacionales, las personas, el cambio y los líderes-seguidores; esta última, entendiendo que el liderazgo debe ser compartido, no individual

    p.mb-4 Las técnicas para ejercer un buen liderazgo y mantener la motivación de un equipo de trabajo son:
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
