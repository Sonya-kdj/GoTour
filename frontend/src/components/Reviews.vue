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
						<img class="review__photo" src="../assets/human2.png" alt="" />
						<div class="review__human">
							<div class="review__name">АЛИНА</div>
							<div class="review__lastname">ЕГОРОВА</div>
							<div class="review__tour">ТУР "ЭФИОПИЯ"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Эфиопия поразила своей самобытностью и древней историей!
							Экзотическая кухня, доброжелательные люди, незабываемые эмоции.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human3.png" alt="" />
						<div class="review__human">
							<div class="review__name">ЕВА</div>
							<div class="review__lastname">ЕРОФЕЕВА</div>
							<div class="review__tour">ТУР "КИТАЙ"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Великая Китайская стена – одно из самых впечатляющих мест, которые
							я видела. Организация тура на высшем уровне, все было продумано до
							мелочей.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human4.png" alt="" />
						<div class="review__human">
							<div class="review__name">КАРИНА</div>
							<div class="review__lastname">КУЗНЕЦОВА</div>
							<div class="review__tour">ТУР "КАЗАХСТАН"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Потрясающие пейзажи, удивительная природа и невероятная
							дружелюбность местных жителей. Казахстан оказался настоящей
							находкой для путешественника!
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human5.png" alt="" />
						<div class="review__human">
							<div class="review__name">НИКИТА</div>
							<div class="review__lastname">НИКИТОВИЧ</div>
							<div class="review__tour">ТУР "НОРВЕГИЯ"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Это была моя мечта – увидеть северное сияние, и она сбылась!
							Спасибо организаторам за комфортное путешествие и интересные
							экскурсии.
						</p>
					</div>
				</div>
			</div>
			<div class="review">
				<div class="review__content">
					<div class="review__header">
						<img class="review__photo" src="../assets/human6.png" alt="" />
						<div class="review__human">
							<div class="review__name">МИША</div>
							<div class="review__lastname">УШАКОВ</div>
							<div class="review__tour">ТУР "КИТАЙ"</div>
						</div>
					</div>
					<div class="review__text">
						<p>
							Отличный гид, интересные рассказы, великолепная китайская кухня –
							всё было просто супер! Китай удивил меня своим разнообразием и
							культурой.
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
