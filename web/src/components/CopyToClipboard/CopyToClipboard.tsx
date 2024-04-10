import { useId, useRef, useState } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { MdCopyAll as CopyIcon } from 'react-icons/md'

export type CopyToClipboardProps = {
  value: string
}

export const CopyToClipboard = ({ value }: CopyToClipboardProps) => {
  const fieldId = useId()
  const fieldRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)

  return (
    <div>
      <label htmlFor={fieldId} className="block">
        Short URL
      </label>

      <div className="grid sm:grid-cols-12 gap-2">
        <Input
          type="text"
          className="sm:col-span-9 border-dashed"
          id={fieldId}
          ref={fieldRef}
          value={value}
          readOnly
        />

        <Button
          type="submit"
          className="sm:col-span-3"
          StartIcon={copied ? undefined : CopyIcon}
          onClick={() => {
            ;(async () => {
              try {
                await navigator.clipboard.writeText(value)

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
  )
}
