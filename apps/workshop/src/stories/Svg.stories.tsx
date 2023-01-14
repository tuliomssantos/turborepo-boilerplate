import { SvgComponent } from '@acme/svg'

import ReactSvg from '../assets/react.svg'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Svg',
  component: SvgComponent,
} as ComponentMeta<typeof SvgComponent>

const Template: ComponentStory<typeof SvgComponent> = args => (
  <SvgComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  IconComponent: ReactSvg as unknown as React.FC<React.SVGProps<SVGSVGElement>>,
}
