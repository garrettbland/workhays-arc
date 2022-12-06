<form on:submit={handleSubmit}>
  <input class="border p-1" placeholder="Input"/>
  <button type="submit">Submit</button>

  {#if status === 'COMPLETE'}
    <div class="text-6xl font-bold">Form submitted woooo</div>
  {/if}
</form>

<script>

  let status = 'IDLE'

  const handleSubmit = (event) => {
    event.preventDefault()
    status = 'COMPLETE'
    alert('submitted')
  }
</script>
