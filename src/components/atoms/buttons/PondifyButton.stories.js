import PondifyButton from "./PondifyButton.vue";

export default {
  title: "Atoms/Buttons",
  component: PondifyButton,
  argTypes: {
    text: String,
    mode: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    severity: {
      options: ["default", "danger"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  components: { PondifyButton },
  setup() {
    return { args };
  },
  template: '<pondify-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: "Click me",
  mode: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Click me",
  mode: "secondary",
};
