import { Pages } from '@/pages/pages'

import './app.css'
import { Providers } from './providers'

export const App = () => {
  return (
    <Providers>
      <Pages />
    </Providers>
  )
}
