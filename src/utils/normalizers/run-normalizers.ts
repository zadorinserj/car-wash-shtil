/**
 * Функция для прогона значения по функциям-нормалайзерам
 * @param params - Параметры функции
 * @param params.value - Строка, которую нужно отформатировать
 * @param params.normalizers - Массив функций-нормалайзеров, которые нужно выполнить
 * @returns Отформатированная строка
 */
export const runNormalizers = ({ value, normalizers }) =>
    normalizers ? normalizers?.reduce((val, formatter) => formatter(val), value) : value;
