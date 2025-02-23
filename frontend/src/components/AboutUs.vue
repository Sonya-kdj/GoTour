<template>
	<section class="about-us">
		<div class="about-as__text">
			<h2 class="title">Путешествия с душой и заботой о каждом клиенте</h2>
			<p class="sub-title">
				Мы – команда, которая верит, что каждое путешествие должно быть
				особенным. Гарантируем комфорт, безопасность и яркие эмоции!
			</p>
		</div>
		<section class="gallery">
			<div class="gallery__grid">
				<img class="gallery__item tall" src="../assets/1.jpg" alt="Горы" />
				<img
					class="gallery__item tall"
					src="../assets/2.jpg"
					alt="Туристы в горах"
				/>
				<img
					class="gallery__item tall"
					src="../assets/3.png"
					alt="Парапланеризм"
				/>
				<h2 class="gallery__title">GO TOUR</h2>
				<img
					class="gallery__item small"
					src="../assets/5.png"
					alt="Горное озеро"
				/>
				<img
					class="gallery__item small"
					src="../assets/6.jpg"
					alt="Люди у костра"
				/>
				<img class="gallery__item small" src="../assets/4.jpg" alt="Кемпинг" />
			</div>
		</section>
	</section>
</template>

<script setup></script>

<style scoped>
.about-us {
	margin-top: 64px;
}
.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
	text-align: left;
	width: 714px;
}

.sub-title {
	font-size: 21px;
	font-style: normal;
	font-weight: 500;
	padding-top: 12px;
	text-align: right;
	width: 757px;
	margin-left: auto; /* Двигает блок вправо */
}
.gallery {
	padding: 40px;
}

.gallery__title {
	font-size: 32px;
	font-weight: 700;
	color: #1a1a1a;
	margin-top: 20px;
}

.gallery__grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 200px;
	gap: 20px;
}

.gallery__item {
	width: 100%;
	height: 100%;
	border-radius: 12px;
	object-fit: cover;
}

/* Карточки разного размера */
.tall {
	grid-row: span 2;
}

.small {
	grid-row: span 1;
}
</style>
