import { CopyToClipboard } from '@/components/CopyToClipboard/CopyToClipboard'
import { useShortURLStore } from '@/hooks/useShortURL'
import { useEffect } from 'react'
import { MdChevronLeft as ChevronLeftIcon } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export const ShortURL = () => {
  const { shortURL } = useShortURLStore((state) => state)
  const navigate = useNavigate()

  useEffect(() => {
    if (!shortURL) {
      navigate('/')
    }
  }, [])

  return (
    <div className="grow flex items-center justify-center">
      <div className="max-w-lg w-full m-auto">
        <CopyToClipboard value={shortURL} />

        <p className="mt-8">
          <Link
            to="/"
            className="flex items-center justify-center py-2 border border-current rounded text-center"
          >
            <ChevronLeftIcon
              className="block shrink-0 mr-1 size-6"
              aria-hidden={true}
            />

            <span className="block shrink-0">Register anoter URL</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
