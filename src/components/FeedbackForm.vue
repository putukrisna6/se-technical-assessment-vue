<template>
  <div>
    <h1 class="font-bold text-xl mb-2 select-none">Let us know what you think of our product.</h1>
    <div class="flex items-center justify-center mb-2 select-none">
      <svg class="block text-grey-400 w-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
      <h1>{{ roundedAverageRating }}</h1>
    </div>
    <button @click="openModal"
      class="select-none bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
      Rate
    </button>
    <FeedbackModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>
import FeedbackModal from './FeedbackModal.vue';
import api from '@/services/apiService';

export default {
  mounted() {
    document.title = 'Technical Assessment - Feedback Form';
    this.getAverageRating();
  },
  name: 'FeedbackForm',
  components: {
    FeedbackModal
  },
  data() {
    return {
      averageRating: 0,
      showModal: false
    };
  },
  computed: {
    roundedAverageRating() {
      return this.averageRating.toFixed(2);
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async getAverageRating() {
      try {
        const data = await api.getFeedbacks();
        const totalScore = data.reduce((sum, feedback) => sum + feedback.score, 0);
        this.averageRating = totalScore / data.length;
      } catch (error) {
        this.averageRating = 0;
      }
    }
  }
}

</script>