<template>
  <fragment>
    <h1>Todo List</h1>
    <ul class="todo-list">
      <li id="item1" :key="item.name" v-for="item in this.todoItems">
       <label :class="{done: item.done}" class="container">
          
          
          <input type="checkbox" v-model="item.done">
          <a href="#" @click.prevent="displayDescription(item)">{{item.name}}</a>
     <span class="checkmark"></span>
      </label>
      </li>
    </ul>

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

export default {
  name: "TodoList",
  components: { Fragment, CreateTask, Modal },
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
      console.log('change')
  
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

.todo-list li {
  list-style-type: none;
}
.todo-list a {
  text-decoration: none;
  color: black;
}
.todo-list a {
  text-decoration: none;
  color: black;
}

.todo-list .done a {
  text-decoration: line-through;
}

.todo-list .container {
  position: relative;
  display: block;
  padding-left: 25px;
  margin-bottom: 15px;
  cursor: pointer;

}

.todo-list .checkmark {
  position: absolute;
  top:0;
  left:0;
  width:25px;
  height:25px;
  background-color: #eee;

}

.todo-list .container:hover .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}
/* Create the checkmark/indicator (hidden when not checked) */
.todo-list .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.todo-list .container input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.todo-list .container .checkmark:after {
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


.todo-list input {
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>

