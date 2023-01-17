<template>
  <div class="heading-section">
    <section
      class="section"
    >
      <div class="text-white">
        <div class="row">
          <div class="col-10">
            <div
              class="q-mb-lg text-h4 text-weight-bolder q-ma-none"
            >
              Подбери лучшую компанию в 1 клик, чтобы списать долги по кредитам и микрозаймам
            </div>
          </div>
          <div class="col-2">
            <q-img
              src="img/logo_girl.png"
              spinner-color="white"
              style="height: 140px; max-width: 250px"
            />
          </div>
        </div>
        <div class="q-mb-lg">
          Получите расчёт стоимости
          полного списания долгов в ТОП-6 юридических
          компаниях России по банкротству физических лиц
        </div>
        <div class="q-mb-lg text-italic">
          На основании закона №127-ФЗ граждане РФ, которые не могут
          рассчитаться с кредиторами, могут воспользоваться правом
          на законное списание долгов. Должники получают возможность
          освободиться от кредитов и начать свою финансовую историю с нуля.
        </div>
        <div class="row">
          <q-btn
            class="bg-secondary text-white"
            label="Подбери компанию прямо сейчас"
            icon-right="trending_flat"
            size="xl"
          />
        </div>
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
.heading-section {
  background: radial-gradient(50% 50% at 50% 50%, #48ACE8 0%, #028CD6 100%);
}
</style>
