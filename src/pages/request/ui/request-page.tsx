import dayjs from 'dayjs'
import { Navigate, useParams } from 'react-router'
import { useStore } from 'zustand'

import { $request, REQUEST_CATEGORIES_MAP_LABELS } from '@/entities/request'
import { RequestDelete } from '@/features/request-delete'
import { RequestEdit } from '@/features/request-edit'
import { ROUTES } from '@/shared/router'

export const RequestPage = () => {
  const { id } = useParams<{ id: string }>()

  const request = useStore($request, ({ requests }) =>
    requests.find((request) => request.id === id)
  )

  if (!request) {
    return <Navigate to={ROUTES.REQUESTS} />
  }

  return (
    <div>
      <p className='mb-5 text-2xl font-bold'> Название: {request.title}</p>
      <p>Описание: {request.description}</p>
      <p>Категория: {REQUEST_CATEGORIES_MAP_LABELS[request.category]}</p>
      <p>
        Дата создания: {dayjs(request.createdAt).format('DD.MM.YYYY HH:mm')}
      </p>

      <div className='flex justify-end gap-2'>
        <RequestDelete requestId={id} />
        <RequestEdit requestId={id} />
      </div>
    </div>
  )
}
