<template>
  <section-wrapper>
    asd
  </section-wrapper>
</template>

<script>
import SectionWrapper from 'components/section-wrapper';

export default {
  name: 'CompaniesSection',
  components: { SectionWrapper },
  methods: {
    goToForm(companyName) {
      const routeData = this.$router.resolve({
        name: 'form-page',
        query: {
          companyName,
        },
      });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>
