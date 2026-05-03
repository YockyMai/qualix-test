import type { HTMLAttributes, ReactNode } from 'react'

export type ModalProps = {
  children: ReactNode
  open: boolean
  onClose: () => void
  title?: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
