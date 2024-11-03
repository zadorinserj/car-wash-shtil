/**
 * Функция переводящая первый символ строки в верхний регистр
 * @param string - Строка, которую нужно отформатировать
 * @returns Отформатированная строка
 */
export const capitalizeFirstLetter = (string = '') =>
	string.charAt(0).toUpperCase() + string.slice(1)
