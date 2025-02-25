<template>
	<div class="container">
		<Header />
		<Hero />
		<AboutUs />
		<Schedule />
		<Form />
		<Reviews />
	</div>
</template>

<script setup>
import AboutUs from './components/AboutUs.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Schedule from './components/Schedule.vue'
import Form from './components/Form.vue'
import Reviews from './components/Reviews.vue'
</script>

<style>
.container {
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
}
</style>
