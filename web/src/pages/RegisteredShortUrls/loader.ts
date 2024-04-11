import { getShortURLs } from '@/services/api/getShortURLs'
import { LoaderFunction } from 'react-router-dom'

export const registeredShortUrlsLoaderFunction: LoaderFunction =
  async (): Promise<RegisteredShortUrlsLoader> => {
    const response = await getShortURLs()
    const responseData = response.data

    return {
      shortURLs: responseData.map(({ id, shortURL, originalURL }) => {
        return {
          id,
          shortURL,
          originalURL,
        }
      }),
    }
  }
