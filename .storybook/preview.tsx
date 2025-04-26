import type { Preview } from '@storybook/react';
import { ScreenshotOptions, withScreenshot } from 'storycap';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { Root } from '@/app/layout';

const options: ScreenshotOptions = {
  delay: 100,
  fullPage: false,
  viewports: {
    desktop: { width: 1920, height: 1080 },
  },
};

const withRoot = (Story: React.ComponentType) => (
  <Root>
    <Story />
  </Root>
);

export const decorators = [withRoot, withScreenshot(options)];

const preview: Preview = {
  decorators: decorators,
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
