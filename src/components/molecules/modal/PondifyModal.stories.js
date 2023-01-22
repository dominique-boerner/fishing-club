import PondifyModal from "./PondifyModal.vue";

export default {
  title: "Atoms/Modal",
  component: PondifyModal,
  argTypes: {
    open: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  components: { PondifyModal },
  setup() {
    return { args };
  },
  template: '<pondify-modal v-bind="args" />',
});

export const Open = Template.bind({});
Open.args = {
  title: "My Dialog",
  text: "This is the text of the modal dialog field.",
  actionCaption: "Action",
  open: true,
};
