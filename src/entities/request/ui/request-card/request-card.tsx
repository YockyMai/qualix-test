import dayjs from 'dayjs'

import type { RequestCardProps } from './request-card.types'

export const RequestCard = ({ request }: RequestCardProps) => {
  return (
    <div className='flex flex-col gap-2 rounded-lg border p-4 shadow-md'>
      <p className='text-lg font-bold'>Название: {request.title}</p>
      <p>
        Дата создания: {dayjs(request.createdAt).format('DD.MM.YYYY HH:mm')}
      </p>
    </div>
  )
}
