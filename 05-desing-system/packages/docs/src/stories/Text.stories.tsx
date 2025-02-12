import type { Meta, StoryObj } from '@storybook/react';
import {Text, TextProps} from "@ignite-ui/react";

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Stron Text',
        as: 'strong',
    }
};
