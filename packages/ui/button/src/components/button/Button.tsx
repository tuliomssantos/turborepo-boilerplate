import React from 'react'

import { forwardRef } from 'react'

import objStr from 'obj-str'

import styles from './styles.module.scss'

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

/**
 * Button component
 * @param {ButtonProps} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.hierarchy='primary'] - 'primary' | 'secondary' | 'neutral'
 * @param {string} [props.variant='filled'] - 'filled' | 'outlined' | 'text'
 * @param {string} [props.buttonBorderRadius='sm'] - 'sm' | 'md' | 'lg' | 'xl' | 'none'
 * @param {boolean} [props.destructive=false] - true | false
 * @param {boolean} [props.disabled=false] - true | false
 * @param {string} [props.size='sm'] - 'sm' | 'md' | 'lg'
 * @param {string} [props.type='button'] - 'button' | 'submit' | 'reset'
 * @param {React.Ref<HTMLButtonElement>} ref - React ref
 * @returns {JSX.Element}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      buttonBorderRadius = 'sm',
      destructive = false,
      disabled = false,
      hierarchy = 'primary',
      size = 'sm',
      type = 'submit',
      variant = 'filled',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={`${objStr({
          [styles['button']]: true,
          [styles[`button--radius-${buttonBorderRadius}`]]: true,
          [styles['button--destructive']]: destructive,
          [styles[`button__${variant}--${hierarchy}`]]: true,
          [styles[`button--${size}`]]: true,
        })} ${rest.className}`}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
