<script lang="ts">
  export let name: string
  export let status : string
  export let date: Date
  export let amount: number

  function formatCurrency(amount: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)
  }

  function formatDate(date: Date) {
    return Intl.DateTimeFormat('pt-BR').format(date)
  }
</script>


<div class="container">
  <span>{name}</span>
  <span>{status}</span>
  <span>{formatDate(date)}</span>
  <span>{formatCurrency(amount)}</span>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    gap: 8px;
    box-shadow: 1px 1px 1px #a2a2a2;
  }
</style>