import { forwardRef } from 'react'

import type { SelectorProps } from './selector.types'

export const Selector = forwardRef<HTMLSelectElement, SelectorProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${className ?? ''}`}
        {...props}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }
)
