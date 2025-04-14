import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    // デフォルトだpadding=16pxがつくのでfullscreenに設定
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
