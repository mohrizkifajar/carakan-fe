<template>
	<main>
		<slot />
	</main>
</template>

<style scoped>
	main {
		position: relative;
		padding: 32px 64px;
	}

	@media screen and (max-width: 640px) {
		main {
			padding: 20px;
		}
	}
</style>
