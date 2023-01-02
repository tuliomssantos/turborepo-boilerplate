export type ButtonHierarchy = 'primary' | 'secondary' | 'neutral'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ButtonBorderRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ButtonVariant = 'filled' | 'outlined'

export type ButtonDestructive = boolean

export type BaseButtonProps = {
  buttonBorderRadius?: ButtonBorderRadius
  destructive?: ButtonDestructive
  disabled?: boolean
  hierarchy?: ButtonHierarchy
  size?: ButtonSize
  variant?: ButtonVariant
}

export interface ButtonProps
  extends React.ComponentPropsWithRef<'button'>,
    BaseButtonProps {
  children: React.ReactNode
}

export type StyledButtonProps = Required<BaseButtonProps>
