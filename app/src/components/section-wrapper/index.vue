<template>
  <section
    class="section"
  >
    <div
      class="wrapper"
    >
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionWrapper',
};
</script>
<style lang="scss">
.section .wrapper {
  @media (max-width: $breakpoint-xs-max) {
    padding: 10px;
  }
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
}
</style>
