import { forwardRef } from 'react'

import type { ButtonProps } from './button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`block cursor-pointer rounded-md bg-blue-500 p-2 text-white ${className ?? ''}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)
