<template>
  <select name="v-select" :multiple="multiple" >
    <option value="" disabled selected >{{ placeholder }}</option>
     <!-- @change change to show content below label -->
    <option :value="item" :key="item" v-for="item in items"  @click="$emit('change', item)">
      {{ item }}
    </option>
  </select>
</template>

<script>
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

    const placeholder = props.multiple ? "Escolha múltipla" : "Escolha única";

    return {
      placeholder,
    };
  },
};
</script>
