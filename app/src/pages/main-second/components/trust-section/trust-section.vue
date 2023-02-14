<template>
  <section-wrapper
    class="trust-section"
    id="trust-section"
  >
    <div class="column">
      <div class="q-mb-md heading-h4">
        Почему нам доверяют?
      </div>
    </div>
    <div class="grid">
      <div class="card bg-secondary text-white">
        <q-icon
          size="lg"
          name="mdi-check-circle"
        />
        <div class="text-subtitle1">
          Воспользуйтесь услугой  подбора компании бесплатно
        </div>
        <div class="text-body1">
          Наши услуги вам ничего не стоят
        </div>
      </div>
      <div class="card bg-grey-7 text-white">
        <q-icon
          size="lg"
          name="mdi-check-circle"
        />
        <div class="text-subtitle1">
          Сэкономьте свое время
        </div>
        <div class="text-body1">
          Вам не нужно тратить время на подбор предложения и самим разбираться с условиями
        </div>
      </div>
      <div class="card bg-grey-8">
        <q-icon
          size="lg"
          color="secondary"
          name="mdi-check-circle"
        />
        <div class="text-white text-subtitle1">
          Индивидуальное решение
        </div>
        <div class="text-white text-body1">
          После отправки заявки для вас будет подобрано
          решение с учетом вашего финансового состояния
        </div>
      </div>
      <div class="card bg-grey-2">
        <q-icon
          size="lg"
          color="secondary"
          name="mdi-check-circle"
        />
        <div class="text-dark text-subtitle1">
          Ваши данные под защитой
        </div>
        <div class="text-grey-main text-body1">
          Вы сами решаете в какие компании отправить заявку.
          Ваши личные данные не передаются третьим лицам, а технология передачи данных защищена
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from 'components/section-wrapper';

export default {
  name: 'TrustSection',
  components: { SectionWrapper },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
.trust-section {
  .heading-h4 {
    @media (max-width: $breakpoint-xs-max) {
      font-size: 20px;
    }
  }
  .grid {
    @media (max-width: $breakpoint-xs-max) {
      display: flex;
      flex-direction: column;
      grid-row-gap: 10px;
    }
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    .card {
      padding: 35px 30px 40px 40px;
      @media (max-width: $breakpoint-xs-max) {
        padding: 20px;
      }
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      @include box-shadow($shadow-main);
      .text-subtitle1 {
        font-family: 'Unbounded', cursive;
        font-style: normal;
        font-weight: 500;
        @media (max-width: $breakpoint-xs-max) {
          font-size: 16px;
          line-height: 22px;
        }
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 10px;
        margin-top: 25px;
      }
      .text-body1 {
        font-family: 'Inter Tight', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        margin-top: auto;
        line-height: 22px;
        @media (max-width: $breakpoint-xs-max) {
          font-weight: 400;
          font-size: 13px;
        }
      }
    }
    .card:nth-child(1){ grid-area: 1 / 1 / 2 / 4; }
    .card:nth-child(2){ grid-area: 1 / 4 / 2 / 6; }
    .card:nth-child(3){ grid-area: 2 / 1 / 3 / 3; }
    .card:nth-child(4){ grid-area: 2 / 3 / 3 / 6; }
  }
}
</style>
