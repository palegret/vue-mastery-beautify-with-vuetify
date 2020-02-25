<template>
  <v-app>
    <MainAppBar/>

    <v-content>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>

    <MainAppFooter/>
  </v-app>
</template>

<script>
import MainAppBar from './components/MainAppBar';
import MainAppFooter from './components/MainAppFooter';
import Login from './views/Login';

export default {
  name: 'App',
  components: {
    MainAppBar,
    MainAppFooter,
    Login
  },
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

<style>
/******************************************************************************
Transitions
*******************************************************************************/

/* fade */

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

/* slide-fade */

.slide-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* slide-up */

.slide-up-enter {
  transform: translateY(10px); 
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}
</style>
