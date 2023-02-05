<template>
  <section-wrapper class="heading-section">
    <div
      class="row box-shadow-main items-center"
      :class="!isMobile ? 'no-wrap' : ''"
    >
      <div
        class="column q-ma-none"
      >
        <span
          v-if="isMobile"
          class="heading-h4 text-weight-bolder"
        >
          Чтобы списать долги по кредитам и микрозаймам подбери
          <span class="text-secondary">в 1 клик</span> лучшую компанию
        </span>
        <span
          v-else
          class="heading-h4 text-weight-bolder"
        >
          Подбери лучшую компанию<br>
          <span class="text-secondary">в 1 клик,</span> чтобы списать долги
          по кредитам и микрозаймам
        </span>
        <div class="q-mt-md text-body1">
          Получите расчёт стоимости полного списания  долгов в ТОП-6
          юридических компаниях России по банкротству физических лиц
        </div>
        <div
          :class="isMobile ? 'q-my-md' : ''"
          class="q-my-xl-sm"
        >
          <q-btn
            label="Подбери компанию прямо сейчас"
            icon-right="arrow_outward"
            size="xl"
            color="secondary"
            class="button-custom right-icon-secondary q-my-md"
            :class="isMobile ? 'full-width' : ''"
            outline
          />
        </div>
        <div class="row">
          <div class="col-auto">
            <div class="text-italic text-body2 text-grey-6 ">
              На основании закона №127-ФЗ граждане РФ, которые не могут
              рассчитаться с кредиторами, могут воспользоваться
              правом на законное списание долгов.
              Должники получают возможность освободиться от кредитов
              и начать свою финансовую историю с нуля
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-auto"
        :class="isMobile ? 'full-width' : ''"
        style="width: 438px;margin-left: 60px"
      >
        <q-img
          src="img/heading-section/logo_girl_3.svg"
        />
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
.heading-section .box-shadow-main  {
  padding: 70px 10px 20px 50px;
  background-color: #FAFAFA;
  border-radius: 20px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 50px 0 0;
  }
  @media (min-width: $breakpoint-sm-min) {
    margin-top: 10px;
  }
}
.button-custom {
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.14));
  border-radius: 80px;
  .q-btn__content {font-size: 16px;}
  .block {
  text-transform: initial;
    color: $dark;
  }
}
</style>
