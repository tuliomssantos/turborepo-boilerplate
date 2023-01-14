import { Typography } from '@acme/typography'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    as: {
      control: false,
    },
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Loren ipsum',
}
