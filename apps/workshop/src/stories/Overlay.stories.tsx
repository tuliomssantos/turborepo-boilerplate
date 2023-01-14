import { Overlay } from '@acme/overlay'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>

const Template: ComponentStory<typeof Overlay> = () => <Overlay />

export const Primary = Template.bind({})
Primary.args = {}

export const ScreenWithOverlay = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Overlay />
      <h1>Title</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum adipisci
        assumenda alias, animi omnis, dolore, et dicta cupiditate natus porro
        hic beatae mollitia molestias nihil sint pariatur laboriosam ducimus
        blanditiis?
      </p>
    </div>
  )
}
