import type { Meta, StoryObj } from '@storybook/react';
import {Avatar, AvatarProps} from "@ignite-ui/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/kjunior-dev.png',
        alt: 'Kevin Sousa'
    },
    argTypes:{
        src:{
            control:{
                type: 'text',
            }
        }
    }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {
    tags: ['autodocs'],
};

export const WithFallback: StoryObj<AvatarProps> = {
    tags: ['autodocs'],
    args: {
        src: undefined
    }
};
