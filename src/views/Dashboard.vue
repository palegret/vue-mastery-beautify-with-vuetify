<template>
  <v-container>
    <h1 class="display-1 primary--text">Dashboard</h1>

    <!--
    Material Design Viewport Breakpoints

    Device        Code  Types                   From        To
    -----------------------------------------------------------------
    Extra small	  xs	  small to large handset	< 600px     ---
    Small	        sm	  small to medium tablet	600px >     < 960px
    Medium	      md	  large tablet to laptop	960px >     < 1264px*
    Large	        lg	  desktop	                1264px* >   < 1904px*
    Extra large	  xl	  4k and ultra-wides	    > 1904px*   ---
    -----------------------------------------------------------------
    -->

    <v-row>
      <v-col 
      v-for="sale in sales" 
      :key="`${sale.title}`" 
      cols="12" 
      md="4">
        <SalesGraph :sale="sale"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        v-for="statistic in statistics" 
        :key="`${statistic.title}`"
        cols="12"
        sm="6"
        lg="3"
        >
        <StatisticCard :statistic="statistic"/>
      </v-col>
    </v-row>

    <v-row id="belowTheFold" v-intersect="showMoreContent">
      <v-col cols="12" sm="8">
        <EmployeeTable :employees="employees" @select-employee="setEmployee"/>
      </v-col>
      <v-col cols="12" sm="4">
        <EventTimeline :timeline="timeline"/>
      </v-col>
    </v-row>

	  <v-row id="moreContent" v-if="loadNewContent">
	    <v-col>
	      <v-skeleton-loader
	        ref="skeleton"
	        type="table"
	        class="mx-auto"
	      ></v-skeleton-loader>
	    </v-col>
	  </v-row>

    <v-snackbar v-model="showSnackbar" :left="showSnackbarOnLeft">
      {{ snackbarText }}
      <v-btn text color="pink" @click="hideSnackbar">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import employeeData from '../data/employees.json';
import salesData from '../data/sales.json';
import statisticsData from '../data/statistics.json';
import timelineData from '../data/timeline.json';

import EmployeeTable from '../components/EmployeeTable';
import EventTimeline from '../components/EventTimeline';
import SalesGraph from '../components/SalesGraph';
import StatisticCard from '../components/StatisticCard';

export default {
  components: {
    EmployeeTable,
    EventTimeline,
    SalesGraph,
    StatisticCard
  },
  data: () => ({
    employees: employeeData,
    sales: salesData,
    statistics: statisticsData,
    timeline: timelineData,
    selectedEmployee: {
      name: '',
      title: ''
    },
    showSnackbar: false,
    loadNewContent: false
  }),
  computed: {
    snackbarText() {
      if (!this.selectedEmployee) return 'Nothing selected.';

      const { name, title } = this.selectedEmployee;
      return `You have selected ${name}, ${title}.`;
    },
    showSnackbarOnLeft() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  },
  methods: {
    hideSnackbar() {
      this.showSnackbar = false;
    },
    setEmployee(event) {
      this.showSnackbar = true;
      this.selectedEmployee.name = event.name;
      this.selectedEmployee.title = event.title;
    },
    showMoreContent(entries) {
      this.loadNewContent = entries && entries[0] && entries[0].isIntersecting 
    }
  }
};
</script>