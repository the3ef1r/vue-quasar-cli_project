<template>
  <div class="companies-section">
    <section class="section">
      <div
        class="text-h5 q-mb-md text-weight-medium"
      >
        Мы подобрали для вас 6 компаний по банкротству в Нижнем Новгороде
      </div>
      <q-separator />
      компания Зенит: оставить заявку -
      <q-btn
        @click="goToForm('Зенит')"
        section
        label="goToForm"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompaniesSection',
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
