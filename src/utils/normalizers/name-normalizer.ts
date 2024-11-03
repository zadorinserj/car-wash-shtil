import { capitalizeFirstLetter } from './capitalyze-first-letter'
import { puntoEnRu } from './punto-en-ru'

/**
 * Функция-нормалайзер для полей с ФИО. Заменяет английские символы на российские, переводит первый символ в верхний регистр
 * @param value - Строка, которую нужно отформатировать
 * @returns Отформатированная строка
 */
export const nameNormalizer = value => {
	if (!value) {
		return value
	}

	return capitalizeFirstLetter(
		puntoEnRu()(value)
			.replace(/^\s+/, '')
			.replace(/(\s)+/g, '$1')
			.replace(/[^а-яё\s-]/gi, '')
	).substring(0, 35)
}
