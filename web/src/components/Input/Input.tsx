import { classNames } from '@/utils/classNames'
import { InputHTMLAttributes, forwardRef } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export type InputProps = NativeProps

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly, ...restProps }, ref) => {
    return (
      <input
        type="text"
        className={classNames([
          'block w-full h-12 px-2 border-2 border-neutral-800 hover:border-black focus-visible:border-black rounded focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:ring-2 focus:ring-orange-500',
          readOnly && 'bg-gray-200',
          className,
        ])}
        readOnly={readOnly}
        ref={ref}
        {...restProps}
      />
    )
  },
)

Input.displayName = 'Input'
