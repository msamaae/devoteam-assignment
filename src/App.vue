<template>
	<div id="app" class="wrapper">
		<header class="header-wrapper">
			<h1 class="header-title">Meet the team</h1>
			<div class="header-navbar">
				<div class="header-navbar__search">
					<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
					<input type="text" />
				</div>
				<div class="header-navbar__sort">
					<button><font-awesome-icon icon="fa-solid fa-arrow-down-a-z" /></button>
				</div>
				<div class="header-navbar__toggle">
					<button><font-awesome-icon icon="fa-solid fa-bars" /></button>
				</div>
			</div>
		</header>
		<div class="card-wrapper">
			<div class="card-item" v-for="({ name, picture, location, email, cell }, key) in users" :key="key">
				<div class="card-item__name">{{ name.first }} {{ name.last }}</div>
				<div class="card-item__img">
					<img :src="picture.medium" alt="User img" />
				</div>
				<div class="card-item__country">{{ location.country }}</div>
				<div class="card-item__contact">
					<a :href="email">
						<font-awesome-icon icon="envelope" />
					</a>
					<a :href="cell">
						<font-awesome-icon icon="phone" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'App',
		data() {
			return {
				users: [],
			};
		},
		async mounted() {
			const { data } = await axios.get('https://randomuser.me/api/?results=6');

			this.users = data.results;
		},
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Lato:wght@400;700&family=Work+Sans:wght@400;700&display=swap');

	$ff-primary: 'Work Sans', sans-serif;
	$ff-secondary: 'Karla', sans-serif;
	$ff-tertiary: 'Lato', sans-serif;

	$bg-clr: #ebe9e4;

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: $bg-clr;
	}

	.wrapper {
		max-width: 750px;
		margin: 0 auto;
		padding: 2rem;
	}

	.header-title {
		font-family: $ff-tertiary;
	}

	.header-navbar {
		display: grid;

		grid-template-areas:
			'search search'
			'sort toggle';
	}

	.header-navbar__search {
		grid-area: search;
	}

	.header-navbar__sort {
		grid-area: sort;
	}

	.header-navbar__toggle {
		grid-area: toggle;
		justify-self: flex-end;
	}

	.header-navbar__search input {
		width: 100%;
	}

	.card-wrapper {
		display: grid;

		grid-auto-columns: 1fr;
		grid-gap: 1.5rem ;
		grid-template-areas:
			'one two'
			'three four'
			'five six';

		& .card-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1.5rem 1rem 1rem 1rem;
			border-radius: 0.75rem;
			background: white;

			&__name {
				font-family: $ff-secondary;
				font-size: 0.875rem;
				font-weight: 700;
                line-height: 1rem;
				color: #292929;
				text-align: center;
				padding-bottom: 1.5rem;
			}

			&__img > img {
				border-radius: 50%;
                max-width: 100%;
			}

			&__country {
				font-family: $ff-tertiary;
				font-size: 0.75rem;
				line-height: 0.875rem;
				text-align: center;
				color: rgba(41, 41, 41, 0.6);
				margin: 0.5rem 0 0.675rem 0;
			}

			&__contact {
				font-size: 0.875rem;

				a:link {
					color: rgba(0, 0, 0, 0.8);
					background-color: transparent;
					text-decoration: none;
				}

				a:first-child {
					margin-right: 0.375rem;
				}
			}
		}
	}

	.card-item:nth-child(1) {
		grid-area: one;
	}

	.card-item:nth-child(2) {
		grid-area: two;
	}

	.card-item:nth-child(3) {
		grid-area: three;
	}

	.card-item:nth-child(4) {
		grid-area: four;
	}

	.card-item:nth-child(5) {
		grid-area: five;
	}

	.card-item:nth-child(6) {
		grid-area: six;
	}

	@media screen and (min-width: 40em) {
		.card-wrapper {
			grid-template-areas:
				'one two three'
				'four five six';
		}

		.header-navbar {
			display: flex;
			flex-direction: row;
		}

		.header-navbar__search {
			flex-grow: 1;
		}

		.header-navbar__search input {
			width: 300px;
		}

		.header-navbar__sort {
			flex-shrink: 1;
			order: -1;
		}
	}
</style>
