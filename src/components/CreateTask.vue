<template>
  <div class="form-wrapper">
    <h1>New Task</h1>
    <form>
      <div class="control-group">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="taskName">
      </div>
      <div class="control-group">
        <label for="description">Description</label>
        <input id="description" type="text" v-model="taskDescription">
      </div>
      <div class="toolbar">
        <button @click="close()">Cancel</button>
        <button @click="addTask()">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
import { EventBus } from "../event-bus.js";

export default {
  name: "CreateTask",
  components: { Fragment },
  data() {
    return {
      taskName: "",
      taskDescription: ""
    };
  },
  methods: {
    addTask() {
      this.$emit("add-task", this.taskName, this.taskDescription);
      this.close()
    },
    close() {
      this.taskName = ''
      this.taskDescription = ''
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.form-wrapper {
  position: absolute;
  height: 80%;
}

.control-group::after {
  content: "";
  clear: both;
  display: table;
}

.control-group {
  padding: 5px 0px;
}
.control-group label {
  float: left;
  margin-right: 2px;
}
.control-group input {
  float: right;
  width: 60%;
}

.toolbar {
  position: absolute;
  bottom: .0px;
  right: 2px;
  width: 50%;
}
.toolbar button {
  width: 45%;
  border: none;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  padding: 5px 0px;
  margin-left: 10%;
}
.toolbar button:first-of-type {
  margin-left: 0;
}
</style>

