import { useLoaderData } from 'react-router-dom'
import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { ExternalLink } from '@/components/ExternalLink'

export const RegisteredShortUrls = () => {
  const { shortURLs } = useLoaderData() as RegisteredShortUrlsLoader

  return (
    <div className="border border-gray-300 divide-y divide-gray-300">
      {shortURLs.map(({ id, shortURL, originalURL }) => {
        return (
          <div key={id} className="p-4">
            <div className="max-w-lg w-full mx-auto">
              <CopyToClipboard value={shortURL} />

              <p className="flex items-start mt-1 gap-1">
                <strong className="shrink-0">Original URL:</strong>{' '}
                <ExternalLink
                  href={originalURL}
                  className="break-words underline text-blue-900"
                >
                  {originalURL}
                </ExternalLink>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
