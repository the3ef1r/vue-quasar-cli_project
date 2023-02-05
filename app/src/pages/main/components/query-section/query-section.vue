<template>
  <section class="query-section bg-grey-4">
    <div class="wrapper">
      <div class="text-h4 text-weight-bolder q-mb-md">
        Повысить вероятность списания долгов в 3 раза по самой выгодной цене
      </div>
      <div class="text-body1 text-weight-regular q-mb-xl">
        Заполните 1 заявку и мы отправим её сразу во все проверенные юридические компании
      </div>
      <div class="">
        <div class="text-subtitle2 q-mb-md">
          Уникальное предложение позволит:
        </div>
        <ul>
          <li
            v-for="(item,index) in items"
            :key="index"
          >
            {{ item.text }}
          </li>
        </ul>
        <q-btn
          class="bg-secondary text-white"
          label="Отправить заявку во все компании"
          icon-right="trending_flat"
          size="xl"
          @click="goToForm"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuerySection',
  data() {
    return {
      items: [
        { text: 'подобрать выгодные условия для вас в проверенных юридических компаниях' },
        { text: 'увеличить вероятность одобрения заявки' },
        { text: 'ускорить процесс подписания договора и избавиться от долгов' },
      ],
    };
  },
  methods: {
    goToForm() {
      const routeData = this.$router.resolve({
        name: 'form-page',
        query: {
          companyName: null,
        },
      });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>
