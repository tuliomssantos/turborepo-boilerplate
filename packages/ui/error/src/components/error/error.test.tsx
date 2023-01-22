import { render, screen } from 'jest-common/react-testing-library'

import Error from './Error'

describe('Error', () => {
  it('should render an error', () => {
    render(<Error message="Something went wrong" />)
    const error = screen.getByText('Error')
    expect(error).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Error message="Something went wrong" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
