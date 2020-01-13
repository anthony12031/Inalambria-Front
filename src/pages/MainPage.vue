<template>
  <main class="container">
    <!-- Alerta cuando ocurre un error creando un evento -->
    <b-alert v-model="showErrorAlert" variant="danger" dismissible>
      Error Creando el evento
    </b-alert>
    <!-- Alerta cuando se crea un evento de manera satisfactoria -->
    <b-alert v-model="showSuccessAlert" variant="success" dismissible>
      Evento creado
    </b-alert>
    <!-- Alerta cuando se realiza una compra -->
    <b-alert v-model="showPurchaseErrorAlert" variant="danger" dismissible>
     Ocurrio un error al registrar la compra
    </b-alert>
    <!-- Alerta cuando ocurre un error registrando una compra -->
    <b-alert v-model="showPurchaseSuccessAlert" variant="success" dismissible>
      Compra registrada
    </b-alert>
    <b-button @click="publishEvent()" class="mt-3" pill variant="success">Publicar Evento</b-button>
    <h3 class="ml-0"> Próximos eventos</h3>
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
    <BuyTicketsModal @purchaseEvent="purchaseEvent" ref="buy-modal"/> 
    <PublishEventModal @createEvent="createEvent" ref="publish-modal"/>
  </main>
</template>

<script>
import Event from '../components/Event';
import BuyTicketsModal from '../components/BuyTicketsModal';
import PublishEventModal from '../components/PublishEventModal';

export default {
  name: 'MainPage',
  data: function(){
      return {
      showErrorAlert: false,
      showSuccessAlert: false,
      showPurchaseErrorAlert: false,
      showPurchaseSuccessAlert: false,
      eventList: []
    }
  },
  props: {
    msg: String
  },
  mounted: function() {
   this.getEventList();
  },
  components: {
    Event,
    BuyTicketsModal,
    PublishEventModal
  },
  methods: {
    getEventList: function(){
       this.axios
      .get('/events')
      .then((response) => {
        this.eventList = response.data;
      })
    },
    buyTickets: function(eventId){
      // Mostrar modal de compra
       this.$refs['buy-modal'].showModal(eventId)
    },
    publishEvent: function(){
      this.$refs['publish-modal'].showModal();  
    },
    // Evento respuesta cuando se intenta crear un evento
    createEvent: function(created){
      // Mostrar cinta de notificación acción de creación
      if (created){
        this.showSuccessAlert = true;
        // Actualizar la lista de eventos
         this.getEventList();
      }
      else{
        this.showErrorAlert = true;
      }
    },
    purchaseEvent: function(created){
       // Mostrar cinta de notificación acción de creación
      if (created){
        this.showPurchaseSuccessAlert = true;
      }
      else{
        this.showPurchaseErrorAlert = true;
      }
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
