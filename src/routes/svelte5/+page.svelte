<script lang="ts">
	import NumberInfo from './NumberInfo.svelte';
	import RenderChildComponent from './RenderChildComponent.svelte';
	import State from './State.svelte';
	import AutoComplete from './AutoComplete.svelte';
	import UseStore from './UseStore.svelte';

	let items = [{ name: 'Adam' }, { name: 'Rich' }];
	let onSelect = (item: { name: string }) => {
		console.log(item.name);
	};
</script>

<div class="flex flex-col gap-2 p-4">
	<AutoComplete {items} {onSelect} />
	<RenderChildComponent />

	<State />

	<hr />

	<NumberInfo />

	<hr />

	<UseStore />
</div>
