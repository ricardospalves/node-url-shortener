import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { getErrorMessageResponse } from './utils/getErrorMessageResponse'
import { parseZodIssues } from './utils/parseZodIssues'

export const errorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  if (error instanceof ZodError) {
    const invalidFieldsError = getErrorMessageResponse('invalidFields')

    return reply.status(invalidFieldsError.statusCode).send({
      ...invalidFieldsError,
      invalidFields: parseZodIssues(error),
    })
  }

  const internalServerError = getErrorMessageResponse('internalServerError')

  return reply.status(internalServerError.statusCode).send(internalServerError)
}
