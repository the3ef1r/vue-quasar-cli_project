<template>
  <div class="trust-section">
    <section class="section">
      <div class="row">
        <div class="col-4">
          <q-img
            src="img/logo_girl2.png"
            spinner-color="white"
          />
        </div>
        <div class="col-8 column">
          <div
            class="text-h4 q-mb-xl text-weight-bolder text-white"
          >
            Почему нам доверяют?
          </div>
          <div
            class="row justify-start items-start q-mb-sm no-wrap"
            v-for="(item,index) in items"
            :key="index"
          >
            <q-icon
              name="check"
              size="md"
              color="secondary"
              class="bg-white q-mr-md rounded-borders"
            />
            <div class="col-auto text-white">
              <div class="text-subtitle1 text-weight-medium q-mb-sm">
                {{ item.text }}
              </div>
              <div class="text-body2 text-weight-regular">
                {{ item.textSecondary }}
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
  name: 'TrustSection',
  data() {
    return {
      items: [
        { text: 'Воспользуйтесь услугой  подбора компании бесплатно', textSecondary: 'Наши услуги вам ничего не стоят.' },
        { text: 'Сэкономьте свое время', textSecondary: 'Вам не нужно тратить время на подбор предложения и самим разбираться с условиями' },
        { text: 'Ваши данные под защитой', textSecondary: 'Вы сами решаете в какие компании отправить заявку. Ваши личные данные не передаются третьим лицам, а технология передачи данных защищена' },
        { text: 'Индивидуальное решение', textSecondary: 'После отправки заявки для вас будет подобрано решение с учетом вашего финансового состояния' },
      ],
    };
  },
};
</script>
<style lang="scss">
.trust-section {
  background: radial-gradient(50% 50% at 50% 50%, #48ACE8 0%, #028CD6 100%);
}
</style>
