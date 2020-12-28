<template>
  <q-page class="flex flex-center">
    <div>
      <h3>2021년 신년운세</h3>
      <p>생일이 있는 주간을 선택하세요.</p>
      <q-select
        outlined
        label="별자리를 선택하세요."
        v-model="sign"
        :options="signOptions"
        @input="selectSign"
        :option-label="
          opt =>
            Object(opt) === opt && 'date' in opt
              ? opt.date
              : '생일이 있는 주간을 선택하세요.'
        "
        emit-value
        map-options
      ></q-select>
      <q-btn label="행운 확인하기" @click="submit"></q-btn>
    </div>
  </q-page>
</template>

<script>
import CardSurvey from "@card/CardSurvey";
import { QSpinnerOrbit } from "quasar";
// import question from "../data/Questions.json";
export default {
  name: "PageIndex",
  components: {
    // CardSurvey
  },
  data() {
    return {
      step: 1,
      sign: null,
      signOptions: [
        { no: 1, star: "물병", date: "1/20 ~ 2/18" },
        { no: 2, star: "물고기", date: "2/19 ~ 3/20" },
        { no: 3, star: "양", date: "3/21 ~ 4/19" },
        { no: 4, star: "황소", date: "4/20 ~ 5/20" },
        { no: 5, star: "쌍둥이", date: "5/21 ~ 6/21" },
        { no: 6, star: "게", date: "6/22 ~ 7/22" },
        { no: 7, star: "사자", date: "7/23 ~ 8/22" },
        { no: 8, star: "처녀", date: "8/23 ~ 9/22" },
        { no: 9, star: "천칭", date: "9/23 ~ 10/23" },
        { no: 10, star: "전갈", date: "10/24 ~11/22" },
        { no: 11, star: "사수", date: "11/23 ~ 12/21" },
        { no: 12, star: "염소", date: "12/22 ~ 1/19" }
      ]
    };
  },
  methods: {
    selectSign: function() {
      console.log(this.sign);
    },
    showLoading() {},
    submit: function() {
      console.log(this.sign);
      this.$q.loading.show({
        spinner: QSpinnerOrbit,
        backgroundColor: "black",
        message: "결과 분석 중"
      });

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.$router.push({
          name: "result",
          params: { id: this.sign.no, sign: this.sign }
        });
        this.timer = void 0;
      }, 2000);
    }
  }
};
</script>
