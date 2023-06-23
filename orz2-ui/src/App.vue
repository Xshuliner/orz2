<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>Welcome to Your Wrappppppppppppp App</div>
		<router-link to="/react-h5">react-h5</router-link>
		<router-link to="/vue2-h5">vue2-h5</router-link>
		<router-link to="/vue3-h5">vue3-h5</router-link>
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {}
};
</script>

<style></style>
