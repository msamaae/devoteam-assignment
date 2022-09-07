<template>
	<div class="grid-wrapper">
		<div class="grid-item" v-for="({ name, picture, location, email, cell }, key) in users" :key="key">
			<div class="rect"></div>
			<div class="section top">
				<div class="grid-item__name">{{ name.first }} {{ name.last }}</div>
				<div class="grid-item__img">
					<img :src="picture.medium" alt="User img" />
				</div>
			</div>
			<div class="section bottom">
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
			position: relative;
			min-height: 220px;
			background: white;
			overflow: hidden;
			border-radius: 0.75rem;
			box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 20%);

			& .rect {
				background-color: #a7b8a8;
				position: absolute;
				width: 50px;
				height: 50px;
				left: 0;
				top: 50%;
			}

			& .section {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				min-width: 100%;
				min-height: 50%;

				&.top {
					background: #a7b8a8;
					border-bottom-right-radius: 2.5rem;
				}

				&.bottom {
					border-top-left-radius: 2.5rem;
					background: white;
				}
			}

			&__name {
				font-family: 'Karla', sans-serif;
				font-size: 0.875rem;
				font-weight: 700;
				line-height: 1rem;
				color: #292929;
				text-align: center;
				padding-top: 1.575rem;
				word-wrap: break-word;
			}

			&__img {
				position: absolute;
				margin-top: 4.5rem;
				z-index: 1;

				& > img {
					box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 30%);
					border-radius: 50%;
					max-width: 100%;
				}
			}

			&__country {
				font-family: 'Lato', sans-serif;
				font-size: 0.75rem;
				line-height: 0.875rem;
				text-align: center;
				color: rgba(41, 41, 41, 0.6);
				margin-top: 3rem;
			}

			&__contact {
				font-size: 0.675rem;
				margin-bottom: 1.25rem;

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

				& .rect {
					background-color: #e1d3c7;
				}

				& .top {
					background: #e1d3c7;
				}
			}

			&:nth-child(3) {
				grid-area: three;

				& .rect {
					background-color: #e8cdad;
				}

				& .top {
					background: #e8cdad;
				}
			}

			&:nth-child(4) {
				grid-area: four;

				& .rect {
					background-color: #e1d3c7;
				}

				& .top {
					background: #e1d3c7;
				}
			}

			&:nth-child(5) {
				grid-area: five;

				& .rect {
					background-color: #e8cdad;
				}

				& .top {
					background: #e8cdad;
				}
			}

			&:nth-child(6) {
				grid-area: six;
			}
		}
	}
</style>
