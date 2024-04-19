<script setup>
import { ref, onMounted } from 'vue'
import { v4 as uuid } from 'uuid'
import Content from '../components/Content.vue'
import { image as store } from '../store/image.js'

const image = ref(null)

onMounted(async () => {
	const response = await fetch('https://fajar.pythonanywhere.com/convert', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image: store.get(1),
			filename: uuid() + '.png',
		}),
	})

	const data = await response.json()

	store.set(2, data.data)

	image.value.src = store.get(2)
})
</script>

<template>
	<Content>
		<div class="container">
			<div class="result-wrapper">
				<div class="image">
					<img ref="image" />
				</div>

				<button>
					<img src="/download.png" />
				</button>
			</div>
		</div>
	</Content>
</template>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.result-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: 50%;
		height: 70vh;
		padding: 12px;
		border-radius: 8px;
		background-color: var(--background-light);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		overflow: hidden;
	}
	.image {
		width: 100%;
		height: 80%;
	}
	.image img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		border: none;
		outline: none;
		background-color: #fff;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		cursor: pointer;
	}

	@media screen and (max-width: 640px) {
		.container {
			flex-direction: column;
		}
		.result-wrapper {
      width: 100%;
		}
	}
</style>
