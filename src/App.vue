<template>
  <div id="app">
    <nav class="clearfix">
      <ul>
        <li>
          <router-link class="nav-item" hover-class="hover" active-class="active" to="/home">Home</router-link>
        </li>
        <li>
          <router-link class="nav-item" hover-class="hover" active-class="active" to="/stats">Stats</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
nav ul {
  padding: 0;
}
nav li {
  list-style-type: none;  
}

nav .nav-item {
  float: left;
  text-decoration: none;
  background: black;
  color: white;
  padding: 15px;
}

nav {
  background: black;
}
nav .active {
  background: red;
  color: white;
}

nav li > a:hover:not(.active) {
  background: grey;
}
</style>
