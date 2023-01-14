import { forwardRef } from 'react'

import objStr from 'obj-str'

import styles from './styles.module.scss'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  destructive?: boolean
  hintText?: string
  icon?: {
    leading?: React.ReactNode
    trailing?: React.ReactNode
  }
  textLabel?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ destructive = false, icon, textLabel, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        {!!textLabel && <label>{textLabel}</label>}

        <div
          className={objStr({
            [styles['input-field']]: true,
            [styles['input-field--icon-leading']]: !!icon?.leading,
            [styles['input-field--icon-trailing']]: !!icon?.trailing,
            [styles['input-field--destructive']]: destructive,
          })}
        >
          {icon?.leading}
          <input
            {...rest}
            ref={ref}
            className={objStr({
              [styles['input']]: true,
              [styles['input--icon-leading']]: !!icon?.leading,
              [styles['input--icon-trailing']]: !!icon?.trailing,
            })}
          />
          {icon?.trailing}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
