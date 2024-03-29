import { classNames } from '@/utils/classNames'
import { ComponentPropsWithoutRef } from 'react'

type NativeProps = ComponentPropsWithoutRef<'button'>

export type ButtonProps = NativeProps

export const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button
      className={classNames([
        'block w-full px-4 h-12 rounded transition-colors font-bold text-center text-white bg-neutral-800 hover:bg-black focus-visible:bg-black focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:ring-2 focus:ring-orange-500',
        className,
      ])}
      {...restProps}
    >
      {children}
    </button>
  )
}
