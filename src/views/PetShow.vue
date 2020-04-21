<template>
    <div class="card">
        <div class="card-header">
            Fiche animal
        </div>
        <div class="card-body">
            <p>Nom : {{pet.name}}</p>
            <p>Espèce : {{pet.race}}</p>
            <p v-if="pet.perscriptions">Historiques des perscriptions : {{pet.perscriptions}}</p>
            <router-link :to="{ name: 'PetEdit', params: { id: pet.id }}"><button class="btn btn-secondary">Modifier la fiche animal</button></router-link>
            <router-link :to="{ name: 'PetAddPrescription', params: { id: pet.id }}"><button class="btn btn-secondary">Ajouter une prescription</button></router-link>
            <button class="btn btn-primary float-right"  @click="addToSHop(pet.id)">Ajouter au panier</button>
        </div>
    </div>
</template>


<script>
    import {addToShopMixin} from '../mixins/addToShopMixin';
    export default {
        name: 'PetShow',
        computed: {
            pet: function() {
                return this.$store.getters.getTodoById(this.$route.params.id)
            }
        },
        mixins: [addToShopMixin]
    }
</script>
