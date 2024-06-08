<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative bg-white rounded-lg shadow-lg p-8 max-w-sm">
      <h2 class="text-xl font-semibold mb-4 text-left">How would you rate your satisfaction with our product?</h2>
      <div class="mt-8 flex justify-center items-center">
        <StarRating v-model="rating" />
      </div>
      <div class="flex items-center mt-8">
        <p>Very dissatisfied</p>
        <div class="flex-grow"></div>
        <p>Very satisfied</p>
      </div>
      <div class="flex justify-end">
        <button @click="closeModal" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  components: {
    StarRating
  },
  data: () => ({
    rating: 4,
  })
}
</script>