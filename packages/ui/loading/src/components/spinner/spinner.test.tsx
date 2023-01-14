import { render } from 'jest-common/react-testing-library'

import Spinner from './Spinner'

describe('Spinner', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Spinner />)
    expect(asFragment()).toMatchSnapshot()
  })
})
