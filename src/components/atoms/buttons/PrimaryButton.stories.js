import PrimaryButton from "./PrimaryButton.vue";

export default {
  title: "Atoms/Buttons/Primary",
  component: PrimaryButton,
  argTypes: {
    text: String,
  },
};

const Template = (args) => ({
  components: { PrimaryButton },
  setup() {
    return { args };
  },
  template: '<primary-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: "Click me",
};
