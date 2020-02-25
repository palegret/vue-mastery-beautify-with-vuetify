#Notes

##To make v-img work with local assets:
Reported in https://github.com/vuetifyjs/vuetify/issues/5403
Used manual require route, e.g., `<v-img :src="require('./assets/logo.jpg')" />`

*** UPDATE *** Ran into this issue:
`Error: /src/assets/vuetify-logo-header.png hasn't been transpiled yet.`
Reported in https://github.com/codesandbox/codesandbox-client/issues/1546
Using a data: URL fixed it, which I then put into a JSON resource which looks cleaner in the template. 
Definitely seems CodeSandbox-specific.
