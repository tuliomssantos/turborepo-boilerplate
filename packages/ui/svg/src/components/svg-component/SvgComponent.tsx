export interface SvgComponentProps
  extends React.ComponentPropsWithoutRef<'svg'> {
  IconComponent: React.ComponentType
}

export default function SvgComponent({
  IconComponent,
  ...props
}: SvgComponentProps) {
  return <IconComponent {...props} />
}
