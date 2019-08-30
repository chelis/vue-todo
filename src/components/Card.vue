<template>
  <div :class="cardClass" >
    <div class="stats-card-title">{{title}}</div>
    <div class="stats-card-value">{{count}}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    count: Number,
    type: String
  },
  computed: {
    cardClass() {
      return 'stats-card ' + this.type
    }
  }
}
</script>

<style scoped>
  .stats-card {
    height: 10rem;
    width: 10rem;
    background-image: linear-gradient(to bottom right, rgb(211,211,211) , rgb(172, 168, 168)); 
    margin: 1rem;
    display: inline-block;
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .stats-card-title {
    text-align: center;
    color: white;
    font-weight: bold;
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  .stats-card-value {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 4rem;
    margin-top: 0.5rem;
  }

  .stats-card.warn {
    background-image: linear-gradient(to bottom right, rgb(228, 145, 145), red);
  }

    .stats-card.success {
    background-image: linear-gradient(to bottom right, rgb(193, 238, 193), green);
  }
</style>

