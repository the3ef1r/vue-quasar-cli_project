<template>
  <section-wrapper
    class="we-help-section"
    id="we-help-section"
  >
    <div class="q-mb-xl heading-h4">
      Помогаем подобрать компанию,<br> учитывая ваши запросы
    </div>
    <div class="icons">
      <div class="icon-item">
        <div class="icon-wrapper">
          <q-icon
            name="img:icons/we-help/icon_2.svg"
            color="primary"
          />
        </div>
        Большая часть зарплаты уходит на погашение кредитов
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <q-icon
            name="img:icons/we-help/icon_1.svg"
            color="primary"
          />
        </div>
        Не хотите больше платить по кредиту
      </div>
      <div class="icon-item">
        <div class="icon-wrapper">
          <q-icon
            name="img:icons/we-help/icon_3.svg"
            color="primary"
          />
        </div>
        Не знаете к кому обратиться, чтобы законно списать долг
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from 'components/section-wrapper';

export default {
  name: 'WeHelpSection',
  components: { SectionWrapper },
  computed: {
    isMobile() {
      return this.$q.screen.width < 599.98;
    },
  },
};
</script>
<style lang="scss">
.icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  @media (max-width: $breakpoint-xs-max) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .icon-item {
    background: #FAFAFA;
    border-radius: 20px;
    @media (max-width: $breakpoint-xs-max) {
      padding: 20px;
      font-size: 16px;
      font-weight: 500;
      height: 175px;
      margin-bottom: 12px;
    }
    padding: 40px 20px 40px 40px;
    height: 260px;
    font-family: 'Unbounded', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .icon-wrapper {
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 20px;
      @media (max-width: $breakpoint-xs-max) {
        margin-bottom: 16px;
      }
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .q-icon {
        width: 40px;
        height: auto;
      }
    }
  }
}
</style>
