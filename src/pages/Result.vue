<script setup>
import { ref, watchEffect } from 'vue'
import Content from '../components/Content.vue'
import { image as store } from '../store/image.js'

const image = ref(null)

watchEffect(() => {
	if (image.value) {
		image.value.src = store.get(1)
	}
})
</script>

<template>
	<Content>
		<div class="container">
			<div class="padding">
				<div class="result-wrapper">
					<div class="image">
						<img ref="image" />
					</div>

					<button>
						<img src="/download.png" />
					</button>
				</div>
			</div>
		</div>
	</Content>
</template>

<style scoped>
	.container {
		display: flex;
		width: 100%;
	}
	.padding {
		width: 50%;
		padding: 24px;
	}
	.result-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: 100%;
		border-radius: 8px;
		background-color: var(--background-light);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		overflow: hidden;
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
		.padding {
			width: 100%;
			padding: 0;
		}
		.result-wrapper {
      padding: 12px;
      height: 70vh;
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
	}
</style>
