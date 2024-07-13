<script lang="ts">
	import { untrack } from 'svelte';

	let count = $state(0);
	let countTimes2 = $derived(count * 2);
	let timestamp = $state(+new Date());
	setInterval(() => {
		timestamp = +new Date();
	}, 1000);

	let newCount = $state('');

	$effect(() => {
		let timestampValue = untrack(() => timestamp);
		console.log('Current count is ', count, 'at', timestampValue);
	});

	function setNewCount() {
		let newVal = +newCount;
		if (isNaN(newVal)) {
			newVal = 0;
		}
		count = newVal;
	}
</script>

<div class="flex flex-col gap-2 p-5">
	<span>Count {count}</span>
	<span>Count x 2 = {countTimes2}</span>

	<button class="mt-5 self-start rounded border p-2" onclick={() => count++}>
		Increment count
	</button>

	<input class="mt-5 self-start border p-2" bind:value={newCount} />
	<button class="self-start rounded border p-2" onclick={setNewCount}>Set</button>
</div>
