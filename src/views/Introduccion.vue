<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se presentarán los conceptos generales de la innovación, así mismo su relación con la creatividad y su impacto en las organizaciones. Independientemente de la profesión, ocupación o perfil, la innovación resulta una temática de gran importancia en la generación de valor del desarrollo de cualquier actividad. Por esta razón, lo invitamos a conocer el contenido y a aprender de este gran universo denominado innovación,<strong> creatividad y emprendimiento</strong>.
    p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zz9pbQKcgcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
