import { ComponentPropsWithoutRef } from 'react'

type NativeProps = ComponentPropsWithoutRef<'a'>

type NativePropsToOmit = 'target' | 'rel'

export type ExternalLinkProps = Omit<NativeProps, NativePropsToOmit>

export const ExternalLink = ({ ...props }: ExternalLinkProps) => {
  return <a target="_blank" rel="noopener" {...props} />
}
