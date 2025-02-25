<template>
	<section class="reviews">
		<h2 class="title">ОТЗЫВЫ</h2>
		<div class="reviews__inner">
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human1.png" alt="" />
						<div class="review__human">
							<div class="review__name">ИВАН</div>
							<div class="review__lastname">ИВАНОВ</div>
							<div class="review__tour">ТУР "Норвегия"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Фьорды – величие природы, северное сияние – волшебство! Идеальная
							организация, уютные домики, потрясающая атмосфера.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.reviews {
	margin-bottom: 64px;
}
.title {
	font-size: 42px;
	font-style: normal;
	font-weight: 700;
}
.reviews__inner {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 41px;
	padding-top: 48px;
}
.review {
	border-radius: 14px;
	border: 4px solid #2c3e50;
	gap: 20px;
	width: 366px;
}
.review__content {
	padding: 45px 30px;
}
.review__name {
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
}
.review__lastname {
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
}
.review__tour {
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
}

.review__text {
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
}
.review__header {
	display: flex;
	align-items: center;
	gap: 12px;
}
.review__text {
	padding-top: 16px;
}
</style>
