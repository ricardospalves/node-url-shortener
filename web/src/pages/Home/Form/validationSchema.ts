import { z as zod } from 'zod'

const URL_INVALID_MESSAGE = 'Invalid URL.'

export const validationSchema = zod.object({
  url: zod
    .string({
      required_error: URL_INVALID_MESSAGE,
      invalid_type_error: URL_INVALID_MESSAGE,
    })
    .min(1, 'Required field.')
    .url(URL_INVALID_MESSAGE),
})
