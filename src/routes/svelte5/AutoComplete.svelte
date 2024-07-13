<script lang="ts" generics="T extends { name: string }">
	type Props<T> = {
		items: T[];
		onSelect: (item: T) => void;
	};

	let { items, onSelect }: Props<T> = $props();
</script>

{#each items as item}
	<div>
		<button onclick={() => onSelect(item)}>Select</button>
	</div>
{/each}
