import { FastifyRequest } from 'fastify'

export const createShortURL = (request: FastifyRequest, code: string) => {
  const { hostname, protocol } = request

  return `${protocol}://${hostname}/${code}`
}
