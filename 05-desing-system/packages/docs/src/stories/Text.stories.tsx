import type { Meta, StoryObj } from '@storybook/react';
import {Text, TextProps} from "@ignite-ui/react";

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],

    args: {
        children: ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        size: 'md',
    },
    argTypes:{
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control:{
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Stron Text',
        as: 'strong',
    }
};
