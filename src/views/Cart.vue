<template>
    <ul>
        <PetItemComponenent v-for="pet in $store.state.storedPets" :pet="pet" :key="pet.id"></PetItemComponenent>
    </ul>
</template>

<script>
    import PetItemComponenent from "../components/PetItemComponenent";

    export default {
        name: 'Cart',
        components: {
            PetItemComponenent
        }    }
</script>
