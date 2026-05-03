export const ROUTES = {
  REQUESTS: '/requests',
  REQUEST: (id: string) => `/requests/${id}`,
  REQUEST_CREATE: '/requests/new'
} as const
