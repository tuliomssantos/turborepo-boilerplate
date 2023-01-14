'use client'

export interface SidebarProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
}

import styles from './styles.module.scss'

function Sidebar({ children, ...rest }: SidebarProps) {
  return (
    <div {...rest} className={`${styles.sidebar} ${rest.className || ''}`}>
      {children}
    </div>
  )
}

export default Sidebar
