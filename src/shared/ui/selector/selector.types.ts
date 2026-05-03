import type { ReactNode, SelectHTMLAttributes } from 'react'

export type SelectorOption = {
  value: string
  label: ReactNode
}

export type SelectorProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'children'
> & {
  options: SelectorOption[]
}
