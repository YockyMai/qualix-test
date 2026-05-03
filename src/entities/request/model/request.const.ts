export const REQUEST_CATEGORIES = {
  QUESTION: 'question',
  FEATURE: 'feature',
  BUG: 'bug'
} as const

export const REQUEST_CATEGORIES_MAP_LABELS = {
  [REQUEST_CATEGORIES.QUESTION]: 'Вопрос',
  [REQUEST_CATEGORIES.FEATURE]: 'Функция',
  [REQUEST_CATEGORIES.BUG]: 'Баг'
} as const
