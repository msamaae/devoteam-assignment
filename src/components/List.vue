<template>
	<div class="list-wrapper">
		<div class="list-item" v-for="({ name, picture, location, email, phone }, key) in users" :key="key">
			<div class="list-item__curve"></div>
			<div class="list-item__content">
				<div class="list-item__img">
					<img :src="picture.medium" alt="User image" />
				</div>
				<div class="list-item__container">
					<div class="list-item__name">{{ name.first }} {{ name.last }}</div>
					<div class="list-item__country">{{ location.country }}</div>
				</div>
			</div>
			<div class="list-item__contact">
				<div>
					<a :href="email" aria-label="email" target="_blank" rel="noopener">
						<font-awesome-icon icon="envelope" />
					</a>
					<a :href="phone" aria-label="phone" target="_blank" rel="noopener">
						<font-awesome-icon icon="phone" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'List',
		props: {
			users: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style lang="scss">
	.list-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		gap: 1rem;

		& .list-item {
			background-color: #a7b8a8;
			display: flex;
			border-radius: 1.25rem;
			padding: 0.5rem 1.25rem;
			position: relative;
			z-index: 0;
			overflow: hidden;
			box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 20%);


			&__curve {
				position: absolute;
				left: 3.425rem;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 2.5rem 1.25rem 1.25rem 0;
				background-color: #fff;
				z-index: -1;
			}

			&__content {
				display: flex;
			}

			&__img {
				padding: 0.25rem 1rem 0 0;

				& > img {
					box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 30%);
					border-radius: 50%;
					max-width: 100%;
				}
			}

			&__name {
				font-family: 'Karla', sans-serif;
				font-size: 1.125rem;
				font-weight: 700;
				line-height: 1rem;
				color: #292929;
				padding-top: 0.725rem;
				max-width: 100%;
			}

			&__country {
				font-family: 'Lato', sans-serif;
				font-size: 0.75rem;
				line-height: 0.875rem;
				padding-top: 0.25rem;
				color: rgba(41, 41, 41, 0.6);
			}

			&__contact {
				font-size: 1.1rem;

				display: flex;
				align-items: flex-end;
				justify-content: flex-end;
				flex: 1;

				a:link {
					color: rgba(0, 0, 0, 0.8);
					background-color: transparent;
					text-decoration: none;
				}

				a:first-child {
					font-size: 1.275rem;
					margin-right: 0.625rem;
				}
			}

			&:nth-child(2) {
				background: #e1d3c7;
			}

			&:nth-child(3) {
				background: #e8cdad;
			}

			&:nth-child(4) {
				background: #e1d3c7;
			}

			&:nth-child(5) {
				background: #e8cdad;
			}
		}
	}
</style>
