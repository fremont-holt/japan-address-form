# Address Form Vue Test

> This is a form that will except a Japanese formatted address and post it to an api

## Design Decisions

### Layout

> I went with a color scheme based on Credit Engines. Color and movement is used to let the user know when a form field invalid. Bulma was used to bootstrap some base styles and quickly get up and running.

### Autofill

> Entering a zip code and leaving the field will autofill the other fields with the proper information. In order to make this available offline I ported the address info into js objects inside the project. This was done because the js object lookups are constant time so it doesn't matter how many there are when we look them up. There was an issue with the object being too large so I split it up between multiple files and dynamically load the one I need based on the zip that has been entered. I would like to split this out when I have time into a npm module that can be used wherever.

### Passed Prop

> The language radio button is hooked to a property that lets the form know what language it should be in. I realize that this is not a scalable way to do the translation of a website but purely did it to satisfy the passing a prop portion of the requirement.

### Backend

> https://github.com/fremont-holt/japan-address-form-backend

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
