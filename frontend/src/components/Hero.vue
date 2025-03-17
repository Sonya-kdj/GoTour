<template>
	<section class="hero-section">
		<div class="hero">
			<div class="content">
				<h1 class="title">
					Найди свой идеальный тур – путешествия без хлопот!
				</h1>
				<p class="sub-title">
					Отправься в приключение мечты с нами. Мы подбираем лучшие маршруты и
					создаём незабываемые впечатления.
				</p>
				<button class="btn__hero"><a href="#tour">Выбрать тур</a></button>
			</div>
			<img src="../assets/mainImage.jpg" alt="" />
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.hero {
	display: flex;
	gap: 137px;
	margin-top: 115px;
	align-items: center;
}

.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
	width: 642px;
	line-height: normal;
}

.sub-title {
	padding-top: 12px;
	font-size: 21px;
	font-style: normal;
	font-weight: 500;
	width: 610px;
	line-height: normal;
}

.btn__hero {
	font-size: 21px;
	margin-top: 28px;
	border-radius: 8px;
	background: #f4d03f;
	padding: 12px 24px;
}

.btn__hero:hover {
	background: #1a5276;
	color: #fff;
}
</style>
