<template>
      <div class="card-stack">
        <Card v-for="card in cards"
        v-bind:key="card.id"
        v-bind:card="card"
        v-bind:newCard="card"
         @change-card="$emit('change-card', card)"
       />
      </div>
     
  
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: "CardStack",
  components: {
    Card
  },
  computed:{
     cards(){
      return this.$root.$data.cards;
           
  },
}
}
</script>

<style>
.card-stack{
  margin:2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>