import { BaseModal, BaseModalProps } from '@my/ui'
import React from 'react'
import { useContext, useState } from 'react'

type ModalState = {
  isShown?: boolean
  title?: string
  message?: string
  showModal: (props: BaseModalProps) => void
  hideModal: () => void
}

export const useModalHook = () => {
  // const [isModalShown, setIsModalShown] = useState(false)
  // const [modalTitle, setModalTitle] = useState<string | undefined>(undefined)
  const [modalProps, setModalProps] = useState<BaseModalProps>()
  // const [modalMessage, setModalMessage] = useState<string | undefined>(
  // undefined
  // )

  const showModal = (props: BaseModalProps) => {
    // setIsModalShown(true)
    // alert("inside")
    setModalProps({ ...props, isOpen: true })
  }

  const hideModal = () => {
    // setIsModalShown(false)
    setModalProps({isOpen:false})
  }

  return {
    // isModalShown,
    modalProps,
    showModal,
    hideModal,
  }
}

type UseModalHook = ReturnType<typeof useModalHook>

//@ts-ignore
export const ModalContext = React.createContext<UseModalHook>({})

export const ModalContextProvider = ({ children }: any) => {
  const modal = useModalHook()
  console.log("modal value is")
  return (
    <ModalContext.Provider value={modal}>
      <>
        {children}
        <BaseModal {...modal.modalProps} />
      </>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
