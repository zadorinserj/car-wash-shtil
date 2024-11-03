const from =
	'qwertyuiop[]asdfghjkl;\'zxcvbnm,`@QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>~/'
const to = 'йцукенгшщзхъфывапролджэячсмитьбё"ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ.'

/**
 * Функция для определения как будут конвертироваться символы
 * @param withDot - Указывает на то, будет ли точка "." конвертироваться в "ю". Убираем для полей с кейсами автоподстановки (в паспортных данных)
 * @returns Функция для конвертации английских символ в российские с точкой или без
 */
export const puntoEnRu =
	(withDot = true) =>
	/**
	 * Функция конвертирующая символы (английский -> русский)
	 * @param value - Строка, которую нужно конвертировать
	 * @returns Конвертированная строка
	 */
	(value = '') => {
		if (value && typeof value === 'string') {
			let e = ''

			const fromString = withDot ? `.${from}` : from
			const toString = withDot ? `ю${to}` : to

			for (let i = 0; i < value.length; i++) {
				const char = value?.charAt(i)
				const s = fromString?.indexOf(char)

				// eslint-disable-next-line no-unsafe-optional-chaining
				e += s >= 0 ? toString?.charAt(s) : char
			}

			return e
		}

		return value
	}
