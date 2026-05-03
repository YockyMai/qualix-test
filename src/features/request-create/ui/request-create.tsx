import { useNavigate } from 'react-router'

import {
  $request,
  REQUEST_TYPES,
  RequestForm,
  type Request
} from '@/entities/request'
import { ROUTES } from '@/shared/router'

export const RequestCreate = () => {
  const navigate = useNavigate()
  const { createRequest } = $request()

  const onSubmit = (data: Request) => {
    createRequest(data)
    navigate(ROUTES.REQUESTS)
  }
  return (
    <div>
      <RequestForm type={REQUEST_TYPES.CREATE} onSubmit={onSubmit} />
    </div>
  )
}
