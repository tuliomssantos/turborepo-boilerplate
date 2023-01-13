import React from 'react'

import { fireEvent, render, screen } from 'jest-common/react-testing-library'

import Button from './Button'

describe('Button', () => {
  it('should render a button', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Button>Click me</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render a button with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('button')

    expect(button).toHaveClass('button--radius-sm')

    expect(button).toHaveClass('button__filled--primary')
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('should render a destructive button', () => {
    render(<Button destructive>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--destructive')
  })

  it('should render a button with variant filled and hierarchy primary', () => {
    render(
      <Button variant="filled" hierarchy="primary">
        Click me
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button__filled--primary')
  })

  it('should render a button with variant filled and hierarchy secondary', () => {
    render(
      <Button variant="filled" hierarchy="secondary">
        Click me
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button__filled--secondary')
  })

  it('should render a button with variant filled and hierarchy neutral', () => {
    render(
      <Button variant="filled" hierarchy="neutral">
        Click me
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button__filled--neutral')
  })

  it('should render a button with sm size', () => {
    render(<Button size="sm">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--sm')
  })

  it('should render a button with md size', () => {
    render(<Button size="md">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--md')
  })

  it('should render a button with lg size', () => {
    render(<Button size="lg">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--lg')
  })

  it('should render a button with xl size', () => {
    render(<Button size="xl">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--xl')
  })

  it('should render a button with 2xl size', () => {
    render(<Button size="2xl">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--2xl')
  })

  it('should render a button with border radius sm', () => {
    render(<Button buttonBorderRadius="sm">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--radius-sm')
  })

  it('should render a button with border radius md', () => {
    render(<Button buttonBorderRadius="md">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--radius-md')
  })

  it('should render a button with border radius lg', () => {
    render(<Button buttonBorderRadius="lg">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('button--radius-lg')
  })

  it('should render a button with onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const button = screen.getByRole('button')
    button.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onKeyDown', () => {
    const onKeyDown = jest.fn()
    render(<Button onKeyDown={onKeyDown}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
    expect(onKeyDown).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onKeyUp', () => {
    const onKeyUp = jest.fn()
    render(<Button onKeyUp={onKeyUp}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.keyUp(button, { key: 'Enter', code: 'Enter' })
    expect(onKeyUp).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseDown', () => {
    const onMouseDown = jest.fn()
    render(<Button onMouseDown={onMouseDown}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseDown(button)
    expect(onMouseDown).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseUp', () => {
    const onMouseUp = jest.fn()
    render(<Button onMouseUp={onMouseUp}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseUp(button)
    expect(onMouseUp).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseEnter', () => {
    const onMouseEnter = jest.fn()
    render(<Button onMouseEnter={onMouseEnter}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseEnter(button)
    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseLeave', () => {
    const onMouseLeave = jest.fn()
    render(<Button onMouseLeave={onMouseLeave}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseLeave(button)
    expect(onMouseLeave).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseOver', () => {
    const onMouseOver = jest.fn()
    render(<Button onMouseOver={onMouseOver}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseOver(button)
    expect(onMouseOver).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onMouseOut', () => {
    const onMouseOut = jest.fn()
    render(<Button onMouseOut={onMouseOut}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.mouseOut(button)
    expect(onMouseOut).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onFocus', () => {
    const onFocus = jest.fn()
    render(<Button onFocus={onFocus}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.focus(button)
    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  it('should render a button with onBlur', () => {
    const onBlur = jest.fn()
    render(<Button onBlur={onBlur}>Click me</Button>)
    const button = screen.getByRole('button')
    fireEvent.blur(button)
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  it('should render a button with aria-*', () => {
    render(<Button aria-label="Click me">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Click me')
  })

  it('should render a button with data-*', () => {
    render(<Button data-attribute="attribute">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-attribute', 'attribute')
  })

  it('should render a button with id', () => {
    render(<Button id="button">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('id', 'button')
  })

  it('should render a button with name', () => {
    render(<Button name="button">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('name', 'button')
  })

  it('should render a button with title', () => {
    render(<Button title="button">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('title', 'button')
  })

  it('should render a button with className', () => {
    render(<Button className="extra-class">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('extra-class')
  })

  it('should render a button with style', () => {
    render(<Button style={{ color: 'red' }}>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle('color: red')
  })

  it('should render a button with ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Click me</Button>)
    const button = screen.getByRole('button')
    expect(ref.current).toBe(button)
  })

  it('should render a button with children', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Click me')
  })

  it('should render a button with type', () => {
    render(<Button type="button">Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('should render a button with tabIndex', () => {
    render(<Button tabIndex={1}>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('tabindex', '1')
  })
})
