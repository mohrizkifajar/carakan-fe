<script setup>
import { computed, ref, watchEffect, onMounted } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import { useRouter } from 'vue-router'
import Content from '../components/Content.vue'
import { image as store } from '../store/image.js'

const video = ref(null)
const canvas = ref(null)
let context = null
const router = useRouter()

const { videoInputs: cameras } = useDevicesList({
	requestPermission: true,
})
const currentCamera = computed(() => cameras.value[0]?.deviceId)

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

function take(event) {
	video.value.pause()

	context.drawImage(
		video.value,
		(canvas.value.width - video.value.videoWidth) / 2,
		(canvas.value.height - video.value.videoHeight) / 2
	)

	store.set(0, canvas.value.toDataURL())
	router.push('/crop')
}

onMounted(() => {
	start()

	if (canvas.value) {
		context = canvas.value.getContext('2d')
		context.fillStyle = '#fff'
		context.fillRect(0, 0, canvas.value.width, canvas.value.height)
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
			<div class="video-wrapper">
				<video ref="video" autoplay></video>

				<button @click="take">
					<img src="/camera.png" />
				</button>
			</div>

			<canvas ref="canvas" width="720" height="1280"></canvas>
		</div>
	</Content>
</template>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.video-wrapper {
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
	}
	video {
		width: 100%;
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

	@media screen and (max-width: 640px) {
		.container {
			flex-direction: column;
		}
		.video-wrapper {
			width: 100%;
		}
		video {
			width: 100%;
			height: 80%;
		}
	}
</style>
