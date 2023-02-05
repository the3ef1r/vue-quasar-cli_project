<template>
  <div
    class="companies-list"
    :class="visible ? 'show-all' : 'hide-all'"
  >
    <div
      class="wrapper-test"
    >
      <transition-group>
        <div
          class="company-item row items-center justify-between"
          v-for="(company,index) in companies"
          :key="index"
        >
          <div class="col q-mr-md">
            <div class="row">
              <q-img
                class="logo"
                src="img/logo-zenit.svg"
                style="max-width: 52px;"
              />
              <div class="col-auto column">
                <div class="name">
                  {{ company.name }}
                </div>
                <div class="description main-grey">
                  {{ company.description }}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-auto column">
                <div class="">
                  <div class="name">
                    {{ company.cost }}₽
                  </div>
                  <div class="description main-grey">
                    стоимость
                    <div v-if="company.microCredit">
                      рассрочка до 24 месяцев
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-auto q-ml-xl column">
                <div class="">
                  <div class="cost text-secondary">
                    {{ company.maxCost }} ₽
                  </div>
                  <div class="cost-description">
                    выгода
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="row items-center justify-start">
              <q-circular-progress
                show-value
                font-size="14px"
                :value="getValue(company.deals)"
                size="65px"
                color="secondary"
              >
                {{ getValue(company.deals) }}%
              </q-circular-progress>
              <div class="">
                <div>
                  <span class="main-grey q-mr-xs">Всего дел:</span>
                  <span class="text-dark">{{ company.deals?.all }}</span>
                </div>
                <div>
                  <span class="main-grey q-mr-xs">Списано:</span>
                  <span class="text-dark">{{ company.deals?.completed }}</span>
                </div>
              </div>
              <!--          <q-btn-->
              <!--            label="Оставить заявку"-->
              <!--            icon-right="arrow_outward"-->
              <!--            size="xl"-->
              <!--            color="secondary"-->
              <!--            class="button-custom right-icon-secondary "-->
              <!--            outline-->
              <!--          />-->
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="test column text-center">
      <q-btn
        v-if="!visible"
        icon="expand_more"
        @click="showAll"
        flat
        color="secondary"
        class="show-all-button"
        round
        size="lg"
      />
      <div class="">
        Подбери лучшую компанию в 1 клик, чтобы списать долги
        по кредитам и микрозаймам
      </div>
      <q-btn
        class="bg-secondary text-white"
        label="Отправить заявку во все компании"
        icon-right="trending_flat"
        size="xl"
      />
      <div class="">
        Сократим время подбора компании и сэкономим ваши деньги
      </div>
      <div class="">
        *в среднем на самостоятельный подбор компании уходит 10 часов.
        Благодаря отобранным компаниям вы<br>
        сэкономите до 50 тыс. руб. при заключении договора с юридической компанией
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
      companies: [],
    };
  },
  watch: {
    data(val) {
      this.companies = val;
    },
  },
  mounted() {
    this.companies = this.data;
  },
  methods: {
    shakeAll() {
      this.companies.sort(() => 0.5 - Math.random());
    },
    showAll() {
      this.shakeAll();
      this.visible = true;
    },
    getValue(deals) {
      const { all, completed } = deals;
      if (!all || !completed) return 0;
      return ((completed * 100) / all).toFixed(0);
    },
  },
};
</script>
<style lang="scss" scoped>
.companies-list {
  position: relative;
  min-height: 500px;
    .wrapper-test {
      overflow: hidden;
      max-height: 100%;
      transition: all .3s ease-in;
      position: relative;
  }
  &.hide-all {
    .test {
      z-index: 10000;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .wrapper-test {
      max-height: 500px;
      &:after {
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 0%, #fafafa 54%, #fafafa 100%);
        position: absolute;
      }
    }
  }
}
.company-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Inter Tight',sans-serif;

  .logo {
    margin-right: 10px;
  }
  .name {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 5px;
  }
  .description {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  .cost {
    font-size: 24px;
  }
  .cost-description {
    font-size: 14px;
  }
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
.test {
  position: relative;
}
</style>
