import { render, screen } from 'jest-common/react-testing-library'

import Login from './Login'

describe('Login', () => {
  it('should render', () => {
    const { container } = render(
      <Login
        searchParams={{
          callbackUrl: 'http://localhost:3000',
        }}
        callbackUrlFallback="http://localhost:3000"
      />
    )

    expect(container).toBeInTheDocument()
  })

  it('should render error', () => {
    render(
      <Login
        searchParams={{
          callbackUrl: '',
        }}
        callbackUrlFallback=""
      />
    )

    const error = screen.getByText('Error')

    expect(error).toBeInTheDocument()
  })
})
