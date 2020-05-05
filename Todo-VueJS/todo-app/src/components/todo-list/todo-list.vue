<template>
  <div>
    <div v-for="(todo,index) in todos" :key="index" class="margin-top-50">
      <TodoItem @onDeleteTodo="onDeleteTodo" :todoEl="todo" :todoInd="index"></TodoItem>
    </div>
  </div>
</template>

<script>
import TodoItem from '../todo-item/todo-item.vue'
export default {
  name: "todo-list",
  props: ["todos"],
  methods: {
    onDeleteTodo(index) {
      this.$emit("onDeleteTodo", index);
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
