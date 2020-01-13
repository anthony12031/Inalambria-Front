<template>
       <b-modal ref="publish-modal" id="modal-scoped">
              <template v-slot:modal-header="{ close }">
                <h5>Publicar un evento</h5>
              </template>

              <template v-slot:default="{ hide }">
                  <b-form  @submit="onSubmit" >
                    <b-form-group
                      id="input-group-1"
                      label="Nombre del evento"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="Nombre del evento"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Número de personas" label-for="input-2">
                      <b-form-input
                        type = 'number'
                        id="input-2"
                        v-model="form.capacity"
                        required
                        placeholder="Número de personas"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Descripción del evento" label-for="input-3">
                      <b-form-textarea
                        id="textarea"
                        v-model="form.description"
                        placeholder="Ingrese una breve descripción."
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
                    </b-form-group>
                </b-form>
              </template>

              <template v-slot:modal-footer="{ ok, cancel, hide }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button type="submit" size="sm" variant="success" @click="onSubmit">
                  Crear
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                  Cancelar
                </b-button>
              </template>
    </b-modal>
</template>

  

<script>
export default {
  name: 'PublishEventModal',
  data: function() {
    return {
      form: {
          name: '',
          description: '',
        } 
    }
  },
  props: {
    id: Number,
    title: String,
    description: String
  },
  methods: {
    onSubmit(evt) {
        evt.preventDefault()
        this.axios
        .post('/events', this.form)
        .then((response) => {
          alert(response.data)
        })
        .catch((error) => {
          alert(error);
        })
      },
    showModal(){
       this.$refs['publish-modal'].show();
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
