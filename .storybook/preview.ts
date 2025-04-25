import type { Preview } from '@storybook/react';
import { ScreenshotOptions, withScreenshot } from 'storycap';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const options: ScreenshotOptions = {
  delay: 100,
  fullPage: false,
  viewports: {
    desktop: { width: 1920, height: 1080 },
  },
};

export const decorators = [withScreenshot(options)];

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
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
  },
};

export default preview;
