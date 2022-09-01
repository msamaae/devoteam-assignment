<template>
	<div id="app">
		<div class="wrapper">
			<div class="header-title">Meet the Team</div>
			<div class="header-navbar">
				<div class="header-navbar icon">icon</div>
				<div class="header-navbar searchbar">
					<input type="text" />
				</div>
				<div class="header-navbar icon">icon</div>
			</div>
			<div class="card-container">
				<div class="card" v-for="{ id, name, picture, location, email, cell } in users" :key="id">
					<div class="card-name">{{ name.first, }} {{ name.last }}</div>
					<div class="card-picture"><img :src="picture.thumbnail" alt="Thumbnail picutre" /></div>
					<div class="card-country">{{ location.country }}</div>
					<div class="card-email icon">{{ email }}</div>
					<div class="card-cell icon">{{ cell }}</div>
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
			const { data } = await axios.get('https://randomuser.me/api/?results=2');

			this.users = data.results;
		},
	};
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		background: #ebe9e4;
	}

	html,
	body {
		height: 100%;
	}
</style>
