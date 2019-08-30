<template>
  <div>
    <h1>Stats</h1>
    <Card :count="this.count" title="Total" />
    <Card :count="this.done" title="Done" type="success"/>
    <Card :count="this.pending" title="Pending" type="warn"/>
  </div>
</template>

<script>
import {store} from '../store.js';
import Card from './Card.vue'

export default {
  name: "Stats",
  components: {Card},
  computed: {
    count() {
      return store.items.length
    },
    done() {
      return store.items.filter(todo => todo.done).length
    },
    pending() {
      return store.items.filter(todo => !todo.done).length
    }
  }
}
</script>

