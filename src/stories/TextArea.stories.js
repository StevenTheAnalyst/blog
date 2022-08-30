import { TextArea } from "components";
export default {
  title: "steven_s_application7/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder5",
  variant: "OutlineGray301",
  size: "sm",
  placeholder: "placeholder",
};
