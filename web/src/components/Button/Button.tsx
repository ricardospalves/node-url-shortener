import { classNames } from '@/utils/classNames'
import { ComponentPropsWithoutRef } from 'react'
import { IconBase } from 'react-icons'

type NativeProps = ComponentPropsWithoutRef<'button'>

export type ButtonProps = NativeProps & {
  StartIcon?: typeof IconBase
}

export const Button = ({
  children,
  className,
  StartIcon,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={classNames([
        'flex items-center justify-center gap-2 w-full px-4 h-12 rounded transition-colors font-bold text-center text-white bg-neutral-800 hover:bg-black focus-visible:bg-black focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:ring-2 focus:ring-orange-500',
        className,
      ])}
      {...restProps}
    >
      {StartIcon && (
        <StartIcon className="block shrink-0 size-6" aria-hidden={true} />
      )}
      <span className="block shrink-0">{children}</span>
    </button>
  )
}
