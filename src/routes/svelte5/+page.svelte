<script lang="ts">
	import NumberInfo from './NumberInfo.svelte';
	import RenderChildComponent from './RenderChildComponent.svelte';
	import State from './State.svelte';
</script>

<div class="flex flex-col gap-2 p-4">
	<RenderChildComponent />

	<State />

	<hr />

	<NumberInfo />
</div>
