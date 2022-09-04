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
				<div class="header-navbar__toggle"><button><font-awesome-icon icon="fa-solid fa-bars" /></button></div>
			</div>
		</header>
		<div class="card-wrapper">
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
			</div>
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
			</div>
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
			</div>
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
			</div>
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
			</div>
			<div class="card-item">
				<div>John Doe</div>
				<div>Country</div>
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
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.wrapper {
		max-width: 900px;
		margin: 0 auto;
		padding: 1rem;
	}

	.card-wrapper {
		border: 3px solid tomato;
		display: grid;

		grid-auto-columns: 1fr;
		grid-gap: 10px;
		grid-template-areas:
			'one two'
			'three four'
			'five six';
	}

	.header-navbar {
		border: 2px solid salmon;
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

	.card-item {
		background: firebrick;
	}

	.card-item:nth-child(odd) {
		background-color: thistle;
	}

	@media screen and (min-width: 40em) {
		.card-wrapper {
			background-color: yellowgreen;

			grid-template-areas:
				'one two three'
				'four five six';
		}

		.header-navbar {
			border: 4px solid green;
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
