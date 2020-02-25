<template>
  <div>
    <v-data-table
      multi-sort
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      @click:row="onRowClick"
      class="elevation-1" 
    >
      <template v-slot:item.salary="{ item }">
        <span>{{ item.salary | currency }}</span>
      </template>    
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeTable',
  props: {
    employees: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: 'Employee ID', value: 'id', align: 'left' },
      { text: 'Name', value: 'name' },
      { text: 'Department', value: 'department' },
      { text: 'Title', value: 'title' },
      { text: 'Annual Salary', value: 'salary' }
    ]
  }),
  methods: {
    onRowClick(event) {
      this.$emit('select-employee', event)
    },
  }
};
</script>

<style>
.v-data-table__wrapper > table > tbody > tr {
  cursor: pointer;
}
</style>
