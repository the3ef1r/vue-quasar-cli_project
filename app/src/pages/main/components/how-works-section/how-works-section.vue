<template>
  <div class="how-works-section">
    <section class="section">
      <div
        class="q-mb-md heading-h4"
      >
        Как работает сервис
      </div>
      <div class="row q-col-gutter-md">
        <div
          class="block col-4"
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="block-fill rounded-borders q-pa-md">
            <div class="index">
              {{ index+1 }}
            </div>
            <div class="full-height column justify-between items-start">
              <q-icon
                color="secondary"
                :name="item.icon"
                size="xl"
                class="q-mb-sm q-ml-sm q-mt-sm"
              />
              <div class="text-subtitle1 q-mb-sm text-weight-bolder">
                {{ item.subtitle }}
              </div>
              <div class="text-body2 text-grey-7 q-mb-md">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HowWorksSection',
  data() {
    return {
      items: [
        { icon: 'border_color', subtitle: 'Выберите лучшее предложение', text: 'Мы подобрали ТОП юридических компаний в России по банкротству ФЛ' },
        { icon: 'border_color', subtitle: 'Заявка в один клик', text: 'Выберете одну или несколько компаний и отправьте заявку' },
        { icon: 'border_color', subtitle: 'Решение в течение 30 минут', text: 'Анкета будет направлена напрямую в юридические компании и рассмотрена в течение 30 минут' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.block-fill {
  min-height: 200px;
  position: relative;
  background-color: #F4F5F8;
  .index {
    color: #48ACE8;
    font-size: 50px;
    position: absolute;
    right: 20px;
    top: 12px;
  }
}
</style>
