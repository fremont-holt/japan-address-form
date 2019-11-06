<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label" for="start-zip">Zip Code</label>
      <input
        id="zip"
        v-model="zip"
        type="text"
        class="input zip"
        placeholder="xxxxxxx"
        maxlength="7"
        required
        @blur="lookUpZip"
      />
    </div>
    <div class="field">
      <label class="label" for="region">Region</label>
      <input
        id="region"
        v-model="region"
        type="text"
        placeholder="Region"
        class="input"
        required
      />
    </div>
    <div class="field">
      <label class="label" for="locality">Locality</label>
      <input
        id="locality"
        v-model="locality"
        type="text"
        placeholder="Locality"
        class="input"
        required
      />
    </div>
    <div class="field">
      <label class="label" for="street-address">Street Address</label>
      <input
        id="street-address"
        v-model="streetAddress"
        type="text"
        placeholder="Street Address"
        class="input"
        required
      />
    </div>
    <div class="field">
      <label class="label" for="extended-address">Extended Address</label>
      <input
        id="extended-address"
        v-model="extendedAddress"
        type="text"
        placeholder="Extended Address"
        class="input"
      />
    </div>
    <div class="field is-grouped">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input type="submit" value="Submit" class="button is-primary" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import findByZip from '@/components/js/findByZip'

export default {
  data() {
    return {
      zip: '',
      region: '',
      locality: '',
      streetAddress: '',
      extendedAddress: ''
    }
  },
  methods: {
    async lookUpZip() {
      const details = await findByZip(this.zip)
      if (details) {
        this.region = details.region
        this.locality = details.locality
        this.streetAddress = details.streetAddress
        this.extendedAddress = details.extendedAddress
      }
    },
    submit(e) {
      console.log({
        zip: this.zip,
        region: this.region,
        locality: this.locality,
        streetAddress: this.streetAddress,
        extendedAddress: this.extendedAddress
      })
    }
  }
}
</script>

<style>
form {
  margin: 20px;
}

.label {
  color: #ffffff;
}

.button {
  width: 100%;
  font-size: 2em;
}
</style>
