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

      <div className="grid sm:grid-cols-12 gap-2">
        <Input
          type="text"
          className="sm:col-span-9"
          id={fieldId}
          inputMode="url"
        />

        <Button type="submit" className="sm:col-span-3">
          Shorten
        </Button>
      </div>
    </form>
  )
}
