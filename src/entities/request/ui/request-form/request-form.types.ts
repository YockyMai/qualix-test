import type { Request } from '../../model/request.types'

export type RequestFormProps = {
  initialValues?: Request
  type: 'create' | 'update'
  onSubmit: (data: Request) => void
}

export type RequestFormInput = {
  title: string
  description: string
  category: string
}
