<template>
  <form @submit.prevent="addCard">
      <label for="card number">Card number</label>
      <input type="text" id="number" maxlength="16"
      v-model="newCard.number" 
      placeholder="XXXX-XXXX-XXXX-XXXX"
      />
      
      <label for="card name">Cardholder name</label>
      <input type="text" id="name" 
      v-model="newCard.name" placeholder="FIRSTNAME LASTNAME"
       />
      <div>
      <div>
        <label for="month">Month</label>
        <select v-model="newCard.month" id="month">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label for="year">Year</label>
        <select v-model="newCard.year" id="year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select class="vendor"
      v-model="newCard.vendor"
      >
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="evil">Evil Corp</option>
      <option value="ninja">Ninja Bank</option>
    </select>
    <button type="submit">Submit</button>

     
    </form>
  
</template>

<script>
export default {
  name: "CardForm",
  props: {
    newCard: Object
  },
  methods:{
    addCard(){
      console.log("test")
      this.$root.$data.cards.push(this.newCard)
      this.$router.push('/')
    }  }

  }

</script>

<style scoped>
form {
  width: 35%;
  margin-left: 430px;
}
label {
  text-align: left;
  display: block;
  margin: 10px 0px 10px 0px;

}
div {
  display: flex;
  justify-content: space-between;
  margin-top:10px;
}
select {
  width: 190px;
}
input, select {
  width: 100%;
  padding:12px;
  border-radius: 8px;
  border: 1px solid black;
}
button {
   margin-left:200px;
  text-align: center;
}

</style>
