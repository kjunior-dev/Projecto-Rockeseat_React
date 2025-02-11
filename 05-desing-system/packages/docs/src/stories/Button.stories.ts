import type { Meta, StoryObj } from '@storybook/react';
import {Button} from "@ignite-ui/react";

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar'
  },
} as Meta<typeof Button>;

export const Primary: StoryObj = {};

export const Big: StoryObj = {
  args: {
        size: 'big',
  },
};
