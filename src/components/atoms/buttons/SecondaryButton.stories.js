import SecondaryButton from "./SecondaryButton.vue";

export default {
  title: "Atoms/Buttons/Secondary",
  component: SecondaryButton,
  argTypes: {
    text: String,
  },
};

const Template = (args) => ({
  components: { SecondaryButton },
  setup() {
    return { args };
  },
  template: '<secondary-button v-bind="args" />',
});

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Click me",
};
