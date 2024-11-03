'use client'

import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { CompleteModal } from '@/components/modals/complete-modal'
import { QuickWriteModal } from '@/components/modals/quick-write-modal'

import { ModalContext } from '@/context/modal-context'

export enum ModalTypes {
	QUICK_WRITE = 'QUICK_WRITE',
	COMPLETE = 'COMPLETE'
}

const MODAL_COMPONENTS = {
	[ModalTypes.QUICK_WRITE]: QuickWriteModal,
	[ModalTypes.COMPLETE]: CompleteModal
}

type TModalStore = {
	modalType: ModalTypes
	modalProps?: Omit<any, 'open' | 'onClose'>
}

export const Modals: React.FC<PropsWithChildren> = ({ children }) => {
	const [{ modalType, modalProps }, setModalStore] = useState<TModalStore>({
		modalType: null
	})
	// const { fix, unfix } = useFixHtml()

	const showModal = useCallback(
		(modalType: ModalTypes, modalProps: Omit<any, 'open' | 'onClose'>) => {
			setModalStore({
				modalType,
				modalProps
			})
			// fix()
		},
		[modalType, modalProps]
	)

	const hideModal = useCallback(() => {
		setModalStore({
			modalType: null,
			modalProps: null
		})
		// unfix()
	}, [])

	const ProviderValue = useMemo(
		() => ({ showModal, hideModal, currentModalType: modalType }),
		[showModal, hideModal, modalType]
	)

	const CurrentModal = useMemo(() => MODAL_COMPONENTS[modalType], [modalType])

	return (
		<ModalContext.Provider value={ProviderValue}>
			{children}
			{modalType && (
				<CurrentModal
					open={true}
					onClose={hideModal}
					{...modalProps}
				/>
			)}
		</ModalContext.Provider>
	)
}
