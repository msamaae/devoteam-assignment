<template>
	<div id="app" class="wrapper">
		<Header />

		<!-- <header class="header-wrapper">
			<h1 class="header-title">Meet the team</h1>
			<div class="header-navbar">
				<div class="header-navbar__search">
					<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
					<input type="text" v-model="searchText" />
				</div>
				<div class="header-navbar__sort">
					<font-awesome-icon :icon="sortIcon" @click="sortByName" />
				</div>
				<div class="header-navbar__toggle">
					<font-awesome-icon icon="fa-solid fa-bars" />
				</div>
			</div>
		</header> -->

		<div v-if="errorText">{{ errorText }}</div>

		<div class="grid-wrapper">
			<div class="card-item" v-for="({ name, picture, location, email, cell }, key) in usersFiltered" :key="key">
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
	import { eventBus } from '@/main';

	import Header from '@/components/Header.vue';

	export default {
		name: 'App',
		components: {
			Header,
		},
		data() {
			return {
				users: [],
				errorText: '',
				searchText: '',
				sortDirection: 'desc',
				toggleView: 'grid',
			};
		},
		created() {
			eventBus.$on('sort-direction', ({ sortDirection }) => { this.sortDirection = sortDirection });
			eventBus.$on('search-text', ({ searchText }) => { this.searchText = searchText });
		},
		beforeDestroy() {
			eventBus.$off('sort-direction');
			eventBus.$off('search-text');
		},
		async mounted() {
			try {
				const { data } = await axios.get('https://randomuser.me/api/?results=6');

				this.users = data.results.sort((a, b) => a.name.first.localeCompare(b.name.first));
			} catch (error) {
				this.errorText = 'Could not load users. Try reloading.';
				throw error;
			}
		},
		watch: {
			sortDirection() {
				if (this.sortDirection === 'desc') {
					this.users.sort((a, b) => a.name.first.localeCompare(b.name.first));
				} else {
					this.users.sort((a, b) => b.name.first.localeCompare(a.name.first));
				}
			},
		},
		computed: {
			sortIcon() {
				return this.sortDirection === 'desc' ? ['fas', 'arrow-down-a-z'] : ['fas', 'arrow-up-a-z'];
			},
			usersFiltered() {
				return this.users.filter(user => user.name.first.toLowerCase().includes(this.searchText.toLowerCase()));
			},
		},
		methods: {
			// sortByName() {
			// this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
			// if (this.sortDirection === 'desc') {
			// 	this.users.sort((a, b) => a.name.first.localeCompare(b.name.first));
			// } else {
			// 	this.users.sort((a, b) => b.name.first.localeCompare(a.name.first));
			// }
			// },
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

	/* .header-title {
		font-family: $ff-primary;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.875rem;
	}

	.header-navbar {
		display: grid;
		grid-template-areas:
			'search search'
			'sort toggle';

		&__search {
			grid-area: search;
			margin: 2rem 0.225rem 1rem 0.225rem;

			position: relative;

			& svg {
				font-size: 0.875rem;
				left: 0.5rem;
				top: 0.275rem;
				position: absolute;
			}

			& input {
				border-radius: 4rem;
				border: none;
				height: 1.5rem;
				padding-left: 1.675rem;
				width: 100%;
			}
		}

		&__sort {
			grid-area: sort;
			font-size: 1.5rem;
			padding-left: 0.225rem;

			& > svg {
				cursor: pointer;
			}
		}

		&__toggle {
			grid-area: toggle;
			justify-self: flex-end;
			font-size: 1.5rem;
			padding-right: 0.225rem;

			& > svg {
				cursor: pointer;
			}
		}
	} */

	.grid-wrapper {
		display: grid;
		margin-top: 1rem;
		grid-auto-columns: 1fr;
		grid-gap: 1.5rem;
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
				padding: 1.275rem 0 1.5rem 0;
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
				font-size: 0.675rem;

				display: flex;
				justify-content: center;
				align-items: center;

				a:link {
					color: rgba(0, 0, 0, 0.8);
					background-color: transparent;
					text-decoration: none;
				}

				a:first-child {
					font-size: 0.775rem;
					margin-right: 0.375rem;
				}
			}

			&:nth-child(1) {
				grid-area: one;
			}

			&:nth-child(2) {
				grid-area: two;
			}

			&:nth-child(3) {
				grid-area: three;
			}

			&:nth-child(4) {
				grid-area: four;
			}

			&:nth-child(5) {
				grid-area: five;
			}

			&:nth-child(6) {
				grid-area: six;
			}
		}
	}

	@media screen and (min-width: 40em) {
		.wrapper {
			padding: 2rem 5rem;
		}

		.header-title {
			font-size: 3rem;
			line-height: 3.5rem;
			margin: 0.5rem 0 2rem -4.5rem;
		}

		.grid-wrapper {
			grid-gap: 2.5rem;
			grid-template-areas:
				'one two three'
				'four five six';

			& .card-item {
				padding: 2rem 1.5rem 1.5rem 1.5rem;

				&__contact {
					font-size: 1.1rem;
					padding-top: 1rem;

					a:first-child {
						font-size: 1.375rem;
						margin-right: 0.625rem;
					}
				}
			}
		}

		.header-navbar {
			display: flex;
			flex-direction: row;

			&__search {
				flex-grow: 1;
				margin: 0 0.875rem;
			}

			&__search input {
				width: 300px;
			}

			&__sort {
				flex-shrink: 1;
				order: -1;
			}
		}
	}
</style>
