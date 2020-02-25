<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-1 primary--text">Signup</h1>
        <v-form ref="signUpForm" v-model="formValid">
          <v-text-field 
            type="email" 
            v-model="email"
            label="Email" 
            prepend-icon="email"
            :rules="emailRules"
          />
          <v-autocomplete 
            label="Which browser do you use?" 
            prepend-icon="language"
            :items="browsers" 
          />          
          <v-file-input label="Attach profile picture" />
          <v-menu
            v-model="showBirthdayMenu"
            transition="scale-transition"
            min-width="290px"
            offset-y
            :close-on-content-click="false"
            :nudge-right="40"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="birthday"
                label="What's your birthday?"
                prepend-icon="event"
                class="mt-0 pt-0"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker 
              v-model="birthday" 
              @input="cancelBirthdayMenu"
            ></v-date-picker>
          </v-menu>
          <v-checkbox 
            v-model="agreeToTerms" 
            label="Agree to terms & conditions" 
            :rules="agreeToTermsRules"
            required
          />
          <v-btn 
            type="submit" 
            color="primary"
            class="mr-2" 
            :disabled="!formValid"
          >Submit</v-btn>
          <!--
          <v-btn 
            color="success" 
            class="mr-2" 
            @click="validateForm"
          >Validate Form</v-btn>
          <v-btn 
            color="warning" 
            class="mr-2" 
            @click="resetValidation"
          >Reset Validation</v-btn>
          -->
          <v-btn 
            color="error" 
            @click="resetForm"
          >Reset Form</v-btn>          
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Should be in /shared/helpers, just leaving it here for now
const emailHas = (value) => {
  value = value || ''
  return {
    username: value.indexOf('@') !== 0,
    atSymbol: value.includes('@'),
    domain: value.indexOf('.') - value.indexOf('@') > 1,
    period: value.includes('.'),
    validDomain: value.indexOf('.') <= value.length - 3
  }
}

export default {
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [
      value => !!value || 'You must agree to the terms and conditions to sign up for an account.'
    ],
    birthday: null,
    browsers: [
      'Chrome', 
      'Firefox', 
      'Safari', 
      'Edge', 
      'Brave'
    ],
    email: '',
    emailRules: [
      value => emailHas(value).username || 'Email should have a username.',
      value => emailHas(value).atSymbol || 'Email should include an @ symbol.',
      value => emailHas(value).domain || 'Email should contain a valid domain.',
      value => emailHas(value).period || 'Email should include a period symbol.',
      value => emailHas(value).validDomain || 'Email should contain a valid domain extension.'
    ],
    formValid: false,
    showBirthdayMenu: false
  }),
  methods: {
    cancelBirthdayMenu() {
      this.showBirthdayMenu = false
    },
    resetForm() {
      this.$refs.signUpForm.reset()
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation()
    },
    validateForm() {
      this.$refs.signUpForm.validate()
    }  
  }
}
</script>
