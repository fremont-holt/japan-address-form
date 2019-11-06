<template>
  <div class="container">
    <div class="box address-form">
      <h1>Please enter your address</h1>
      <addressForm />
    </div>
  </div>
</template>

<script>
import AddressForm from '~/components/AddressForm'

export default {
  components: {
    AddressForm
  }
}
</script>

<style>
.address-form {
  max-width: 750px;
  background-color: #13232f;
  color: #fff;
  margin: 40px auto;
  box-shadow: 0 4px 10px 4px rgba(#13232f, 0.3);
}

h1 {
  font-size: 2em;
  font-weight: 300;
  text-align: center;
}
</style>
