<template>
	<header>
		<div class="header__inner">
			<a href="" class="logo"><img src="../assets/Go Tour (1).svg" alt="" /></a>
			<nav class="menu">
				<ul class="menu__items">
					<li class="menu__item">
						<a href="#">Главная страница</a>
					</li>
					<li class="menu__item">
						<a href="#">О нас</a>
					</li>
					<li class="menu__item">
						<a href="#">Расписание</a>
					</li>
					<li class="menu__item">
						<a href="#">Забронировать</a>
					</li>
					<li class="menu__item">
						<a href="#">Контакты</a>
					</li>
					<li class="menu__item">
						<a href="#">Отзывы</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup></script>

<style scoped>
.header__inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 23px;
}

.menu__items {
	display: flex;
	justify-content: space-between; /* Распределяет элементы по всей ширине */
	width: 100%; /* Растягивает меню на всю ширину */
	font-size: 18px;
	gap: 21px;
	padding: 0;
	list-style: none;
}
</style>
