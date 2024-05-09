import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import {initializeFormKit} from "../src/formkit";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  // initializeFormKit(app);
});

export default preview;
