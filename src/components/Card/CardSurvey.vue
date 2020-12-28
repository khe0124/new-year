<template>
  <div>
    <h3>{{ question }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    description: String
  },
  data() {
    return {};
  }
};
</script>
