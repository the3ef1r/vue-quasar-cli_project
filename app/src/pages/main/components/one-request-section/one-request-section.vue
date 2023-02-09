<template>
  <section-wrapper class="one-request">
    <div
      class="row  box-container box-shadow-main items-center"
      :class="!isMobile ? 'no-wrap' : ''"
    >
      <div class="column">
        <div class="heading-h4 text-smaller q-mb-lg">
          <span class="text-secondary">Заполните 1 заявку</span>
          и мы отправим её сразу во все проверенные юридические компании
        </div>
        <div class="q-mb-sm text-test">
          Уникальное предложение позволит:
        </div>
        <ul class="q-mb-xl list q-pl-none">
          <li>
            <q-icon
              name="mdi-check-circle"
              color="secondary"
              class="q-mr-sm"
            />Подобрать выгодные условия для вас в проверенных юридических компаниях
          </li>
          <li>
            <q-icon
              name="mdi-check-circle"
              color="secondary"
              class="q-mr-sm"
            />Увеличить вероятностьодобрения заявки
          </li>
          <li>
            <q-icon
              name="mdi-check-circle"
              color="secondary"
              class="q-mr-sm"
            />Ускорить процесс подписания договора и избавиться от долгов
          </li>
        </ul>
        <div :class="isMobile ? 'full-width' : ''">
          <q-btn
            rounded
            label="Подобрать компании"
            color="secondary"
            class="base-button"
            :class="isMobile ? 'full-width' : ''"
            icon-right="arrow_outward"
            @click="scrollToElement('filter-section')"
          />
        </div>
      </div>
      <div
        class="col-auto"
        :class="isMobile ? 'q-mt-xl' : ''"
        style="width: 400px"
      >
        <q-img
          src="img/one-request-section/img.svg"
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
  name: 'OneRequestSection',
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
.one-request {
  .box-container {
    border-radius: 20px;
    padding: 50px 50px 50px 35px;
    @media (max-width: $breakpoint-xs-max) {
      padding: 10px 0;
    }
  }

}
.heading-h4.text-smaller {
  font-size: 28px;
  @media (max-width: $breakpoint-xs-max) {
    font-size: 24px;
  }
}
.list {
  list-style: none;
  li {
    font-family: 'Inter Tight', sans-serif;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    i {
      font-size: 20px;
    }
  }
}
.text-test {
  font-family: 'Unbounded', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
</style>
