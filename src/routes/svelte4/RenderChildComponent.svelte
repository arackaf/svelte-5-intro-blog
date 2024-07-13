<script lang="ts">
	import ChildComponent from './ChildComponent.svelte';

	let currentValue = '';
</script>

Current value in parent: {currentValue}
<ChildComponent name="Bob" age={20} bind:currentValue />
