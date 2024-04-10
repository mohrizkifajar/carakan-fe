<script setup>
import { computed, ref, watchEffect, onMounted } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import Content from '../components/Content.vue'
import Cropper from 'cropperjs'

const { videoInputs: cameras } = useDevicesList({
	requestPermission: true,
})
const currentCamera = computed(() => cameras.value[0]?.deviceId)

const video = ref()
const canvas = ref()
const image = ref()

const { stream, start } = useUserMedia({
	constraints: {
		video: {
			deviceId: currentCamera,
			width: 1280,
			height: 720,
			facingMode: 'environment',
		},
	},
})


function take() {
	const ctx = canvas.value.getContext('2d')
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
	ctx.drawImage(
		video.value,
		(canvas.value.width - video.value.videoWidth) / 2,
		(canvas.value.height - video.value.videoHeight) / 2,)
	image.value.src = canvas.value.toDataURL()
}

start()

watchEffect(() => {
	if (image.value) {
		const cropper = new Cropper(image.value, {
		  aspectRatio: 9 / 16,
		})
	}
})

watchEffect(() => {
	if (video.value) {
		video.value.srcObject = stream.value
	}
})
</script>

<template>
	<Content>
		<div class="container">
			<div class="padding">
				<div class="video-wrapper">
					<video ref="video" autoplay></video>
					<button @click="take">
						<img src="/camera.png" />
					</button>
				</div>
			</div>

			<div class="padding">
				<div class="captured">
					<canvas ref="canvas" width="720" height="1280"></canvas>
					<img ref="image" src="" alt="" />
				</div>
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
		width: 50%;
		padding: 32px;
	}
	.video-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		width: 100%;
		padding: 24px;
		border-radius: 8px;
		background-color: var(--secondary-color);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
	video {
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
	button img {
		width: 24px;
	}
	canvas {
		display: none;
	}
	.captured {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 24px;
		border-radius: 8px;
		background-color: var(--secondary-color);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
	.captured img {
		width: 100%;
	}
	@media screen and (max-width: 640px) {
		.container {
			flex-direction: column;
		}
		.padding {
			width: 100%;
			padding: 12px;
		}
		.video-wrapper {
			height: 70vh;
		}
		video {
			width: 100%;
			height: 80%;
		}
		.captured img {
			/**/
		}
	}
</style>
