<template>
  <div class="heading-section">
    <section
      class="section"
    >
      <div class="row no-wrap">
        <div
          class="q-md-mb-lg heading-h4 text-weight-bolder q-ma-none"
        >
          Чтобы списать долги по кредитам и
          микрозаймам подбери <span class="text-secondary">в 1 клик</span>
          лучшую компанию
        </div>
        <q-img
          style="max-width:440px;"
          src="img/logo_girl_3.svg"
        />
      </div>

      <div class="q-mb-lg text-body1">
        Сокращаем 10 часов вашего времени на подборе компаний и экономим
        до 50 тыс. руб. при заключении договора с юридической компанией
      </div>
      <div class="row">
        <q-btn
          flat
          label="Подбери компанию прямо сейчас"
          icon-right="arrow_outward"
          size="xl"
          class="button"
          outline
        />
      </div>
      <div class="q-mb-lg text-italic">
        На основании закона №127-ФЗ граждане РФ, которые не могут
        рассчитаться с кредиторами, могут воспользоваться правом на законное списание долгов.
        Должники получают возможность освободиться от кредитов
        и начать свою финансовую историю с нуля
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeadingSection',
};
</script>
<style lang="scss">
.heading-section section {
  background-color: #FAFAFA;
  border-radius: 20px;
  @media (min-width: $breakpoint-sm-min) {
    margin-top: 50px;
  }
}
</style>
