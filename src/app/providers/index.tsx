import type { PropsWithChildren } from 'react'

import { ReactRouterProvider } from './react-router'

export const Providers = ({ children }: PropsWithChildren) => {
  return <ReactRouterProvider>{children}</ReactRouterProvider>
}
