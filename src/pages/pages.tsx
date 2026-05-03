import { Navigate, Route, Routes } from 'react-router'

import { AppLayout } from '@/shared/ui/app-layout'
import { Header } from '@/widgets/header'

import { ROUTES } from '../shared/router'
import { RequestPage } from './request'
import { RequestCreatePage } from './request-create'
import { RequestsPage } from './requests'

export const Pages = () => {
  return (
    <Routes>
      <Route path={'*'} element={<Navigate to={ROUTES.REQUESTS} />} />
      <Route element={<AppLayout header={<Header />} />}>
        <Route path={ROUTES.REQUEST(':id')} element={<RequestPage />} />
        <Route path={ROUTES.REQUESTS} element={<RequestsPage />} />
        <Route path={ROUTES.REQUEST_CREATE} element={<RequestCreatePage />} />
      </Route>
    </Routes>
  )
}
