import { Link } from 'react-router'

import { $request } from '@/entities/request'
import { RequestCard } from '@/entities/request'
import { ROUTES } from '@/shared/router'
import { Button } from '@/shared/ui/button'

export const RequestsList = () => {
  const { requests } = $request()

  return (
    <div>
      <p className='mb-5 text-center text-2xl font-bold'>Список заявок</p>

      {requests.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {requests.map((request) => (
            <Link to={ROUTES.REQUEST(request.id)} key={request.id}>
              <RequestCard request={request} />
            </Link>
          ))}
        </div>
      ) : (
        <p className='text-center'>Заявок нет</p>
      )}

      <Link className='mx-auto mt-5 block w-fit' to={ROUTES.REQUEST_CREATE}>
        <Button>Создать заявку</Button>
      </Link>
    </div>
  )
}
