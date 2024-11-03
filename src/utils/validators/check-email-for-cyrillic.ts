const CYRILLIC_PATTERN = /[\u0400-\u04FF]/

const MESSAGE =
	'Пожалуйста, используйте латиницу. Пример: vashapochta@domain.ru'

/**
 * Валидатор ввода кириллицы в поле email
 * @param email - Значение поля
 * @returns null или сообщение об ошибке
 */
export const checkEmailForCyrillic = email =>
	CYRILLIC_PATTERN.test(email) ? MESSAGE : null
