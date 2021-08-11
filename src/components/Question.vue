<template>
  <div class="m-4 px-4 py-2">
    <span class="flex items-center pt-4 mb-2"
      >Q: <span class="ml-4 text-gray-700">{{ question.text }}</span></span
    >

    <div class="mb-8">
      <div v-for="(answer, index) in question.answers" :answer="answer" :key="index">
        <div class="flex w-full p-2">
          <span
            v-on:click="selectAnswer(index)"
            :class="{ 'bg-cognito-secondary text-white': selected == index }"
            class="bg-gray-100 rounded-full w-full lg:w-1/2 cursor-pointer py-2 px-6 hover:bg-cognito-secondary hover:text-white"
            >{{ answer.text }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function init() {
  return {
    selected: -1,
  };
}

export default {
  name: "Question",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return init();
  },

  methods: {
    selectAnswer: function (index) {
      this.$emit("user-selected", index);
      this.selected = index;
    },
    reset: function () {
      Object.assign(this.$data, init());
    },
  },
};
</script>
