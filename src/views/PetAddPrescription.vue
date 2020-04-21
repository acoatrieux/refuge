<template>
  <div class="card">
    <div class="card-header">
      Prescription animal
    </div>
    <div class="card-body">
      <ul>
        <li></li>
      </ul>
      <form>
        <div class="form-group">
          <label for="prescription">Prescription</label>
          <input class="form-control" id="prescription" v-model="pet.prescription">
        </div>
        <button type="button" class="btn btn-primary" @click="back">Ajouter une prescription</button>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'PetAddPrescription',
    computed: {
      pet: function() {
        return this.$store.getters.getTodoById(this.$route.params.id)
      }
    },
    methods: {
      back : function () {
        this.$router.go(-1);
      }
    }
  }
</script>
