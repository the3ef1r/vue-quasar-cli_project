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
          class="heading-h4 text-weight-bolder"
        >
          Чтобы списать долги по кредитам и микрозаймам подбери
          <span class="text-secondary">в 1 клик</span> лучшую компанию
        </span>
        <div class="q-mt-md text-body1">
          Сокращаем 10 часов вашего времени на подборе компаний и экономим до 50 тыс. руб.
          при заключении договора с юридической компанией
        </div>
        <div
          :class="isMobile ? 'q-my-md' : 'q-my-xl'"
        >
          <q-btn
            label="Подбери компанию прямо сейчас"
            icon-right="arrow_outward"
            size="xl"
            color="secondary"
            class="button-custom right-icon-secondary q-my-md"
            :class="isMobile ? 'full-width' : ''"
            outline
            @click="scrollToElement('filter-section')"
          />
        </div>
        <div class="row">
          <div class="col-auto">
            <div class="text-italic text-body2 text-mobile">
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
import { scroll } from 'quasar';

const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: 'HeadingSection',
  components: { SectionWrapper },
  computed: {
    isMobile() {
      return this.$q.screen.width < 599.98;
    },
  },
  methods: {
    scrollToElement(el) {
      const element = document.getElementById(el);
      const target = getScrollTarget(element);
      const offset = element.offsetTop;
      const duration = 1000;
      setScrollPosition(target, offset, duration);
    },
  },
};
</script>
<style lang="scss">
.heading-section {
  @media (max-width: $breakpoint-xs-max) {
    .wrapper {
      background-color: #fafafa;
    }
  }
}
.heading-section .box-shadow-main  {
  padding: 70px 10px 20px 50px;
  background-color: #FAFAFA;
  border-radius: 20px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 50px 0 50px;
    box-shadow: none;
    margin-top: 10px;
  }
  .text-mobile {
    @media (max-width: $breakpoint-xs-max) {
    font-size: 11px;
    line-height: 130%;
    margin-bottom: 50px;
    }
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
