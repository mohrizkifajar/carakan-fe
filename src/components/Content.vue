<script setup>

</script>

<template>
	<main>
		<slot />
	</main>
</template>

<style scoped>
	main {
		position: relative;
		padding: 0 64px;
	}

	@media screen and (max-width: 640px) {
		main {
			padding: 16px;
		}
	}
</style>
