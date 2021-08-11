<template>
  <div class="m-4 md:px-4 md:py-2">
    <div class="flex justify-between mb-4">
      <span class="text-3xl font-bold">Your Results</span>
      <span class="flex items-center justify-center">{{ calcScore() }} %</span>
    </div>
    <ProgressBar class="mb-4" :progress="calcScore()"></ProgressBar>

    <div
      v-for="(result, index) in results"
      :key="index"
      class="md:px-6 md:py-2 rounded mb-4"
    >
      <span class="flex items-center pt-4 mb-2"
        >Q:
        <span class="ml-2 md:ml-4 text-gray-700 lg:w-full">{{ result.text }}</span></span
      >

      <div class="mb-4">
        <div v-for="(answer, index) in result.answers" :key="index">
          <div class="flex w-full p-2">
            <span
              :class="{
                'bg-cognito-primary text-white':
                  answer == result.userAnswer && answer.correct,
                'bg-red-500 text-white': answer == result.userAnswer && !answer.correct,
                'bg-cognito-primary text-white': answer.correct,
              }"
              class="bg-gray-100 rounded-full w-full lg:w-1/2 py-2 px-6"
              >{{ answer.text }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full mt-12">
      <button
        v-on:click="$emit('reset')"
        class="w-48 bg-cognito-primary px-4 py-6 rounded-lg text-white hover:bg-cognito-secondary"
      >
        Start Over
      </button>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "Results",
  props: ["results"],
  components: {
    ProgressBar,
  },
  data: function () {
    return {
      selected: -1,
    };
  },
  methods: {
    selectAnswer: function (index) {
      this.$emit("user-selected", index);
      this.selected = index;
    },
    calcScore: function () {
      var score = 0;
      //   console.log(this.results);
      for (let i = 0; i < this.results.length; i++) {
        for (let j = 0; j < this.results[i].answers.length; j++) {
          if (
            this.results[i].userAnswer.text === this.results[i].answers[j].text &&
            this.results[i].answers[j].correct
          ) {
            score++;
          }
        }
      }
      return (score / this.results.length) * 100;
    },
  },
};
</script>
