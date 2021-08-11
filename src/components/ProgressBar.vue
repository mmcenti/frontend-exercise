<template>
  <div class="h-3 relative rounded-full overflow-hidden">
    <div class="w-full h-full bg-gray-200 absolute"></div>
    <div
      class="h-full absolute"
      :class="{
        'bg-cognito-primary': progress >= 80,
        'bg-cognito-secondary': progress <= 40,
        'bg-yellow-500': progress > 40 && progress < 80,
      }"
      v-bind:style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>
