<template>
  <div>
    <h1 class="font-bold text-xl mb-2 select-none">Let us know what you think of our product.</h1>
    <button @click="openModal"
      class="select-none bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
      Rate
    </button>
    <FeedbackModal v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>
import FeedbackModal from './FeedbackModal.vue';

export default {
  mounted() {
    document.title = 'Technical Assessment - Feedback Form';
  },
  name: 'FeedbackForm',
  components: {
    FeedbackModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
}

</script>