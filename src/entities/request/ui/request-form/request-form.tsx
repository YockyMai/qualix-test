import { yupResolver } from '@hookform/resolvers/yup'
import { nanoid } from 'nanoid'
import { useMemo } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Selector, type SelectorOption } from '@/shared/ui/selector'

import {
  REQUEST_CATEGORIES,
  REQUEST_CATEGORIES_MAP_LABELS
} from '../../model/request.const'
import { REQUEST_TYPES } from './request-form.const'
import { requestFormSchema } from './request-form.schema'
import type { RequestFormInput, RequestFormProps } from './request-form.types'

export const RequestForm = ({
  initialValues,
  type,
  onSubmit
}: RequestFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(requestFormSchema)
  })

  const onSubmitForm: SubmitHandler<RequestFormInput> = (data) => {
    if (type === REQUEST_TYPES.CREATE) {
      onSubmit?.({
        createdAt: new Date(),
        id: nanoid(),
        title: data.title,
        description: data.description,
        category: data.category
      })
    } else {
      onSubmit?.({
        id: initialValues?.id,
        title: data.title,
        description: data.description,
        category: data.category,
        createdAt: initialValues?.createdAt
      })
    }
  }

  const categoryOptions = useMemo<SelectorOption[]>(
    () =>
      Object.values(REQUEST_CATEGORIES).map((category) => ({
        value: category,
        label: REQUEST_CATEGORIES_MAP_LABELS[category]
      })),
    []
  )

  return (
    <form
      className='rounded p-5 drop-shadow-2xl'
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <p className='text-2xl font-bold'>
        {type === REQUEST_TYPES.CREATE
          ? 'Создание заявки'
          : 'Редактирование заявки'}
      </p>

      <div className='flex w-full flex-col gap-4 py-6'>
        <div className='flex flex-col gap-2'>
          <p>Название заявки</p>
          <Input {...register('title')} placeholder='Название заявки' />
        </div>
        {errors.title && (
          <p className='text-red-600'>{errors.title?.message}</p>
        )}
        <div className='flex flex-col gap-2'>
          <p>Описание заявки</p>
          <Input {...register('description')} placeholder='Описание заявки' />
          {errors.description && (
            <p className='text-red-600'>{errors.description?.message}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <p>Категория заявки</p>
          <Selector options={categoryOptions} {...register('category')} />
          {errors.category && (
            <p className='text-red-600'>{errors.category?.message}</p>
          )}
        </div>
      </div>

      <Button type='submit'>
        {type === REQUEST_TYPES.CREATE ? 'Создать' : 'Обновить'}
      </Button>
    </form>
  )
}
