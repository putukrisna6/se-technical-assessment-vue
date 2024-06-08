<!-- credit: https://codesandbox.io/p/sandbox/vue-tailwind-star-rating-xdvr4 -->

<template>
  <div class="flex">
    <div v-for="i in 5" :key="i" class="flex flex-col items-center mr-1">
      <button type="button" @click="handleClick(i)" class="w-full">
        <svg class="block w-full" :class="[value >= i ? 'text-grey-400' : 'text-purple-200']" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      </button>
      <span class="mt-1">{{ i }}</span>
    </div>
  </div>
</template>

<script>
import api from '@/services/apiService';

export default {
  name: "StarRating",
  props: {
    value: Number,
  },
  data() {
    return {
      error: false
    }
  },
  methods: {
    async handleClick(i) {
      this.$emit('input', i);

      try {
        await api.postFeedback({ score: i });
      } catch (error) {
        this.error = true;
      }
    }
  }
};
</script>