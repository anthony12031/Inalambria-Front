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
    <BuyTicketsModal  ref="buy-modal"/> 
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
