import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useShortURLStore } from '@/hooks/useShortURL'
import { useEffect, useId, useRef, useState } from 'react'
import {
  MdCopyAll as CopyIcon,
  MdChevronLeft as ChevronLeftIcon,
} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export const ShortURL = () => {
  const { shortURL } = useShortURLStore((state) => state)
  const fieldId = useId()
  const fieldRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!shortURL) {
      navigate('/')
    }
  }, [])

  return (
    <div className="grow flex items-center justify-center">
      <div className="max-w-lg w-full m-auto">
        <label htmlFor={fieldId} className="block">
          Short URL
        </label>

        <div className="grid sm:grid-cols-12 gap-2">
          <Input
            type="text"
            className="sm:col-span-9 border-dashed"
            id={fieldId}
            ref={fieldRef}
            value={shortURL}
            readOnly
          />

          <Button
            type="submit"
            className="sm:col-span-3"
            StartIcon={copied ? undefined : CopyIcon}
            onClick={() => {
              ;(async () => {
                try {
                  await navigator.clipboard.writeText(
                    fieldRef.current?.value || '',
                  )

                  fieldRef.current?.select()

                  setCopied(true)
                } catch (error) {
                  console.error('Failed to copy: ', error)
                }
              })()
            }}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>

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
