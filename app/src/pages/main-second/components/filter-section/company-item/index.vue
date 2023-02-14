<template>
  <div
    class="companies-list"
    :class="!showMoreButtonIsVisible ? 'show-all' : 'hide-all'"
  >
    <div
      class="wrapper-items"
    >
      <template v-if="!isMobile">
        <div
          class="item"
          v-for="(company,index) in companies"
          :key="index"
        >
          <div class="item_logo-name">
            <div
              class="logo-img"
            >
              <q-img
                class="logo"
                src="img/logo-zenit.svg"
              />
            </div>
            <div class="column">
              <div class="name">
                {{ company.name }}
              </div>
              <div class="description main-grey">
                {{ company.description }}
              </div>
            </div>
          </div>
          <div class="item_cost">
            <div class="">
              <div class="name">
                {{ company.cost }} ₽
              </div>
              <div class="description main-grey">
                стоимость
                <div v-if="company.microCredit">
                  рассрочка до 24 месяцев
                </div>
              </div>
            </div>
            <div class="">
              <div class="cost text-secondary">
                {{ company.maxCost }} ₽
              </div>
              <div class="cost-description">
                выгода
              </div>
            </div>
          </div>
          <div class="item_graphs">
            <div class="row items-center justify-start">
              <q-circular-progress
                show-value
                font-size="14px"
                :value="getValue(company.deals)"
                size="65px"
                :thickness="0.1"
                rounded
                color="secondary"
                class="q-mr-md"
              >
                {{ getValue(company.deals) }}%
              </q-circular-progress>
              <div class="progress_info">
                <div>
                  <span class="main-grey q-mr-xs">Всего дел:</span>
                  <span class="text-dark">{{ company.deals?.all }}</span>
                </div>
                <div>
                  <span class="main-grey q-mr-xs">Списано:</span>
                  <span class="text-dark">{{ company.deals?.completed }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <q-btn
              size="xl"
              label="Оставить заявку"
              icon-right="arrow_outward"
              color="secondary"
              class="button-custom right-icon-secondary"
              outline
              @click="$emit('form-click', company.name)"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="item mobile"
          v-for="(company,index) in companies"
          :key="index"
        >
          <div class="item_logo-name">
            <div class="column">
              <div class="flex">
                <div
                  class="logo-img"
                >
                  <q-img
                    class="logo"
                    src="img/logo-zenit.svg"
                  />
                </div>
                <div class="name">
                  {{ company.name }}
                </div>
              </div>
              <div class="description main-grey">
                {{ company.description }}
              </div>
            </div>
          </div>

          <div class="item_graphs">
            <div class="row items-center justify-start">
              <q-circular-progress
                show-value
                font-size="14px"
                :value="getValue(company.deals)"
                :size="isMobile ? '54px' : '65px'"
                :thickness="0.1"
                angle="1"
                rounded
                color="secondary"
                class="q-mr-md"
              >
                {{ getValue(company.deals) }}%
              </q-circular-progress>
              <div class="progress_info">
                <div>
                  <span class="main-grey q-mr-xs">Всего дел:</span>
                  <span class="text-dark">{{ company.deals?.all }}</span>
                </div>
                <div>
                  <span class="main-grey q-mr-xs">Списано:</span>
                  <span class="text-dark">{{ company.deals?.completed }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="name">
              {{ company.cost }} ₽
            </div>
            <div class="description main-grey">
              стоимость
              <div v-if="company.microCredit">
                рассрочка до 24 месяцев
              </div>
            </div>
          </div>
          <div class="">
            <div class="cost text-secondary">
              {{ company.maxCost }} ₽
            </div>
            <div class="cost-description">
              выгода
            </div>
          </div>
        </div>
      </template>

      <q-inner-loading
        :showing="loading"
        label="Идет подбор"
        color="secondary"
        label-class="text-dark"
      />
    </div>
    <div
      v-if="isMobile"
      class="bottom_section"
    >
      <q-btn
        v-if="showMoreButtonIsVisible"
        icon="expand_more"
        @click="showAll"
        flat
        color="secondary"
        class="show-all-button"
        round
        size="20px"
      />
      <div class="main-font fz-18px q-mb-lg text-center">
        <span class="text-secondary">Подбери лучшую компанию в 1 клик,</span>
        чтобы списать долги<br>
        по кредитам и микрозаймам
      </div>
      <q-btn
        class="bg-secondary text-white q-mb-xl base-button"
        label="Отправить заявку во все компании"
        icon-right="arrow_outward"
        rounded
        @click="$emit('form-click')"
      />
      <div class="text-center">
        <div class="companies-list__text2 q-mb-sm">
          Сократим время подбора компании и сэкономим ваши деньги
        </div>
        <div class="companies-list__text3">
          *в среднем на самостоятельный подбор компании уходит 10 часов.
          Благодаря отобранным компаниям вы<br>
          сэкономите до 50 тыс. руб. при заключении договора с юридической компанией
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyItem',
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      loading: false,
      companies: [],
    };
  },
  watch: {
    data(val) {
      this.companies = val;
    },
  },
  computed: {
    isMobile() {
      return this.$q.screen.width < 599.98;
    },
    showMoreButtonIsVisible() {
      return (this.companies.length > 4) && !this.visible;
    },
  },
  mounted() {
    this.companies = this.data;
  },
  methods: {
    shakeAll() {
      this.loading = true;
      setTimeout(() => {
        this.companies.sort(() => 0.5 - Math.random());
        this.loading = false;
      }, 1000);
    },
    showAll() {
      this.shakeAll();
      this.visible = true;
    },
    getValue(deals) {
      const { all, completed } = deals;
      if (!all || !completed) return 0;
      return Number(((completed * 100) / all).toFixed(0));
    },
  },
};
</script>
<style lang="scss" scoped>
.progress_info {
  min-width: 120px;
  @media (max-width: $breakpoint-xs-max) {
    div {
      margin-left: 10px;
    }
  }
}
@media (max-width: $breakpoint-xs-max) {
.base-button {
  margin-bottom: 20px;
}
}
.logo-img {
  width: 52px;
}
.item.mobile {
  .logo-img {
    width: 22px;
  }
  .progress_info,.description {
    font-size: 11px;
  }
  .item_graphs {
    display: flex;
    flex-direction: row;
  }
}
.item + .item {
  //margin-top: 10px;
}
.bottom_section {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 240px;
  position: relative;
  .main-font {
    font-weight: 500;
  }
}
.item {
  display: grid;
  @media (max-width: $breakpoint-xs-max) {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  padding-bottom: 30px;
  margin-bottom: 30px;
  &:not(:last-child) {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
    @media (max-width: $breakpoint-xs-max) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: $breakpoint-xs-max) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 5px;
  }
  grid-template-columns: 5fr 5fr 3fr 3fr;
}
.item_graphs {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.companies-list {
  position: relative;
  min-height: 200px;
  @media (max-width: $breakpoint-xs-max) {
    padding-bottom: 50px;
  }
  .wrapper-items {
    overflow: hidden;
    max-height: 100%;
    transition: all .3s ease-in;
    position: relative;
  }
  .companies-list__text2 {
    font-family: 'Unbounded', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    color: #4D4D4D;
    @media (max-width: $breakpoint-xs-max) {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .companies-list__text3 {
    font-family: 'Inter Tight', sans-serif;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    font-size: .95rem;
    color: #898989;
    @media (max-width: $breakpoint-xs-max) {
      font-size: 11px;
      line-height: 130%;
    }
  }
  &.hide-all {
    .button-hide-all {
      z-index: 100;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .wrapper-items {
      max-height: 300px;
      &:after {
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 0%, #fafafa 90%, #fafafa 100%);
        position: absolute;
      }
    }
  }
}
.item_cost {
  columns: auto 2;
}
.item_logo-name {
  display: grid;
  grid-template-columns: 52px auto;
  @media (max-width: $breakpoint-xs-max) {
    display: block;
    .logo-img {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  grid-column-gap: 20px;
}
.company-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: 'Inter Tight',sans-serif;
}
  .logo {
    margin-right: 10px;
  }
  .name {
    font-weight: 400;
    font-size: 1.5rem;
    @media (max-width: $breakpoint-xs-max) {
      font-size: 16px;
      max-width: 140px;
    }
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    max-width: 370px;
  }
  .description {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    max-width: 370px;
    @media (max-width: $breakpoint-xs-max) {
      font-weight: 400;
      font-size: 11px;
      line-height: 130%;
    }
  }
  .cost {
    @media (max-width: $breakpoint-xs-max) {
      font-size: 16px;
    }
    font-size: 24px;
  }
  .cost-description {
    font-size: 14px;
  }
.show-all-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -70px;
  z-index: 1000;
  background: white;
  @include box-shadow($shadow-main);
}
</style>
