import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import MarkdownEditor, { StepsPreview } from './index';

export default {
  title: 'MarkdownEditor',
  component: MarkdownEditor,
  decorators: [withKnobs],
};

export const empty = () => <MarkdownEditor onChange={action('onChange')} />;

export const stepsPreview = () => (
  <StepsPreview
    src={text(
      'Markdown',
      '# List example' +
        '\n 1. **bold**' +
        '\n2. _italic_' +
        '\n3. [Google](https://google.com)',
    )}
  />
);
