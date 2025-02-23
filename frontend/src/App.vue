<template>
	<div class="container">
		<Header />
		<Hero />
		<AboutUs />
	</div>
</template>

<script setup>
import AboutUs from './components/AboutUs.vue'
import Header from './components/Header.vue'

import Hero from './components/Hero.vue'
</script>

<style>
.container {
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
}
</style>
