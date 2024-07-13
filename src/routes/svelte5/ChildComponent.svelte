<script lang="ts">
	type Props = {
		name: string;
		age: number;
		currentValue: string;
	};

	let { age, name, currentValue = $bindable() }: Props = $props();
</script>

<div class="flex flex-col gap-2">
	{name}
	{age}
	<input class="self-start rounded border" bind:value={currentValue} />
</div>
