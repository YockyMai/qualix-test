import { useNavigate } from 'react-router'

import { $request } from '@/entities/request'
import { ROUTES } from '@/shared/router'
import { Button } from '@/shared/ui/button'

import type { RequestDeleteProps } from './request-delete.types'

export const RequestDelete = ({ requestId }: RequestDeleteProps) => {
  const navigate = useNavigate()

  const { deleteRequest } = $request()

  const handleDelete = () => {
    deleteRequest(requestId)
    navigate(ROUTES.REQUESTS)
  }

  return <Button onClick={handleDelete}>Удалить заявку</Button>
}
