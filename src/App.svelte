<script>
	import Item from './components/Item/Item.svelte'

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
</main>

<style>
		section {
			display: flex;
			flex-direction: column;
		}
</style>

<svelte:head>
	<style>
		html, body {
			margin: 0;
			padding: 0;
		}
	</style>
</svelte:head>
