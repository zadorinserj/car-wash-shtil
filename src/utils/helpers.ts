import * as R from 'ramda'

/**
 * Функция проверки на пустое значение
 * @param value - Значение
 * @return true | false
 */
export const isNotEmpty: <T>(value: T) => boolean = R.complement(R.isEmpty)

/**
 * Функция возвращающая первое notNil значение
 * @param values - Значения
 * @return первое notNil значение или undefined
 */
export const firstPass = values => {
	const results = R.filter(R.isNotNil)(values)

	if (isNotEmpty(results)) {
		return R.head(results)
	}

	return undefined
}
