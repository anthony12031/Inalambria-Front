<template>
  <main class="container">
    <h1 class="ml-0"> Proximos eventos</h1>
    <section class="row text-center justify-content-center">
      <Event 
      class="col-5 m-2"
      v-for = "event in eventList" 
      :key="event.id"
      :id="event.id"
      :title= "event.name"
      :description = "event.description" 
      @buyTickets="buyTickets($event)"/>
    </section>
     <b-modal ref="buy-modal" id="modal-scoped">
              <template v-slot:modal-header="{ close }">
                <h5>Comprar boletas para el evento</h5>
              </template>

              <template v-slot:default="{ hide }">
                <p>Modal Body with button</p>
              </template>

              <template v-slot:modal-footer="{ ok, cancel, hide }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">
                  Aceptar
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancelar
                </b-button>
              </template>
        </b-modal>
  </main>
</template>

<script>
import Event from '../components/Event';
export default {
  name: 'MainPage',
  data: function(){
      return {
      eventList: [
        { id: 0, name: 'event 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' },
        { id: 1, name: 'event 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'  },
        { id: 2, name: 'event 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'  },
        { id: 3, name: 'event 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'  },
        { id: 4, name: 'event 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'  },
        { id: 5, name: 'event 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'  }
      ]
    }
  },
  props: {
    msg: String
  },
  components: {
    Event
  },
  methods: {
    buyTickets: function(eventId){
      // Mostrar modal de compra
       this.$refs['buy-modal'].show(eventId)
       
      // Enviar petición de compra al API
    }
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
