import { mixed, object, string } from 'yup'

import { REQUEST_CATEGORIES } from '../../model/request.const'

export const requestFormSchema = object({
  title: string()
    .required('Обязательное поле')
    .max(100, 'Максимальная длина 100 символов'),
  description: string()
    .required('Обязательное поле')
    .max(1000, 'Максимальная длина 1000 символов'),
  category: mixed()
    .required('Обязательное поле')
    .oneOf(Object.values(REQUEST_CATEGORIES), 'Неверная категория')
})
