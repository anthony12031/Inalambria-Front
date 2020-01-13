<template>
  <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;" img-top>
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img :src="imageUrl" ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="title">
                    <b-card-text class="description">
                    {{description}}
                    </b-card-text>
                    <b-button @click="$emit('buyTickets', id)"  href="#" variant="primary" class="text-light">Comprar boletas</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
      </b-card>
</div>

</template>

<script>
/** Componente que renderiza un evento registado en el sistema */
export default {
  name: 'Event',
  data: function(){
    return {
      images: [
        'http://img2.rtve.es/v/5048588?w=1600&preview=1552237760003.jpg',
        'https://innov8tiv.com/wp-content/uploads/2018/08/Best-Gaming-Events-2018-4.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0sptSUFTMbnJm7mkD7M4NyfnoWtX8C3aVqyOrXTmfWOld-q6-A&s',
        'https://diarioelcanal.com/wp-content/uploads/2019/12/concert-inoblidable-de-nadal1-min.jpg']
    }
  },
  props: {
    /** Id del evento */
    id: Number,
    /** Titulo del evento */
    title: String,
    /** Descripción del evento */
    description: String
  },
  computed: {
    /** Url para ver el detalle del evento */
    detailUrl : function(){
      return '/event/' + this.id;
    },
    /** Retorna una imagen del arreglo de imagenes */
    imageUrl: function(){
      return this.images[this.id % this.images.length]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.description{
  color: black;
} 

a:hover{
  text-decoration: none;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
