<template>
 <div :class="className">
  <h3>{{title}}</h3>
  <Card :key="item.name" v-for="item in this.items" :item="item" />
</div>
</template>

<script>

import Card from "./Card.vue";

export default {
  name: 'Column',
  components:{ Card },
  props: {
    title: String,
    items: Array,
    className: String
  },
  computed: {
    columnClass() {
      return this.className + ' column';
    } 
  }

}
</script>

<style scoped>
.column {
  width: 40px;
}
</style>
