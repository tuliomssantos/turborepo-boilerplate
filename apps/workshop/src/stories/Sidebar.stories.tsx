import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from '@acme/sidebar'

import '@acme/sidebar/src/styles/sidebar.css'

export default {
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const SidebarContent = () => (
  <>
    <div className="sidebar-content">
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  </>
)

const Template: ComponentStory<typeof Sidebar> = args => (
  <div className="with-sidebar" style={{ height: '100vh' }}>
    <Sidebar {...args}>
      <SidebarContent />
    </Sidebar>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptates
      velit explicabo aliquam nihil itaque soluta ut rem excepturi fuga. Odio id
      ipsum sit beatae voluptates optio animi illum! Deserunt!
    </div>
  </div>
)

export const Primary = Template.bind({})
