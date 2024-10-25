import { createContext, useContext } from 'react'

import { ModalTypes } from '@/components/modals'

export type TModalContextValue = {
	showModal: <T extends ModalTypes>(
		modalType: T,
		modalProps?: Omit<any, 'open' | 'onClose'>
	) => void
	hideModal: () => void
	currentModalType: ModalTypes
}

export const ModalContext = createContext<TModalContextValue>(null)

export const useModal = () => useContext<TModalContextValue>(ModalContext)
