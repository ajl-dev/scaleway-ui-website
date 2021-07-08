import { Button, Icon, Tooltip } from '@scaleway/ui'
import React from 'react'
import useClipboard from 'react-use-clipboard'

type CopyButtonProps = {
  text: string
}

const CopyButton = ({ text }: CopyButtonProps): JSX.Element => {
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 2000,
  })

  return (
    <Tooltip text={isCopied ? 'Copied!' : 'Copy'}>
      <Button
        icon={<Icon name={isCopied ? 'check' : 'copy-content'} size={20} />}
        variant="secondary"
        ml={2}
        onClick={setCopied}
        size="xsmall"
      />
    </Tooltip>
  )
}

export default CopyButton
