<script setup>
import { ref, computed } from 'vue'
import Button from './Button.vue'

const show = ref(false)

const toggleMenu = computed(() => {
	show.value = !show.value
})
</script>

<template>
	<header>
		<RouterLink to="/" class="logo">LOGO</RouterLink>
		<nav>
			<RouterLink to="/" class="nav-link">Home</RouterLink>
			<RouterLink to="/about-us" class="nav-link">About Us</RouterLink>
			<RouterLink to="/crop" class="nav-link">Crop</RouterLink>
			<RouterLink to="/result" class="nav-link">Result</RouterLink>
			<div class="actions">
				<Button to="/" class="secondary alternate" small>Learn</Button>
				<Button to="/convert" class="primary alternate" small>Convert</Button>
			</div>
		</nav>
		<div class="menu-toggle">
			<img src="/close.png" alt="Close Menu" v-if="show" @click="toggleMenu" />
			<img src="/menu.png" alt="Open Menu" v-else @click="toggleMenu" />
		</div>
	</header>

	<Transition>
		<div v-if="show" class="responsive-nav">
			<RouterLink to="/" class="nav-link secondary">Home</RouterLink>
			<RouterLink to="/about-us" class="nav-link secondary">About Us</RouterLink>
			<RouterLink to="/crop" class="nav-link secondary">Crop</RouterLink>
			<RouterLink to="/result" class="nav-link secondary">Result</RouterLink>
			<div class="responsive-nav-actions">
				<Button to="/" class="secondary full" small>Learn</Button>
				<Button to="/convert" class="primary full" small>Convert</Button>
			</div>
		</div>
	</Transition>
</template>

<style scoped>
	header {
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 72px;
		padding: 0 64px;
		background-color: var(--primary-color);
	}
	.logo {
		text-decoration: none;
		font-size: 24px;
		font-weight: 700;
		color: #fff;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 32px;
	}
	.nav-link {
		text-decoration: none;
		font-size: 16px;
		font-weight: 400;
		color: #fff;
	}
	.nav-link.secondary {
		color: #000;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.responsive-nav {
		display: none;
	}
	.menu-toggle {
		display: none;
	}

	@media screen and (max-width: 640px) {
		header {
			height: 64px;
			padding: 0 20px;
		}
		nav {
			display: none;
		}
		.responsive-nav {
			position: absolute;
			z-index: 10;
			top: 64px;
			left: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
			width: 100%;
			padding: 0 20px;
			padding-top: 16px;
			padding-bottom: 64px;
			background-color: #fff;
			box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		}
		.responsive-nav-actions {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			gap: 16px;
		}
		.menu-toggle {
			display: block;
		}
	}
</style>
