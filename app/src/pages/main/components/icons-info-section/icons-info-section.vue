<template>
  <section-wrapper>
    <div class="row justify-between items-center">
      <div class="col-lg-auto col-xs-12 q-flex-row-xs">
        <q-icon
          name="img:icons/heading-section/icon_1.svg"
          size="xl"
          color="main-grey"
          class="q-mb-sm q-mr-sm"
        />
        <div class="text-body1">
          Федеральный сервис
        </div>
      </div>
      <q-separator
        class="full-width q-my-md"
        v-if="isMobile"
      />
      <div class="col-lg-auto col-xs-12 q-flex-row-xs">
        <q-icon
          name="img:icons/heading-section/icon_2.svg"
          size="xl"
          color="main-grey"
          class="q-mb-sm q-mr-sm"
        />
        <div class="text-body1">
          Работаем с проверенными компаниями
        </div>
      </div>
      <q-separator
        class="full-width q-my-md"
        v-if="isMobile"
      />
      <div class="col-lg-auto col-xs-12 q-flex-row-xs">
        <q-icon
          name="img:icons/heading-section/icon_3.svg"
          size="xl"
          color="main-grey"
          class="q-mb-sm q-mr-sm"
        />
        <div class="text-body1">
          Быстрая обработка заявки
        </div>
      </div>
      <q-separator
        class="full-width q-my-md"
        v-if="isMobile"
      />
      <div class="col-lg-auto col-xs-12 q-flex-row-xs">
        <q-icon
          name="img:icons/heading-section/icon_4.svg"
          size="xl"
          color="main-grey"
          class="q-mb-sm q-mr-sm"
        />
        <div class="text-body1">
          Бесплатная консультация
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from 'components/section-wrapper';

export default {
  name: 'HeadingSection',
  components: { SectionWrapper },
  computed: {
    isMobile() {
      return this.$q.screen.width < 500;
    },
  },
};
</script>
<style lang="scss">

</style>
