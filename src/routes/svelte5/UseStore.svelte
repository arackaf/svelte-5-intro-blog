<script lang="ts">
	import { createNumberInfo } from '../svelte4/numberInfoStore';

	const numberPacket = createNumberInfo(0);

	const store = numberPacket.numberInfo;
	let junk = $state('Hello');

	let derivedState = $derived($store.value);
</script>

<span>Run value: {junk}</span>
<div>Number value: {$store.value}</div>
<div>Number value: {derivedState}</div>

<button onclick={() => numberPacket.update($store.value + 1)}>Update</button>
