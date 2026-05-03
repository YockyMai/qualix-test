import { useEffect } from 'react'

import { Portal } from '../portal'
import type { ModalProps } from './modal.types'

export const Modal = ({
  children,
  open,
  onClose,
  title,
  className,
  onClick,
  ...props
}: ModalProps) => {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <Portal>
      <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
        <button
          type='button'
          className='absolute inset-0 bg-black/50'
          onClick={onClose}
          aria-label='Close'
        />
        <div
          role='dialog'
          aria-modal
          className={`relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md bg-white p-6 shadow-lg ${className ?? ''}`}
          {...props}
          onClick={(e) => {
            onClick?.(e)
            e.stopPropagation()
          }}
        >
          {title != null && title !== '' && (
            <h2 className='mb-4 text-lg font-semibold text-gray-900'>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </Portal>
  )
}
