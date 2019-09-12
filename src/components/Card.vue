<template>
  <div :class="cardClass" >
    <div class="card-title"><a href="#" @click.prevent="displayDescription(item)">{{item.name}}</a></div>
    <div class="card-value">{{item.description}}</div>
    <label>
      <input type="checkbox" v-model="item.done">    
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
  },
  computed: {
    cardClass() {
      return 'card ' + this.type
    }
  }
}
</script>

<style scoped>
  .card {
    width: 10rem;
    margin: 1rem;
    display: block;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    position: relative;
    padding-left: 25px;
    padding-bottom: 25px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .card-title {
    text-align: center;
    color: black;
    font-weight: bold;
    padding-top: 1rem;
    font-size: 1.2rem;
  }

  .card-value {
    text-align: left;
    color: black;
    font-size: 1rem;
    margin: 1rem;
  }

.card input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 25px;
  width: 25px;
  bottom: 0;
  right: 0;
}

.card .checkmark {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: #eee;
}

.card:hover .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.card input:checked ~ .checkmark {
  background-color: #2196F3;
}
/* Create the checkmark/indicator (hidden when not checked) */
.card .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.card input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.card .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 1px 3px 0;
  /* -webkit-transform: rotate(45deg); */
  /* -ms-transform: rotate(45deg); */
  transform: rotate(45deg);
}

</style>



