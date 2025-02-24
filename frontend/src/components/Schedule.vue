<template>
	<section class="Schedule">
		<div class="text">
			<h2 class="title">РАСПИСАНИЕ ТУРОВ</h2>
			<p class="sub-title">Выберите, когда хотите поехать:</p>
		</div>
		<div class="tours__inner">
			<div class="tour__txt">
				<h2 class="tour__title">КИТАЙ</h2>
				<p class="tour__description">
					Запретный город, Великая стена и парящие горы из "Аватара".
					Путешествие по древнему и футуристическому Китаю!
				</p>

				<div class="tour__info">
					<p class="tour__label">Количество человек в группе:</p>
					<div class="tour__value date">10-12</div>
				</div>

				<div class="tour__info">
					<p class="tour__label">Когда едем:</p>
					<p class="tour__value">1-8 АПРЕЛЯ</p>
				</div>

				<div class="tour__info">
					<p class="tour__label">Цена:</p>
					<p class="tour__value tour__value--large">172 000 ₽</p>
				</div>

				<button class="tour__button">ЗАБРОНИРОВАТЬ</button>
			</div>
			<div class="tour__img"><img src="../assets/tour1.jpg" alt="" /></div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.Schedule {
	margin-top: 64px;
}

.text {
	text-align: center;
}

.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
}

.sub-title {
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	padding-top: 12px;
}

.tours__inner {
	display: flex;
	justify-content: space-between;
	margin-top: 64px;
	margin-bottom: 48px;
}
.tour__txt {
	width: 537px;
}
.tour__title {
	font-size: 44px;
	font-style: normal;
	font-weight: 700;
	padding-bottom: 14px;
}

.tour__description {
	font-size: 21px;
	font-style: normal;
	font-weight: 500;
	text-align: left;
	padding-bottom: 18px;
	width: 450px;
}

.tour__info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 14px;
	text-align: center;
}

.tour__label {
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	flex-shrink: 0;
}

.tour__value {
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
}

.date {
	border-radius: 4px;
	border: 2px solid #2c3e50;
	padding: 7px 45px 6px 50px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.tour__button {
	margin-top: 24px;
	border-radius: 8px;
	background: #f4d03f;
	padding: 20px 30px;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
}

.tour__button:hover {
	background: #1a5276;
	color: #fff;
}
</style>
