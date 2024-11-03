export const requiredValidator = (value: string): string | null => {
	if (!value) {
		return 'Поле обязательно для заполнения'
	}

	return null
}
