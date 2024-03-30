import { classNames } from '@/utils/classNames'
import { InputHTMLAttributes, forwardRef } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export type InputProps = NativeProps & {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly, error, ...restProps }, ref) => {
    return (
      <input
        type="text"
        className={classNames([
          'block w-full h-12 px-2 border-2 rounded focus-visible:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:ring-2 focus:ring-orange-500',
          readOnly && 'bg-gray-200',
          error
            ? 'border-red-700 bg-red-700/10'
            : 'border-neutral-800 hover:border-black focus-visible:border-black',
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
