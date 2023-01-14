import { render, screen } from 'jest-common/react-testing-library'

import Typography from './Typography'

describe('Typography', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        veritatis soluta blanditiis ut, mollitia nisi ex architecto velit,
        expedita, iure illum quae perferendis? Illum beatae minima quo
        perferendis vero dolorum.
      </Typography>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it.each([
    'display-2xl',
    'display-xl',
    'display-lg',
    'display-md',
    'display-sm',
    'display-xs',
    'text-xl',
    'text-lg',
    'text-md',
    'text-sm',
    'text-xs',
  ])('should render correctly with variant %s', variant => {
    const { asFragment } = render(
      // @ts-expect-error - we're testing all variants
      <Typography variant={variant}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        veritatis soluta blanditiis ut, mollitia nisi ex architecto velit,
        expedita, iure illum quae perferendis? Illum beatae minima quo
        perferendis vero dolorum.
      </Typography>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it.each(['regular', 'medium', 'semi-bold', 'bold'])(
    'should render correctly with weight %s',
    weight => {
      const { asFragment } = render(
        // @ts-expect-error - we're testing all weights
        <Typography weight={weight}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          veritatis soluta blanditiis ut, mollitia nisi ex architecto velit,
          expedita, iure illum quae perferendis? Illum beatae minima quo
          perferendis vero dolorum.
        </Typography>
      )
      expect(asFragment()).toMatchSnapshot()
    }
  )

  it('should render correctly with className', () => {
    render(
      <Typography className="test-class">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        veritatis soluta blanditiis ut, mollitia nisi ex architecto velit,
        expedita, iure illum quae perferendis? Illum beatae minima quo
        perferendis vero dolorum.
      </Typography>
    )

    const typography = screen.getByText(
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum veritatis soluta blanditiis ut, mollitia nisi ex architecto velit, expedita, iure illum quae perferendis? Illum beatae minima quo perferendis vero dolorum.'
    )

    expect(typography).toHaveClass('test-class')
  })

  it('should render correctly with as prop', () => {
    render(
      <Typography as="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        veritatis soluta blanditiis ut, mollitia nisi ex architecto velit,
        expedita, iure illum quae perferendis? Illum beatae minima quo
        perferendis vero dolorum.
      </Typography>
    )

    //test if informed as prop is being applied
    const typography = screen.getByText(
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum veritatis soluta blanditiis ut, mollitia nisi ex architecto velit, expedita, iure illum quae perferendis? Illum beatae minima quo perferendis vero dolorum.'
    )

    expect(typography.tagName).toBe('P')
  })
})
