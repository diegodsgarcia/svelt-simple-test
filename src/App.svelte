<script lang="ts">
	import { onMount } from 'svelte'
	import Card from './components/Card/Card.svelte'

	import request from './service/request'

	let pokemons = []

	onMount(async () => {
		pokemons = await request()
	})

</script>

<main>
	<section>
		{#each pokemons as pokemon}
				<Card {...pokemon} />
		{/each}
	</section>
</main>

<style>
		section {
			display: grid;
			padding: 20px;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 10px;
		}
</style>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

		html, body {
			margin: 0;
			padding: 0;
			font-family: 'Roboto Condensed', sans-serif;
			background-color: #DDDDDD;
		}
	</style>
</svelte:head>
