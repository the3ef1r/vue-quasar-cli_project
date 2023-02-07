<template>
  <section-wrapper
    class="filter-section"
    id="filter-section"
  >
    <div class="box-shadow-main">
      <div class="column q-mb-md">
        <div
          class="heading-h4 q-mb-md text-weight-bolder"
        >
          Банкротство физических лиц в <a
            class="text-secondary"
            @click="changeCity"
          >{{ getCurrentCity }}</a>
        </div>
        <div class="text-body2">
          На данный момент нами отобрано {{ companies.length }} компаний в вашем регионе.
          Для того, чтобы воспользоваться государственной процедурой списания
          долгов для физических лиц просто отправьте заявку.
        </div>
      </div>
      <div class="row items-center q-col-gutter-md">
        <div class="col-4">
          <q-select
            :options="options"
            outlined
            option-label="label"
            color="secondary"
            flat
            label="Сумма долга"
            v-model="sum"
            behavior="menu"
          />
        </div>
        <div class="col-auto">
          <q-checkbox
            v-model="radio"
            label="Оформить беспроцентную рассрочку"
          />
        </div>
        <div class="col-auto">
          <q-btn
            rounded
            label="Подобрать"
            color="secondary"
            class="base-button"
            icon-right="arrow_outward"
            @click="$refs.companies.showAll()"
          />
        </div>
      </div>
      <q-separator class="q-my-lg" />
      <div class="text-h5">
        Мы подобрали для вас
        <span class="text-secondary">{{ companies.length }} компаний</span>
        по банкротству в {{ currentCity }}
        <company-item
          ref="companies"
          :data="companies"
          @form-click="openDialog"
        />
      </div>
    </div>
    <change-city-dialog ref="changeCityDialog" />
    <main-form-dialog ref="formDialog" />
  </section-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import ChangeCityDialog from 'components/change-city-dialog/change-city-dialog';
import SectionWrapper from 'components/section-wrapper';
import CompanyItem from 'components/company-item/company-item';
import MainFormDialog from 'components/main-form-dialog/main-form-dialog';

export default {
  name: 'FilterSection',
  components: {
    MainFormDialog, CompanyItem, SectionWrapper, ChangeCityDialog,
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity;
    },
  },
  data() {
    return {
      sum: { value: '1', label: 'до 300 000р' },
      radio: true,
      options: [
        { value: '1', label: 'до 300 000 руб' },
        { value: '2', label: '300 000 - 500 000 руб' },
        { value: '3', label: '500 000 - 1 000 000 руб' },
        { value: '4', label: '1 000 000 - 1 500 000 руб' },
        { value: '5', label: 'более 1 500 000 руб' },
      ],
      companies: [
        {
          name: 'Зенит',
          description: 'Федеральная юридическая компания',
          cost: 'от 5 тыс.',
          maxCost: 'до 500 тыс.',
          microCredit: false,
          deals: {
            all: 25827,
            completed: 25586,
          },
        },
        {
          name: 'Контора с длинным названием',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: true,
          deals: {
            all: 12390,
            completed: 9109,
          },
        },
        {
          name: 'ООО Рога и Копыта',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: false,
          deals: {
            all: 25827,
            completed: 12463,
          },
        },
        {
          name: 'ООО Рога и Копыта',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: true,
          deals: {
            all: 25827,
            completed: 16234,
          },
        },
        {
          name: 'ООО Рога и Копыта',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: false,
          deals: {
            all: 9631,
            completed: 9611,
          },
        },
        {
          name: 'ООО Рога и Копыта',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: true,
          deals: {
            all: 1652,
            completed: 1251,
          },
        },
        {
          name: 'Кусок кала с длинным названием',
          description: 'Федеральная еще длинее названиеюридическая компания',
          cost: 'от 10 тыс.',
          maxCost: 'до 100 тыс.',
          microCredit: true,
          deals: {
            all: 25827,
            completed: 19241,
          },
        },
      ],
    };
  },
  methods: {
    changeCity() {
      this.$refs.changeCityDialog.open();
    },
    openDialog() {
      this.$refs.formDialog.open();
    },
  },
};
</script>
<style lang="scss">
.filter-section .box-shadow-main  {
  padding: 20px 40px;
  background-color: #FAFAFA;
  border-radius: 20px;
}
.text-body2 {
  color: $grey-main;
}
</style>
