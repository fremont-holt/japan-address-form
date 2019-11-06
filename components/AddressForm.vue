<template>
  <form @submit.prevent="">
    <div class="field">
      <label class="label" for="start-zip">Zip Code</label>
      <div class="field-body is-horizontal">
        <input
          id="start-zip"
          type="text"
          class="input start-zip"
          placeholder="xxx"
          maxlength="3"
          required
        />
        <input
          id="end-zip"
          type="text"
          class="input end-zip"
          placeholder="xxxx"
          maxlength="4"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label" for="region">Region</label>
      <input
        id="region"
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
        type="text"
        placeholder="Extended Address"
        class="input"
        required
      />
    </div>
    <div class="field is-grouped">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
form {
  margin: 20px;
}
.start-zip {
  max-width: 100px;
  margin-right: 25px;
}

.end-zip {
  max-width: 150px;
}

.label {
  color: #ffffff;
}

.button {
  width: 100%;
  font-size: 2em;
}
</style>
