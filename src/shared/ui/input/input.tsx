import { forwardRef } from 'react'

import type { InputProps } from './input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${className ?? ''}`}
        {...props}
      />
    )
  }
)
