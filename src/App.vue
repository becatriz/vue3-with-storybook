<template>
  <Button label="Concluir"/>
  <v-select :items="items" :multiple="true" v-on:change="changeItem($event)"/>
</template>

<script>
import Button from './components/VButton/Button.vue'
import VSelect from './components/VSelect/Select.vue'

export default {
  name: 'App',
  data() {
    return {
      items: ["Banana", "Maça"]
    }
  },
  components: {
    Button,
    VSelect
  },
  methods:{
    changeItem(item){
      console.log(item);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
