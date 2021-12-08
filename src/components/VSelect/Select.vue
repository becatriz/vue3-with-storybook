<template>
<div class="container">
  <select name="v-select" :class="classes" :multiple="multiple" >
    <option value="" disabled selected >{{ placeholder }}</option>
    <option :value="item" :key="item" v-for="item in items"  @click="$emit('change', item)">
      {{ item }}
    </option>
  </select>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import "./style.css";


/**
 * Component Select Items
 */

export default {
  name: "v-select",
  props: {
     /**
     * Define items that will be displayed on select
     */
    items: {
      type: Array,
      default: () => ["Banana", "Maça"],
    },
     /**
     * Define whether you can choose more than one option
     */
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  
 
  emits: ["change"],

  setup(props) {
    props = reactive(props);
    

    const placeholder = props.multiple ? "Escolha múltipla" : "Escolha única";

    return {
      classes: computed(() => ({
        'dropdown': true,
        'dropdown-multiple': props.multiple,
      })),
      placeholder,
    };
  },
};
</script>
