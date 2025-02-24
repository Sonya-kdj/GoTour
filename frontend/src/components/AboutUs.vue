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
					class="gallery__item small mountain-lake"
					src="../assets/5.png"
					alt="Горное озеро"
				/>
				<img
					class="gallery__item small campfire"
					src="../assets/6.jpg"
					alt="Люди у костра"
				/>
				<img class="gallery__item small" src="../assets/4.jpg" alt="Кемпинг" />
			</div>
		</section>
	</section>
</template>

<style scoped>
.about-us {
	margin-top: 64px;
}

.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
	width: 700px;
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
	margin-top: 48px;
}

.gallery__grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin: 0 auto;
	align-items: start;
	justify-items: center;
	grid-template-areas:
		'img1 img2 img3'
		'title img5 img6'
		'img4 img5 img6';
}

.gallery__title {
	grid-area: title;
	font-size: 42px;
	font-weight: 700;
	justify-self: left;
	align-self: center;
	margin: 0;
}

.gallery__item {
	width: 100%;
	border-radius: 12px;
	object-fit: cover;
}

/* Распределение картинок по сетке */
.gallery__item:nth-child(1) {
	grid-area: img1;
}
.gallery__item:nth-child(2) {
	grid-area: img2;
}
.gallery__item:nth-child(3) {
	grid-area: img3;
}
.gallery__item:nth-child(4) {
	grid-area: img4;
}
.gallery__item:nth-child(5) {
	grid-area: img5;
}
.gallery__item:nth-child(6) {
	grid-area: img6;
}
</style>
