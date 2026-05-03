import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'

export const ReactRouterProvider = ({ children }: PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
