export type Request = {
  id: string
  title: string
  description: string
  createdAt: Date
  category: string
}

type RequestsStoreState = { requests: Request[] }

type RequestsStoreActions = {
  createRequest: (newRequest: Request) => void
  updateRequest: (updatedRequest: Request) => void
  deleteRequest: (requestId: string) => void
}

export type RequestsStore = RequestsStoreActions & RequestsStoreState

export type RequestCategory = 'question' | 'feature' | 'bug'
