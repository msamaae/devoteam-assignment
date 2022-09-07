<template>
	<div id="app" class="wrapper">
		<Header title="Meet the Team" />
        
		<div v-if="errorText" class="errorText">
			<h2>{{ errorText }}</h2>
		</div>

		<div v-else>
			<Grid :users="usersFiltered" v-if="toggleView === 'grid'" />
			<List :users="usersFiltered" v-else />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { eventBus } from '@/main';

	import Header from '@/components/Header.vue';
	import Grid from '@/components/Grid.vue';
	import List from '@/components/List.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Grid,
			List,
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
			eventBus.$on('sort-direction', ({ sortDirection }) => {
				this.sortDirection = sortDirection;
			});
			eventBus.$on('search-text', ({ searchText }) => {
				this.searchText = searchText;
			});
			eventBus.$on('toggle-view', ({ toggleView }) => {
				this.toggleView = toggleView;
			});
		},
		beforeDestroy() {
			eventBus.$off('sort-direction');
			eventBus.$off('search-text');
			eventBus.$off('toggle-view');
		},
		async mounted() {
			try {
				const { data } = await axios.get('https://randomuser.me/api/?results=6');

				this.users = data.results.sort((a, b) => a.name.first.localeCompare(b.name.first));
			} catch (error) {
				this.errorText = 'Could not load users. Try reloading again.';
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
			usersFiltered() {
				return this.users.filter(user => user.name.first.toLowerCase().includes(this.searchText.toLowerCase()));
			},
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
		max-width: 850px;
		margin: 0 auto;
		padding: 2rem;

		& .errorText {
			font-family: $ff-primary;
            text-align: center;
            margin-top: 8rem;
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

			& .grid-item {
				min-height: 340px;

				&__name {
					font-size: 1.125rem;
					padding-top: 3.5rem;
				}

				&__img {
					margin-top: 8rem;
				}

				&__country {
					font-size: 0.875rem;
					margin-top: 3.5rem;
				}

				&__contact {
					margin-bottom: 1.5rem;
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
