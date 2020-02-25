<template>
  <v-card>
    <v-card-title>{{ statistic.title }}</v-card-title>
    <v-card-text class="display-2">{{ statistic.value }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    statistic: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
/** 
 * Apparently, if you use SCSS in CodeSandbox in a Vue CLI project, the <style> 
 * tag in the SFC ***CANNOT*** be empty. It produces the following TypeError in 
 * vendors~vue-style-compiler:
 * 
 * Cannot read property 'toString' of undefined
 * 
 * Even using a comment, like this one, suffices as a fix. This may be the case 
 * in "regular" Vue CLI projects, but I haven't verified it yet, so this could 
 * be a CodeSandbox thing.
 */
</style>
