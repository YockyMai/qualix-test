import { Link } from 'react-router'

import { ROUTES } from '@/shared/router'

export const Header = () => {
  return (
    <header className='flex bg-slate-100 px-5 py-3 shadow-md'>
      <Link to={ROUTES.REQUESTS}>
        <p>Все заявки</p>
      </Link>
    </header>
  )
}
