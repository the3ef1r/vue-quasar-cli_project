<template>
  <button
    class="base-button"
    @click="$emit('click')"
  >
    <!--    <pre v-text="$attrs" />-->
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  computed: {
    label() {
      return this.$attrs.label || '';
    },
  },
};
</script>
<style lang="sass" scoped>
.base-button
  background-color: $secondary
</style>
