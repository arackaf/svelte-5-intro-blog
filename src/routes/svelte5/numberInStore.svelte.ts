export function createNumberInfo(initialValue: number = 0) {
	let value = $state(initialValue);
	let label = $derived(value % 2 ? 'Odd number' : 'Even number');

	return {
		update(newValue: number) {
			value = newValue;
		},
		get value() {
			return value;
		},
		get label() {
			return label;
		}
	};
}
