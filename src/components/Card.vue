<template>
    <div v-if="card.id" class="card" v-bind:class="card.vendor" @click="$emit('change-card', card)">
     <div class="chip">
      <img src="@/assets/images/chip-light.svg" alt="chip" />
      <img :src="require('@/assets/images/vendor-' + card.vendor + '.svg')">
      </div>
      <div class="vendor">
        </div>

     <div class="number">
       <h1>{{card.number}}</h1>
     </div>

     <div class="name">
        <h1>{{card.name}}</h1>
     </div>

     <div class="validThru">
        <h1>{{card.month}}/{{card.year}}</h1>
     </div>

  </div>
</template>

<script>
export default {
   name:"Card",
   props: ["card"],
   
};
</script>

<style scoped>
.card {
  width: 37%;
  height: 350px;
  margin-left: 29%;
  border-radius: 25px;
}

.bitcoin{
background-color: rgb(241, 181, 69);
}
.evil{
  background-color: rgb(235, 43, 75);
  color: white;
}
.ninja{
  background-color: rgb(31, 29, 29);
    color: white;
}
.blockchain{
  background-color: rgb(167, 76, 167);
    color: white;
}
.chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right:20px;
  margin-left: 30px;
}
 .number {
  letter-spacing: 8px;
  margin-top:20px;
      margin-left: 30px;

}
.name {
    letter-spacing: 8px;
    margin-left: 30px;
}
.validThru {
  margin-left: 400px;
}  



</style>