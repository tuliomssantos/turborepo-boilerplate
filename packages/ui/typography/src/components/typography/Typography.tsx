import objStr from 'obj-str'

import styles from './styles.module.scss'

export type TypographyVariant =
  | 'display-2xl'
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'display-xs'
  | 'text-xl'
  | 'text-lg'
  | 'text-md'
  | 'text-sm'
  | 'text-xs'

export type TypographyWeight = 'regular' | 'medium' | 'semi-bold' | 'bold'

export type TypographyProps<C extends React.ElementType> = {
  as?: C
  children: React.ReactNode
  variant?: TypographyVariant
  weight?: TypographyWeight
} & React.ComponentPropsWithoutRef<C>

const Typography = <C extends React.ElementType = 'span'>({
  as,
  children,
  variant = 'text-md',
  weight = 'medium',
  ...rest
}: TypographyProps<C>) => {
  const Component = as || 'span'

  return (
    <Component
      {...rest}
      //only set rest.className if it exists
      className={objStr({
        [styles.typography]: true,
        [styles[`typography__${variant}`]]: true,
        [styles[`typography__${weight}`]]: true,
        [rest?.className]: rest?.className,
      })}
    >
      {children}
    </Component>
  )
}

export default Typography
