<script>
import Header from "./components/Header.vue";
import Question from "./components/Question.vue";
import Results from "./components/Results.vue";

export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  components: {
    Header,
    Question,
    Results,
  },
  data() {
    return {
      i: 0,
      userResponses: Array(0).fill(null),
      selected: -1,
      finish: false,
      start: false,
    };
  },
  methods: {
    chooseAnswer: function (index) {
      //   console.log(`setting selected to ${index}`);
      this.selected = index;
    },
    next: function () {
      if (this.selected == -1) {
        alert("You must select an answer before continuing!");
      } else {
        if (this.i < this.questions.length) {
          var q = this.questions[this.i];
          q["userAnswer"] = this.questions[this.i].answers[this.selected];
          this.userResponses.push(q);

          this.$refs.question.reset();
          this.i++;
          this.selected = -1;
        }
      }
    },
    reset: function () {
      this.userResponses = Array(0).fill(null);
      this.selected = -1;
      this.finish = false;
      this.i = 0;
    },
  },
};
</script>

<template>
  <div class="bg-gray-200 p-8 flex justify-center h-screen">
    <div class="rounded bg-white p-6 w-full md:w-3/4 lg:w-1/2 overflow-auto">
      <Header />

      <div v-if="!this.start" class="h-full">
        <span class="text-sm md:text-lg lg:text-2xl flex items-center justify-center mb-6"
          >Welcome! Press start to begin quiz.</span
        >

        <div class="flex items-center w-full justify-center">
          <button
            v-on:click="start = true"
            class="cursor-pointer w-24 md:w-48 bg-cognito-primary px-2 md:px-4 py-2 md:py-6 rounded-lg text-white hover:bg-cognito-secondary"
          >
            Start
          </button>
        </div>
      </div>

      <div v-if="this.start">
        <Question
          ref="question"
          v-if="this.userResponses.length != this.questions.length"
          :question="questions[i]"
          v-on:user-selected="chooseAnswer"
        ></Question>

        <div class="flex items-center w-full justify-center">
          <button
            v-if="this.userResponses.length != this.questions.length"
            v-on:click="next()"
            :disabled="selected == -1"
            :class="{
              'cursor-not-allowed bg-gray-300': selected == -1,
              'hover:bg-cognito-secondary bg-cognito-primary': selected != -1,
            }"
            class="cursor-pointer px-4 py-2 rounded-lg text-white"
          >
            Next
          </button>

          <button
            v-if="this.userResponses.length == this.questions.length && !finish"
            v-on:click="finish = true"
            class="cursor-pointer w-48 bg-cognito-primary px-4 py-6 rounded-lg text-white hover:bg-cognito-secondary"
          >
            Finish
          </button>
        </div>

        <Results v-if="finish" :results="userResponses" v-on:reset="reset()"></Results>
      </div>
    </div>
  </div>
</template>
