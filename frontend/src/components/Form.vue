<template>
	<section class="section section--yellow">
		<div class="forms">
			<h2 class="title">ГОТОВ К ПОЕЗДКЕ ?</h2>
			<div class="form">
				<form @submit.prevent="sendBooking">
					<select v-model="form.tour" class="form__input">
						<option value="" disabled>Выберите тур</option>
						<option v-for="tour in tours" :key="tour.id" :value="tour.name">
							{{ tour.name }}
						</option>
					</select>

					<div class="form__row">
						<input
							v-model="form.name"
							type="text"
							class="form__input form__input--small"
							placeholder="ваше имя"
						/>
						<input
							v-model="form.email"
							type="email"
							class="form__input form__input--small"
							placeholder="email"
						/>
					</div>

					<input
						v-model="form.phone"
						type="tel"
						class="form__input"
						placeholder="номер телефона"
						@input="validatePhone"
					/>
					<input
						v-model="form.telegram"
						type="text"
						class="form__input"
						placeholder="telegram"
					/>

					<button type="submit" class="form__button">оставить заявку</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
	tour: '',
	name: '',
	email: '',
	phone: '',
	telegram: '',
})

const tours = ref([])

const fetchTours = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/tours')
		const data = await response.json()
		tours.value = data
	} catch (error) {
		console.error('Ошибка загрузки туров:', error)
	}
}

const validatePhone = () => {
	form.value.phone = form.value.phone.replace(/\D/g, '')
}

const sendBooking = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/bookings ', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form.value),
		})

		if (!response.ok) {
			throw new Error('Ошибка при отправке заявки')
		}

		alert('Заявка успешно отправлена!')
		form.value = { tour: '', name: '', email: '', phone: '', telegram: '' }
	} catch (error) {
		alert('Ошибка: ' + error.message)
	}
}

onMounted(fetchTours)
</script>

<style scoped>
.section--yellow {
	background-color: #f5d44f;
	width: 100vw;
	position: relative;
	left: calc(-50vw + 50%);
	padding: 40px 0;
	margin-top: 64px;
	margin-bottom: 64px;
}

.forms {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 40px;
}

.form {
	padding: 20px;
	margin-top: 64px;
	border-radius: 14px;
	border: 4px solid #f6f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 400px;
	margin: 20px auto;
}

.form__input {
	width: 100%;
	padding: 12px;
	margin-bottom: 10px;
	border-radius: 10px;
	border: none;
	font-size: 16px;
	font-weight: bold;
	color: #333;
	background: #fff;
}

.form__row {
	display: flex;
	gap: 10px;
}

.form__input--small {
	flex: 1;
}

.form__button {
	padding: 14px;
	background: #2c384a;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	border-radius: 8px;
	cursor: pointer;
	text-align: center;
	align-items: center;
	margin: 10px auto 0;
	display: block;
}

.form__button:hover {
	background: #1a5276;
}
</style>
