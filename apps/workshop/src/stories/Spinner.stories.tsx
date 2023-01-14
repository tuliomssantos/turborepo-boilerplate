import { Spinner } from '@acme/loading'

import { Overlay } from '@acme/overlay'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Primary = Template.bind({})

export const LoadingSpinner = () => (
  <div>
    <Overlay />
    <Spinner
      style={{
        zIndex: 45,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
      beatae, provident incidunt vel eaque quam possimus delectus non illum
      libero commodi nulla id voluptatum, temporibus ducimus adipisci optio
      nesciunt?
    </p>
  </div>
)
