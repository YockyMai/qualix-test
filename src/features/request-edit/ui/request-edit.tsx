import { useState } from 'react'
import { useStore } from 'zustand'

import {
  $request,
  REQUEST_TYPES,
  RequestForm,
  type Request
} from '@/entities/request'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'

import type { RequestEditProps } from './request-edit.types'

export const RequestEdit = ({ requestId }: RequestEditProps) => {
  const editableRequest = useStore($request, ({ requests }) =>
    requests.find((request) => request.id === requestId)
  )

  const [open, setOpen] = useState(false)
  const { updateRequest } = $request()

  const onSubmit = (data: Request) => {
    updateRequest(data)
    setOpen(false)
  }

  if (!editableRequest) return null

  return (
    <>
      <Button onClick={() => setOpen(true)}>Редактировать заявку</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <RequestForm
          initialValues={editableRequest}
          type={REQUEST_TYPES.UPDATE}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
