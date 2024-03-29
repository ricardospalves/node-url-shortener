import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useId } from 'react'

export const Form = () => {
  const fieldId = useId()

  return (
    <form className="max-w-lg w-full m-auto">
      <label htmlFor={fieldId} className="block">
        URL
      </label>

      <div className="grid grid-cols-12 gap-2">
        <Input
          type="text"
          className="col-span-9"
          id={fieldId}
          inputMode="url"
        />

        <Button type="submit" className="col-span-3">
          Shorten
        </Button>
      </div>
    </form>
  )
}
