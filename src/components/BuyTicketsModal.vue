<template>
       <b-modal ref="buy-modal" id="modal-scoped">
              <template v-slot:modal-header="{ close }">
                <h5>Comprar boletas para el evento</h5>
              </template>

              <template v-slot:default="{ hide }">
                <b-form inline>
                <label class="mr-sm-2" for="inline-form-custom-select-pref">Número de boletas</label>
                 <b-form-input
                        type = 'number'
                        id="input-2"
                        v-model="numEntrances"
                        required
                        min = 1
                        placeholder="Número de entradas"
                  ></b-form-input>
              </b-form>
              </template>

              <template v-slot:modal-footer="{ ok, cancel, hide }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="onSubmit">
                  Aceptar
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancelar
                </b-button>
              </template>
    </b-modal>
</template>

<script>
export default {
  name: 'BuyTicketsModal',
  data: function(){
    return {
      numEntrances: 1
    }
  },
  props: {
    id: Number,
    title: String,
    description: String
  },
  methods: {
    showModal(eventId){
       this.$refs['buy-modal'].show();
       this.id = eventId;
    },
    onSubmit(evt) {
        evt.preventDefault()
        this.axios
        .post(`/purchase/${this.id}`,{numEntrances: this.numEntrances})
        .then((response) => {
          const created = response.data;
          // Emitir evento con la respuesta del servicio
          this.$emit('purchaseEvent', created);
          this.$refs['buy-modal'].hide();
        })
        .catch((error) => {
          alert(error);
        })
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
