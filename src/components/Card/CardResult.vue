<template>
  <div v-bind="sign">
    <h3>{{ sign.star }}자리</h3>
    <p>{{ sign.advice }}</p>
    <p>{{ sign.fortuneColor }}</p>
    <p>{{ sign.fortuneKey }}</p>
    <p>{{ sign.money }}</p>
    <p>{{ sign.love }}</p>
    <p>{{ sign.study }}</p>
    <p>{{ sign.health }}</p>
  </div>
</template>

<script>
export default {
  props: {
    sign: Object
  },
  data() {
    return {};
  }
};
</script>
