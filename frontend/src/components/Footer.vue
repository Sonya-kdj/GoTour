<template>
	<section class="footer section--blue">
		<div class="footer__inner">
			<nav class="menu">
				<ul class="menu__items">
					<li class="menu__item">
						<a class="link" href="#">Главная страница</a>
					</li>
					<li class="menu__item">
						<a class="link" href="#">О нас</a>
					</li>
					<li class="menu__item">
						<a class="link" href="#">Расписание</a>
					</li>
					<li class="menu__item">
						<a class="link" href="#">Забронировать</a>
					</li>
					<li class="menu__item">
						<a class="link" href="#">Контакты</a>
					</li>
					<li class="menu__item">
						<a class="link" href="#">Отзывы</a>
					</li>
				</ul>
			</nav>
			<div class="footer__socials">
				<a href="">
					<img src="../assets/instagram.png" alt="" />
				</a>

				<a href="">
					<img src="../assets/vk.png" alt="" />
				</a>
				<a href="">
					<img src="../assets/telegram.png" alt="" />
				</a>
			</div>
			<div class="logo">GO TOUR</div>
		</div>
	</section>
</template>

<script></script>

<style>
.section--blue {
	background-color: #1a5276;
	width: 100vw;
	position: relative;
	left: calc(-50vw + 50%);
	padding: 80px 0;
	margin-top: 64px;
	margin-bottom: 64px;
}

.footer__inner {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.menu__items {
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	gap: 28px;
	padding: 0;
	list-style: none;
}
.footer__socials {
	display: flex;
	gap: 18px;
	margin-top: 32px;
	margin-bottom: 32px;
}

.logo {
	font-size: 42px;
	font-weight: 700;
	align-self: center;
	margin: 0;
}
</style>
