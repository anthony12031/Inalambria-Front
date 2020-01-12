<template>
  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="title">
          <b-card-text>
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
export default {
  name: 'Event',
  props: {
    id: Number,
    title: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
