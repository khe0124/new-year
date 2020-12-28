<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <div class="q-px-md" v-for="(item, index) in data.results" :key="index">
        <div v-if="$route.params.id == index + 1">
          <CardResult :sign="item"></CardResult>
        </div>
      </div>
      <q-btn label="다시 해보기" @click="$router.push('/')"></q-btn>
    </div>
    <p class="text-center">
      일부서비스의 경우 제휴마케팅의 일환으로 수수료를 받을 수 있습니다.
    </p>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("survey");
import CardResult from "@card/CardResult";
export default {
  components: {
    CardResult
  },
  computed: {
    ...mapState({
      data: "results" //#2
    })
  },
  data() {
    return {
      sign: this.$route.params.sign
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions({
      init: "dbInit" //#3
    })
  }
};
</script>
