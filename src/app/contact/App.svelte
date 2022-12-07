<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-2 gap-5">

  <div class="item">
    <label for="first_name" required>First Name</label>
    <input type="text" bind:value={first_name} id="first_name" class="border p-1" placeholder="John" required/>
  </div>

  <div class="item">
    <label for="last_name" required>Last Name</label>
    <input type="text" bind:value={last_name} id="last_name" class="border p-1" placeholder="Doe" required/>
  </div>

  <div class="item">
    <label for="email" required>Email Address</label>
    <input type="email" bind:value={email} id="email" class="border p-1" placeholder="john@example.com" required/>
  </div>

  <div class="item">
    <label for="business">Business</label>
    <input type="text" bind:value={business} id="business" class="border p-1" placeholder="Acme Company"/>
  </div>

  <div class="bg-red-100 col-span-2">
    <button type="submit">{status === 'COMPLETE' ? 'done' : 'submit'}</button>
  </div>
</form>

{#if status === 'COMPLETE'}
  <div class="text-6xl font-bold">Form submitted woooo</div>
{/if}

{#if status === 'ERROR'}
  <div class="text-6xl font-bold">Something went wrong, please try again</div>
{/if}

<script>

  /**
   * Available statues:
   * - IDLE
   * - LOADING
   * - COMPLETE
   * - ERROR
   */
  let status = 'IDLE'
  let first_name = ''
  let last_name = ''
  let email = ''
  let business = ''

  const fakePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('done')
      }, 2000)
    })
  }

  const handleSubmit = () => {
    fakePromise().then(() => {
      status = 'COMPLETE'
    })
  }
</script>

<style>
  .item {
    display: flex;
    flex-direction: column;
  }

  .item label[required]::after {
    content: '*';
    color: red;
  }
</style>