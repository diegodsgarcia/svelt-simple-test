<script lang="ts">
  export let name: string
  export let types : string[]
  export let order: number
  export let image: string

</script>

<div class="container">
  <span class="order">{order}</span>
  <img class="image" src={image} alt={name} title={name} />
  <p class="name">{name}</p>
  <p class="label">
    {#each types as type}
      <span>{type}</span>
    {/each}
  </p>
</div>

<style>
  .container {
    position: relative;
    padding: 20px;
    background-color: #ffffff;
  }

  .order {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3rem;
  }

  .image {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .name {
    text-transform: capitalize;
  }

  .label {
    display: flex;
    gap: 5px;
  }

  .label span {
    background-color: #000;
    color: #fff;
    padding: 5px 15px;
  }
</style>