import { derived, writable } from 'svelte/store';

export function createNumberInfo(initialValue: number = 0) {
	const value = writable(initialValue);

	const derivedInfo = derived(value, (value) => {
		return {
			value,
			label: value % 2 ? 'Odd number' : 'Even number'
		};
	});

	return {
		update(newValue: number) {
			value.set(newValue);
		},
		numberInfo: derivedInfo
	};
}
