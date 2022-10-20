import React, { useCallback, useEffect, useState } from 'react'

import { Button, Dialog, YStack } from 'tamagui'
// import Spinner from 'src/view/shared/Spinner';

export type ModalButton = {
  text: string | React.ReactNode
  color: 'primary' | 'secondary' | (string & {})
  onClick?: () => void
}
export type BaseModalProps = {
  autoClose?: boolean
  title?: string
  message?: string
  isOpen?: boolean
  onClose?: () => void
  buttons?: (ModalButton | ('confirm' | 'cancel'))[]
  onConfirmClick?: () => void | Promise<void>
  onCancelClick?: () => void | Promise<void>
  children?: any
}

export const BaseModal = ({
  title,
  isOpen,
  onClose,
  autoClose = true,
  children,
  buttons,
  onConfirmClick,
  onCancelClick,
  message,
}: BaseModalProps) => {
  const [show, setShow] = useState(isOpen)

  useEffect(() => {
    setShow(isOpen)
  }, [isOpen])

  const _onClose = useCallback(() => {
    setShow(false)
  }, [])

  return (
    <Dialog
      modal
      open={show}
      onOpenChange={(open) => {
        if (!open) {
          onClose?.()
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay animation="quick" o={0.8} enterStyle={{ o: 0 }} exitStyle={{ o: 0 }} />
        <Dialog.Content
          bordered
          elevate
          key="content"
          backgroundColor={'$backgroundLight'}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>ghisdf sadihgf iads fiagsy ifc adsi{message}</Dialog.Description>
          {children}
          <YStack mt="$10">
            <Button onPress={onConfirmClick} id="modal-cancel-button" color="secondary">
              Click me
            </Button>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )

  // return ReactDOM.createPortal(
  //   portalContent,
  //   document.getElementById('modal-root')!
  // )
}

export default BaseModal
