import React from 'react'

import { render } from '@testing-library/react'

const customRender = (ui: React.ReactNode, options = {}) =>
  render(<React.Fragment>{ui}</React.Fragment>, {
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
