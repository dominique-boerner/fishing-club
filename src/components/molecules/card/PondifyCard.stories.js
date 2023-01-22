import PondifyCard from "./PondifyCard.vue";

export default {
  title: "Molecules/Card",
  component: PondifyCard,
  argTypes: {
    title: String,
    img: String,
    text: String,
    isClickable: {
      options: [true, false],
      control: { type: "radio" },
    },
    isRemovable: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  components: { PondifyCard },
  setup() {
    return { args };
  },
  template: '<pondify-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400",
  isClickable: true,
  isRemovable: true,
};
