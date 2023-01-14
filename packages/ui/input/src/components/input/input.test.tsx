import { render } from 'jest-common/react-testing-library'

import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Input
        id="input"
        name="input"
        placeholder="Placeholder"
        textLabel="Label"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render correctly with leading icon', () => {
    const { asFragment } = render(
      <Input
        id="input"
        name="input"
        placeholder="Placeholder"
        textLabel="Label"
        icon={{ leading: <span>Icon</span> }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render correctly with trailing icon', () => {
    const { asFragment } = render(
      <Input
        id="input"
        name="input"
        placeholder="Placeholder"
        textLabel="Label"
        icon={{ trailing: <span>Icon</span> }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render correctly with leading and trailing icons', () => {
    const { asFragment } = render(
      <Input
        id="input"
        name="input"
        placeholder="Placeholder"
        textLabel="Label"
        icon={{ leading: <span>Icon</span>, trailing: <span>Icon</span> }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
