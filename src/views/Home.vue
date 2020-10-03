<template>
  <div class="home">
    <!-- {{cards}} -->
    
    <Top />
    <Card :card="newCard"
    />
    
    <!-- <Card v-bind:card="cards[0]"/>
    <br/>
    <Card v-bind:card="cards[1]"/>
    <Card v-bind:card="cards[2]"/>
    <Card v-bind:card="cards[3]"/> -->
   <CardStack v-bind:card="cards"
   @change-card="changeCard"/>
      
  <button v-on:click="()=>$router.push('Addcard')">Add A NEW Card</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
   components: {
    Top,
    Card,
    CardStack,
  },
  computed: {
    cards(){
      return this.$root.$data.cards
    },

    // selectedCard(){
    //   return this.$root.$data.cards[this.selectedIndex]

    // }
   
  },
 
 data() {
    return {
      // selectedIndex: this.$root.$data.cards[0],
      newCard: this.$root.$data.cards
    }
  },
  methods: {
    changeCard(card) {
      this.newCard = card;
    }
  }
  //  methods: {
  //      selectedIndex(card){
  //          let index = this.selectedCard.indexOf(card)
  //          this.selectedIndex = index
  //      }
  //  }
 
}
</script>
<style>
button {
  margin:120px 0px 0px 650px;
  text-align: center;
}
</style>
