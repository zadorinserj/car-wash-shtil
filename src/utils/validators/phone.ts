const DEFAULT_MESSAGE = 'Телефон указан некорректно. Пример: +7 (901) 123-45-67'

export const BLACK_LIST = [
	'1111111111',
	'2222222222',
	'3333333333',
	'4444444444',
	'5555555555',
	'6666666666',
	'7777777777',
	'8888888888',
	'9999999999',
	'1234567890',
	'9876543210'
]

export const CODE_START_WITH_BLACK_LIST = ['0', '1', '2', '5']

/**
 * Валидатор корректности номера телефона
 * @param message - Текст сообщения об ошибке (дефолтное значение: 'Телефон указан некорректно. Пример: +7 (901) 123-45-67')
 * @param forbidden - Массив с номерами телефонов, которые нельзя использовать
 * @param codeStartWithForbidden - Массив с цифрами, с которых не может начинаться номер телефона
 * @returns Возвращает функцию для валидации
 */
export const phoneValidator =
	(
		message = DEFAULT_MESSAGE,
		forbidden = BLACK_LIST,
		codeStartWithForbidden = CODE_START_WITH_BLACK_LIST
	) =>
	/**
	 * Функция валидации
	 * @param val - Значение поля
	 * @returns null или сообщение об ошибке
	 */
	val => {
		if (val) {
			const value = val.replace(/[^0-9]/g, '').slice(1)
			const start = value[0]

			if (value.length < 10) {
				return [message, 'Недопустимый формат номера']
			}

			if (codeStartWithForbidden.indexOf(start) !== -1) {
				return [message, 'Недопустимый формат номера']
			}

			if (forbidden.indexOf(value) !== -1) {
				return [message, 'Недопустимый формат номера']
			}
		}

		return null
	}
