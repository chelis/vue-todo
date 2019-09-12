<template>
  <fragment>
    <h1>Todo List</h1>
    <div class="columns">
      <Column title="TODO" :items="pendingTodoItems" className="todo-column" />
      <Column title="DONE" :items="completedTodoItems" className="completed-column" />
    </div>
      <Modal id="descriptionModal" @close="descriptionItem = null" v-show="descriptionItem !== null">
      <slot id="modal-content">
        <div class="modal-header">
          <h1>Task {{descriptionItem ? descriptionItem.name : "None"}}</h1>
          {{ descriptionItem ? descriptionItem.description: "" }}
        </div>
        <div class="modal-footer">
          <button @click="hideDescription()">Back</button>
        </div>
      </slot>
    </Modal>
    <Modal id="newTaskModal" @close="addTodo = false" v-show="addTodo === true">
      <slot id="modal-content">
        <CreateTask @add-task="addTask" @close="addTodo = false"/>
      </slot>
    </Modal>

    <button @click="showAddTask()">Add Todo</button>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { store } from "../store.js";
import CreateTask from "./CreateTask.vue";
import Modal from "./Modal.vue";
import Column from "./Column.vue";

export default {
  name: "TodoList",
  components: { Fragment, CreateTask, Modal, Column },
  data() {
    console.log("instantiatin data");
    return {
      todoItems: [],
      addTodo: false,
      showDescription: false,
      descriptionItem: null
    };
  },
  created() {
    console.log("created");
    this.fetchItems();
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {},
  methods: {
    log() {
      console.log("change");
    },
    displayDescription(item) {
      this.descriptionItem = item;
    },
    hideDescription() {
      this.descriptionItem = null;
    },
    showAddTask() {
      console.log(this.addTodo);
      this.addTodo = true;
    },
    hideAddTask() {
      this.addTodo = false;
    },
    addTask(name, description) {
      console.log("adding task", name, description);
      const item = { name, description };
      this.todoItems = this.createItem(item);
      this.fetchItems();
    },
    createItem(item) {
      store.add(item);
    },
    fetchItems() {
      this.todoItems = store.items;
    }
  },
  computed: {
    pendingTodoItems() {
      return this.todoItems.filter(item => !item.done)
    },

   completedTodoItems() {
      return this.todoItems.filter(item => item.done)
    }
  }
};
</script>
<style>
button {
  border: none;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  padding: 5px;
  min-width: 60px;
}

.completed-column {
  float: right;
}

.todo-column {
  float: left
}


.columns::after {
  content: "";
  clear: both;
  display: table;
}
.columns {
  width: 60%;
}

.todo-list input {
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>

