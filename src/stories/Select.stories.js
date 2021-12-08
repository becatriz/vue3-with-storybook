


import VSelect from "../components/VSelect/Select.vue";


export default {
  title: "Example/Select",
  component: VSelect,
  argTypes: { onChange: { action: 'change' }},
};

const Template = (args) => ({
  components: { VSelect },

  setup() {
    return { args };
  },
  template: `<v-select v-bind="args" />`,
});

export const Unique = Template.bind({});
Unique.args = {
  multiple: false,
  items: ["Refrigerante", "Paçoca"],
};
