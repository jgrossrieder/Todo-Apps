<template>
  <div id="app">
    <div class="container--todo-header">
      <h1>Todo App VueJS</h1>
    </div>
    <todoInput @onTodoAdd = "handleTodoAdd"></todoInput>
    <hr/>
    <TodoList :todos="todos"
      @onDeleteTodo="handleDeleteTodo"></TodoList>

    <!-- <div v-for="(todo,index) in todos"
    :key="index"
    class="margin-top-50">
      <todoList
      @onDeleteTodo = "handleDeleteTodo"
      :todoEl="todo"
      :todoInd="index"></todoList>
    </div> -->
  </div>
</template>

<script>
import todoInput from './components/todo-input/todo-input'
import TodoList from './components/todo-list/todo-list.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  methods: {
    handleTodoAdd(todo) {
      this.todos.push(todo)
    },
    handleDeleteTodo(ind) {
      this
      .todos
      .splice(ind,1)
    }
  },
  components: {
    todoInput,
    TodoList
  }
}
</script>

<style>
.container--todo-header {
  display: flex;
  justify-content: center;
}
.margin-top-50 {
  margin-top: 50px;
}
</style>
