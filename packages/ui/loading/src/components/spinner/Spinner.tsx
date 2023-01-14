import styles from './styles.module.scss'

//create props for Spinner using React.ComponentPropsWithoutRef
export type SpinnerProps = React.ComponentPropsWithoutRef<'div'>

/**
 * Spinner component
 *
 * use css variable --meta-spinner-size to change size
 *
 * @example
 * .spinner {
 *  --meta-spinner-size: 20px;
 * }
 */
const Spinner = ({ ...props }: SpinnerProps) => {
  return <div className={`${styles.spinner} ${props.className}`} {...props} />
}

export default Spinner
