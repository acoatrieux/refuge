// définir un objet mixin
export var  addToShopMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    addToSHop: function (petId) {
      var pet = this.$store.getters.getTodoById(petId);
      this.$store.commit('onAddToCart',pet);
    },
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// // définition d'un composant qui utilise ce mixin
// var Component = Vue.extend({
//   mixins: [addToShopMixin]
// })
//
// var component = new Component() // => "hello from mixin!"