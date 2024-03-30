import { classNames } from '@/utils/classNames'
import { ComponentPropsWithoutRef } from 'react'

type Native = ComponentPropsWithoutRef<'p'>

export type HelperTextProps = Native

export const HelperText = ({
  children,
  className,
  ...restProps
}: HelperTextProps) => {
  return (
    <p
      className={classNames([
        'text-sm min-h-6 font-bold text-red-800',
        className,
      ])}
      {...restProps}
    >
      {children}
    </p>
  )
}
