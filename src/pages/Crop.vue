<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import Cropper from 'cropperjs'
import Content from '../components/Content.vue'
import { image as store } from '../store/image.js'

let cropper = null
const image = ref()
const url = ref('')

async function crop() {
	const response = await fetch('https://fajar.pythonanywhere.com/convert', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST',
		},
		body: JSON.stringify({
			image: cropper.getCroppedCanvas().toDataURL(),
			filename: 'input.png',
		}),
	})

	const data = await response.json()
	url.value = data.data
}

watchEffect(() => {
	if (image.value) {
		cropper = new Cropper(image.value, {
			aspectRatio: 0,
			viewMode: 1,
			movable: false,
			scalable: false,
			rotatable: false,
			zoomable: false,
			background: false,
		})
	}
})

onMounted(() => {
	image.value.src = store.get()
})
</script>

<template>
	<Content>
		{{ url }}
		<div class="container">
			<div class="padding">
				<div class="crop-wrapper">
					<img class="image" ref="image" />
				</div>

				<button @click="crop">
					<img src="/crop.png" />
				</button>
			</div>
		</div>
	</Content>
</template>

<style scoped>
	.container {
		display: flex;
		width: 100%;
		min-height: 80vh;
	}
	.padding {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		width: 50%;
		padding: 24px;
		border-radius: 8px;
		background-color: var(--secondary-color);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		overflow: hidden;
	}
	.crop-wrapper {
		/*display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;*/
		width: 100%;
	}
	.image {
		height: 240px;
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
			padding-bottom: 24px;
		}
		.crop-wrapper {
      padding: 0px;
      height: 60vh;
		}
		.image {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>
