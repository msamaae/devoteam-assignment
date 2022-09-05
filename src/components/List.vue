<template>
	<div class="list-wrapper">
		<div class="list-item" v-for="({ name, picture, location, email, cell }, key) in users" :key="key">
			<div class="list-item__content">
				<div class="list-item__img">
					<img :src="picture.medium" alt="User img" class="" />
				</div>
				<div>
					<div class="list-item__name">{{ name.first }} {{ name.last }}</div>
					<div class="list-item__country">{{ location.country }}</div>
				</div>
			</div>
			<div class="list-item__contact">
				<a :href="email">
					<font-awesome-icon icon="envelope" />
				</a>
				<a :href="cell">
					<font-awesome-icon icon="phone" />
				</a>
			</div>
			<!-- <div class="curve"></div> -->
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
	/* .list-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;

		margin-top: 1rem;

		& .list-item {
			background: #fff;
			display: grid;
			border-radius: 1.25rem;
			padding: 0.5rem 1.25rem;

			grid-template-columns: 1fr 2fr 1fr;

			&__img {
				padding-top: 0.2rem;

				& > img {
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
				padding-left: 0.675rem;
			}

			&__country {
				font-family: 'Lato', sans-serif;
				font-size: 0.75rem;
				line-height: 0.875rem;
				padding-top: 0.25rem;
				padding-left: 0.675rem;
				color: rgba(41, 41, 41, 0.6);
			}

			&__contact {
				font-size: 1.2rem;

				display: flex;
				align-items: flex-end;
				justify-self: flex-end;

				a:link {
					color: rgba(0, 0, 0, 0.8);
					background-color: transparent;
					text-decoration: none;
				}

				a:first-child {
					font-size: 1.375rem;
					margin-right: 0.625rem;
				}
			}
		}
	} */
	.list-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		gap: 1rem;

		& .list-item {
			background: #fff;

			display: flex;
			/* justify-content: space-around; */
			border-radius: 1.25rem;
			padding: 0.5rem 0;
			position: relative;
			z-index: 0;
			max-width: 100%;

			& .curve {
				position: absolute;
				background: #fff;
				width: 84%;
				right: 0;
				bottom: 0;
				height: 100%;
				z-index: -1;
				border-radius: 3rem 1.25rem 1.25rem 0;
			}

			&__content {
				display: flex;
			}

			&__img {
				padding: 0.25rem 1rem 0 1.25rem;

				& > img {
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
				justify-self: flex-end;

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
		}
	}
</style>
