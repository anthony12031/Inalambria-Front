<template>
  <div>
     <router-link style="color:white" :to="detailUrl">Eventos
        <a href="">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
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
        </a>
    </router-link>
</div>

</template>

<script>
export default {
  name: 'Event',
  props: {
    id: Number,
    title: String,
    description: String
  },
  computed: {
    detailUrl : function(){
      return '/event/' + this.id;
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
