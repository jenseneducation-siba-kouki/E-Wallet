<template>
  <div class="AddCard">
    <Top />
    <Card v-bind:card="newCard"/>
    <CardForm v-bind:newCard="newCard"/>
    
  </div>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: "AddCard",
  components: {
    Top,
    Card,
    CardForm
  },
  data() {
    return {
      newCard: {
        name: "xxxx-xxxx-xxxx-xxxx",
        number: "XXX-XXX-XXXX-XXXX",
        month: "",
        year: "",
        chip: require("@/assets/images/chip-light.svg"),
        vendor: "bitcoin",
        id: Date.now(),
      }
    }
  }, /*methods: {
    addCard(payload) {
      this.newCard = payload
    }
  } */
  
}
</script>

<style scoped>


</style>
