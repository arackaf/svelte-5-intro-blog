<script lang="ts">
	import { createNumberInfo } from './numberInStore.svelte';

	let numberInfo = createNumberInfo(0);
</script>

<div class="flex flex-col gap-2 p-5">
	<span>{numberInfo.value}</span>
	<span>{numberInfo.label}</span>
	<hr />

	<button
		class="mt-5 self-start rounded border p-2"
		onclick={() => numberInfo.update(numberInfo.value + 1)}
	>
		Increment number
	</button>
</div>
