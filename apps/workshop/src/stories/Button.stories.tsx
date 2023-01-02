import { Button } from '@acme/button'

//create a story for the Button component
export default {
  title: 'Button',
  component: Button,
}

//create a template for how args map to rendering the Button component
const Template = args => <Button {...args} />

//re-use that template for creating different stories
export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}
