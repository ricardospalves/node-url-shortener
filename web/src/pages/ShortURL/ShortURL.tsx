import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useId, useRef, useState } from 'react'
import { MdCopyAll as CopyIcon } from 'react-icons/md'

export const ShortURL = () => {
  const fieldId = useId()
  const fieldRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)

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
            value="lorem ipsum"
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
      </div>
    </div>
  )
}
