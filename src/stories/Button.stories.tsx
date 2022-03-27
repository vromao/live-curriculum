// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Primitives/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => <Button text="Submit">Button</Button>;
