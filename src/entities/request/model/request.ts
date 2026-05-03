import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { RequestsStore } from './request.types'

// для удобства поиска обычно использую неймнг через ${name} вместо useStore
export const $request = create<RequestsStore>()(
  persist(
    (set) => ({
      requests: [],
      createRequest: (newRequest) =>
        set((state) => ({ requests: [...state.requests, newRequest] })),
      updateRequest: (updatedRequest) =>
        set((state) => ({
          requests: state.requests.map((request) =>
            request.id === updatedRequest.id ? updatedRequest : request
          )
        })),
      deleteRequest: (requestId) =>
        set((state) => ({
          requests: state.requests.filter((request) => request.id !== requestId)
        }))
    }),
    {
      name: 'requests'
    }
  )
)
