import { Outlet } from 'react-router'

import type { AppLayoutProps } from './app-layout.types'

export const AppLayout = ({ header }: AppLayoutProps) => {
  return (
    <div>
      {header}
      <div className='mx-auto mt-10 max-w-7xl rounded-2xl bg-slate-50 p-5 shadow-2xl'>
        <Outlet />
      </div>
    </div>
  )
}
