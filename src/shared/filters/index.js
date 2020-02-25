import Vue from 'vue'

import capitalizeFilter from './capitalize'
import currencyFilter from './currency'

Vue.filter('capitalize', capitalizeFilter)
Vue.filter('currency', currencyFilter)
