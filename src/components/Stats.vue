<template>
  <div>
    <h1>Stats</h1>
    <StatsCard :count="this.count" title="Total" />
    <StatsCard :count="this.done" title="Done" type="success"/>
    <StatsCard :count="this.pending" title="Pending" type="warn"/>
  </div>
</template>

<script>
import {store} from '../store.js';
import StatsCard from './StatsCard.vue'

export default {
  name: "Stats",
  components: {StatsCard},
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

