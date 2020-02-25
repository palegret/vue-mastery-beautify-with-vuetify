<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card width="400">
          <v-card-title>
            <h1 class="display-1 primary--text">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field 
                label="Username" 
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                :type="passwordFieldType"
                :append-icon="passwordFieldIcon"
                @click:append="toggleShowPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPassword: false
  }),
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
    passwordFieldIcon() {
      return this.showPassword ? 'mdi-eye' : 'mdi-eye-off';
    }
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>
