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
            class="text-secondary hoverable underline"
            @click="changeCity"
          >{{ currentCity }}</a>
        </div>
        <div class="text-body2">
          На данный момент нами отобрано {{ companies.length }} компаний в вашем регионе.
          Для того, чтобы воспользоваться<br> государственной процедурой списания
          долгов для физических лиц просто отправьте заявку.
        </div>
      </div>
      <div class="row items-center q-col-gutter-md filters">
        <div class="col-md-4">
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
            color="secondary"
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
      <q-separator
        v-if="$q.screen.width > 599.99"
        class="q-my-lg"
      />
      <div class="">
        <div class="main-font fz-18px q-mb-lg">
          Мы подобрали для вас
          <span class="text-secondary">{{ companies.length }} {{ companyWord }}</span>
          по банкротству в {{ getCurrentCity }}
        </div>
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
import { cityIn } from 'lvovich';

export default {
  name: 'FilterSection',
  components: {
    MainFormDialog, CompanyItem, SectionWrapper, ChangeCityDialog,
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity ? cityIn(this.getCurrentCity) : 'Выберите город';
    },
    companyWord() {
      const { length } = this.companies;
      const names = [
        { length: 1, value: 'компанию' },
        { length: 2, value: 'компании' },
        { length: 5, value: 'компаний' },
      ];
      if (length === 1) return names[0].value;
      if (length >= 5) return names[2].value;
      return names[1].value;
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
.filter-section {
  .wrapper {
    @media (max-width: $breakpoint-xs-max) {

    background-color: #fafafa;
    }
  }
}
.filter-section .box-shadow-main  {
  @media (max-width: $breakpoint-xs-max) {
    box-shadow: none;
    padding: 40px 0 0;
    .fz-18px {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
    .filters {
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      margin-bottom: 30px;
    }
  }
  padding: 20px 40px;
  background-color: #FAFAFA;
  border-radius: 20px;
}
.text-body2 {
  color: $grey-main;
}
</style>
