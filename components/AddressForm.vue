<template>
  <div>
    <form v-if="!formSubmitted" @submit.prevent="submit">
      <div class="field">
        <label class="label" for="start-zip">Zip Code</label>
        <input
          id="zip"
          v-model="zip"
          type="text"
          class="input zip"
          :class="{ 'is-danger': !zipValid, wobble: !zipValid }"
          placeholder="xxxxxxx"
          maxlength="7"
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
          :class="{ 'is-danger': !regionValid, wobble: !regionValid }"
          @blur="blurRegion"
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
          :class="{ 'is-danger': !localityValid, wobble: !localityValid }"
          @blur="blurLocality"
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
          :class="{
            'is-danger': !streetAddressValid,
            wobble: !streetAddressValid
          }"
          @blur="blurStreetAddress"
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
    <h1 v-else>Thank you!</h1>
  </div>
</template>

<script>
import axios from 'axios'
import findByZip from '@/components/js/findByZip'

export default {
  data() {
    return {
      zip: '',
      region: '',
      locality: '',
      streetAddress: '',
      extendedAddress: '',
      formSubmitted: false,
      zipValid: true,
      regionValid: true,
      localityValid: true,
      streetAddressValid: true
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
        this.zipValid = true
      } else {
        this.zipValid = false
      }
    },
    blurRegion() {
      if (this.region === '') {
        this.regionValid = false
      } else {
        this.regionValid = true
      }
    },
    blurLocality() {
      if (this.locality === '') {
        this.localityValid = false
      } else {
        this.localityValid = true
      }
    },
    blurStreetAddress() {
      if (this.streetAddress === '') {
        this.streetAddressValid = false
      } else {
        this.streetAddressValid = true
      }
    },
    submit() {
      if (this.zip === '' || this.zip.length !== 7) {
        this.zipValid = false
      }
      if (this.region === '') {
        this.regionValid = false
      }
      if (this.locality === '') {
        this.localityValid = false
      }
      if (this.streetAddress === '') {
        this.streetAddressValid = false
      }

      if (
        this.zipValid &&
        this.regionValid &&
        this.localityValid &&
        this.streetAddressValid
      ) {
        axios
          .post('http://127.0.0.1:8000/address/', {
            zip: this.zip,
            locality: this.locality,
            streetAddress: this.streetAddress,
            extendedAddress: this.extendedAddress
          })
          .then(() => {
            this.formSubmitted = true
          })
      }
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

.input.is-danger {
  border-width: 2px;
}

@keyframes wobble {
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
  }

  30% {
    transform: translate3d(0%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  45% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
  }

  60% {
    transform: translate3d(0%, 0, 0) rotate3d(0, 0, 1, 1deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, 0deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.wobble {
  animation-name: wobble;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
</style>
