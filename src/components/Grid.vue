<template>
	<div class="grid-wrapper">
		<div class="grid-item" v-for="({ name, picture, location, email, cell }, key) in users" :key="key">
			<div class="grid-item__name">{{ name.first }} {{ name.last }}</div>
			<div class="grid-item__img">
				<img :src="picture.medium" alt="User img" />
			</div>
			<div class="grid-item__country">{{ location.country }}</div>
			<div class="grid-item__contact">
				<a :href="email">
					<font-awesome-icon icon="envelope" />
				</a>
				<a :href="cell">
					<font-awesome-icon icon="phone" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Grid',
		props: {
			users: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style lang="scss">
	.grid-wrapper {
		display: grid;
		margin-top: 1rem;
		grid-auto-columns: 1fr;
		grid-gap: 1.5rem;
		grid-template-areas:
			'one two'
			'three four'
			'five six';

		& .grid-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1.5rem 1rem 1rem 1rem;
			border-radius: 0.75rem;
			background: white;

			&__name {
				font-family: 'Karla', sans-serif;
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
				font-family: 'Lato', sans-serif;
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
</style>
