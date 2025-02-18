import type { Meta, StoryObj } from '@storybook/react';
import {Avatar, AvatarProps} from "@ignite-ui/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/Kevin199527.png',
        alt: 'Kevin Sousa'
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
};
