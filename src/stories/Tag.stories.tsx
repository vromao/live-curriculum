// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from '../components/Tag';

export default {
  title: 'Primitives/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = () => <Tag text="React" />;
