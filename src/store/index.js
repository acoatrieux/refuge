import Vue from 'vue'
import Vuex from 'vuex'
import Pet from "../models/Pet";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pets: [
            new Pet(1, 'chien', 'Oscar', {'21/04/2020' : 'ADminisration de sédatif'}),
            new Pet(2, 'chien', 'Lendy'),
            new Pet(3, 'chat', 'Cybelle'),
            new Pet(4, 'lézard', 'Snake'),
            new Pet(5, 'bird', 'birdy'),
        ],
        storedPets: [

        ]
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.pets.find(pet => pet.id == id)
        },
        headline: (state) => (id) => {
            let pet = state.pets.find(pet => pet.id == id);
            if (pet.prescription !== {}){
                return pet.prescription;
            }
            return ''
        },
    },
    mutations: {
        onAddToCart(state,pet){
            state.storedPets.push(pet);
        }
    },
    actions: {

    },
    modules: {}
})
