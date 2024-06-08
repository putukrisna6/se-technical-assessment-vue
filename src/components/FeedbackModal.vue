<template>
  <div class="fixed inset-0 flex items-center justify-center z-50" @click="closeModal">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative bg-white rounded-lg shadow-lg p-8 max-w-sm" @click.stop>
      <h2 class="text-xl font-semibold mb-4 text-left">How would you rate your satisfaction with our product?</h2>
      <div class="mt-8 flex justify-center items-center">
        <template v-if="status === ''">
          <StarRating v-model="rating" @status="handleStatus" />
        </template>
        <template v-else>
          <p v-if="status === true" class="text-green-500">Thank you for your feedback!</p>
          <p v-else class="text-red-500">There was an error submitting your feedback. Please try again.</p>
        </template>
      </div>
      <div class="flex items-center mt-8">
        <p>Very dissatisfied</p>
        <div class="flex-grow"></div>
        <p>Very satisfied</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  methods: {
    closeModal() {
      if (!event.target.closest('.relative')) {
        this.$emit('close');
      }
    },
    handleStatus(status) {
      this.status = status;
      this.$emit('status', status);
    },
  },
  components: {
    StarRating
  },
  data: () => ({
    rating: 4,
    status: '',
  })
}
</script>