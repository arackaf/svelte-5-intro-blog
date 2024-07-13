<script lang="ts">
	export let name: string;
	export let age: number;
	export let currentValue: string;
</script>

<div class="flex flex-col gap-2">
	{name}
	{age}
	<input class="self-start rounded border" bind:value={currentValue} />
</div>
