<template>
  <div class="about-us-section">
    <section class="section">
      <div class="text-h4 text-weight-bolder q-mb-xl">
        Помогаем подобрать компанию, учитывая ваши запросы
      </div>
      <div class="row">
        <div
          v-for="(item,index) in items"
          :key="index"
          class="col-4 column items-center justify-start text-center"
        >
          <div class="big-icon">
            <q-icon
              size="xl"
              :name="item.icon"
              color="secondary"
            />
          </div>
          <div class="text-subtitle1 text-weight-bolder">
            {{ item.text }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUsSection',
  data() {
    return {
      items: [
        { text: 'Большая часть зарплаты уходит на погашение кредитов', icon: 'pie_chart' },
        { text: 'Не хотите больше платить по кредиту', icon: 'payments' },
        { text: 'Не знаете к кому обратиться, чтобы законно списать долг', icon: 'health_and_safety' },
      ],
    };
  },
};
</script>
