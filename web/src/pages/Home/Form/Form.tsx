import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { validationSchema } from './validationSchema'
import { createShortURLService } from '@/services/api/createShortURL'
import { useNavigate } from 'react-router-dom'
import { HelperText } from '@/components/HelperText'
import { useShortURLStore } from '@/hooks/useShortURL'

type FormFields = {
  url: string
}

export const Form = () => {
  const fieldId = useId()
  const helperTextId = useId()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(validationSchema),
  })
  const hasError = Boolean(errors.url?.message)
  const { setShortURL } = useShortURLStore((state) => state)

  useEffect(() => {
    setShortURL('')
  }, [])

  const onSubmit = async ({ url }: FormFields) => {
    try {
      const response = await createShortURLService({ url })
      const responseData = response.data

      setShortURL(responseData.shortUrl)
      navigate('/short-url')
    } catch (exception) {
      console.error(exception)
    }
  }

  return (
    <form className="max-w-lg w-full m-auto" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={fieldId} className="block">
        URL
      </label>

      <div className="grid sm:grid-cols-12 gap-2">
        <Input
          type="text"
          className="sm:col-span-9"
          id={fieldId}
          inputMode="url"
          error={hasError}
          aria-describedby={hasError ? helperTextId : undefined}
          aria-invalid={hasError || undefined}
          placeholder="https://mydomain.com"
          {...register('url')}
        />

        <Button type="submit" className="sm:col-span-3">
          Shorten
        </Button>
      </div>

      <HelperText id={helperTextId} className="mt-1">
        {errors.url?.message}
      </HelperText>
    </form>
  )
}
