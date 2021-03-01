<script>
	import Item from './components/Item/Item.svelte'
	import Test from './components/Test/Test.svelte'

	const transactions = [
		{
			name: 'João',
			status: 'Paga',
			date: new Date(),
			amount: 1000,
		},
		{
			name: 'Pedro',
			status: 'Paga',
			date: new Date(),
			amount: 2000,
		},
		{
			name: 'Maria',
			status: 'Recusada',
			date: new Date(),
			amount: 3000,	
		},
		{
			name: 'Roberto',
			status: 'Paga',
			date: new Date(),
			amount: 4000,
		}
	]
</script>

<main>
	<section>
		{#each transactions as transaction}
				<Item {...transaction} />
		{/each}
	</section>
	<Test { ...transactions[0] } />
</main>

<style>
		section {
			display: flex;
			flex-direction: column;
		}
</style>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

		html, body {
			margin: 0;
			padding: 0;
			font-family: 'Roboto Condensed', sans-serif;
		}

		.container {
			background-color: #000;
		}
	</style>
</svelte:head>
