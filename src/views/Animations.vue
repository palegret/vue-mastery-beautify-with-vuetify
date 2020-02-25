<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <span>Lesson 2. Transitions</span>
          </v-card-title>
          <v-card-text>        
            <v-btn large @click="openModal">Open</v-btn>
            <transition name="fade">
              <div v-if="isOpen" class="mt-2 modal">
                <v-btn large @click="closeModal">Close</v-btn>
              </div>
            </transition>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <span>Lesson 4. Group Transitions</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="9">
                <v-text-field
                  v-model="newContact"
                  label="Name"
                  placeholder="Please provide a contact name"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-btn 
                  large 
                  color="primary" 
                  :disabled="!newContact" 
                  @click="addContact"
                >Add Contact</v-btn>
              </v-col>
            </v-row>
            <h5>Using Vuetify transition components</h5>
            <v-list dense rounded>
              <v-subheader class="text-uppercase">Contacts</v-subheader>
              <v-slide-y-reverse-transition group tag="v-list-item-group">
                <template v-for="(contactName, index) in contacts">
                  <v-list-item :key="`${contactName}_${index}`">
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="contactName"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-slide-y-reverse-transition>
            </v-list>
            <v-divider class="my-4"></v-divider>
            <h5>Using Vuetify transition name</h5>
            <transition-group name="slide-y-reverse-transition" tag="ul">
              <li v-for="contact in contacts" :key="contact">
                {{ contact }}
              </li>
            </transition-group>
            <v-divider class="my-4"></v-divider>
            <h5>Using slide-up transition</h5>
            <transition-group name="slide-up" tag="ul">
              <li v-for="contact in contacts" :key="contact">
                {{ contact }}
              </li>
            </transition-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>export default {
  data: () => ({
    contacts: [
      'Beau Thabeast',
      'Cindy Rella',
      'Alice Wunderlind'
    ],    
    isOpen: false,
    selectedItemIndex: 0,
    newContact: null
  }),
  methods: {
    openModal() {
      this.isOpen = true; 
    },
    closeModal() {
      this.isOpen = false; 
    },
    toggleModal() {
      this.isOpen = !this.isOpen
    },
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = null
    },
    randomKey(index) {
      const baseKey = Math.random().toString().replace(/\./g, '')
      return `${baseKey}_${(index || 0)}` 
    }
  }
}
</script>

<style>
.modal {
  background-color: #e0e0e0;
  border-radius: 2%;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  width: 250px;
}

/**
 * ============================================================================= 
 * Notes
 * -----------------------------------------------------------------------------
 * - CSS imports do not work: @import "../shared/styles/transitions/fade.css";
 * - 'v-' is replaced with the name of the transition, 'fade' in this case.
 * - the '*-enter-to' and '*-leave' classes could be omitted here, since the 
 *   default opacity for elements is 1.
 * ============================================================================= 
 */

/* Transition enter */

.fade-enter { /* starting style */
  opacity: 0;
}

.fade-enter-active { /* active entering style */
  transition: opacity 0.5s ease-in; 
}

.fade-enter-to { /* ending style -- OPTIONAL */
  opacity: 1;
}


/* Transition leave */

.fade-leave { /* starting style -- OPTIONAL */
  opacity: 1;
}

.fade-leave-active { /* active leaving style */
  transition: opacity 0.5s ease-out; 
}

.fade-leave-to { /* ending style */
  opacity: 0;
}


/* slide-up transition */
/* Already exists in Vuetify as 'slide-y-reverse-transition' */

.slide-up-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}
</style>
