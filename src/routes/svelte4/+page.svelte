<script lang="ts">
	import { createNumberInfo } from './numberInfoStore';
	import RenderChildComponent from './RenderChildComponent.svelte';

	let store = createNumberInfo(0);

	$: ({ numberInfo, update } = store);
	$: ({ label, value } = $numberInfo);
</script>

<div class="flex flex-col gap-2 p-5">
	<RenderChildComponent />

	<hr />

	<div class="flex flex-col gap-2">
		<span>{$numberInfo.value}</span>
		<span>{$numberInfo.label}</span>
		<hr />
		<span>{value}</span>
		<span>{label}</span>

		<button
			class="mt-5 self-start rounded border p-2"
			onclick={() => update($numberInfo.value + 1)}
		>
			Increment count
		</button>
	</div>
</div>
