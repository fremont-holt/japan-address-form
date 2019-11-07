<template>
  <div class="container">
    <div class="box address-form">
      <div class="control">
        <label class="radio">
          <input
            v-model="language"
            type="radio"
            value="English"
            name="selectedLanguage"
          />
          English
        </label>
        <label class="radio">
          <input
            v-model="language"
            type="radio"
            value="Japanese"
            name="selectedLanguage"
          />
          日本語
        </label>
      </div>
      <addressForm :language="language" />
    </div>
  </div>
</template>

<script>
import AddressForm from '~/components/AddressForm'

export default {
  data() {
    return {
      language: 'English'
    }
  },
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

.radio:hover {
  color: #44d5d2;
}
</style>
