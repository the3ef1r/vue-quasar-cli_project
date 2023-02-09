<template>
  <div class="">
    <q-btn
      size="md"
      flat
      dense
      icon="img:icons/menu.svg"
      @click="drawer = !drawer"
    />
    <q-drawer
      v-model="drawer"
      :width="drawerWidth"
      :breakpoint="500"
      overlay
    >
      <q-scroll-area class="fit">
        <div class="column scroll-wrapper">
          <div
            class="column items-center q-my-lg"
            style="height: 75px;"
          >
            <q-img
              style="max-width:332px;"
              src="icons/header_mobile_logo.svg"
            />
          </div>

          <q-separator />

          <div class="column items-center justify-center q-my-xl">
            <counter class="layout_counter q-mb-xl" />
            <div
              v-for="(item,index) in items"
              :key="index"
              @click="scrollToElement(item.sectionId)"
            >
              {{ item.name }}
            </div>
          </div>

          <q-separator />
          <div class="column items-center q-my-xl ">
            <q-btn
              v-if="$q.screen.width > 500"
              icon="img:icons/location.svg"
              flat
              class="main-font-bold right-icon-secondary"
              :label="currentCity"
              icon-right="expand_more"
              @click="$emit('change-city')"
            />
            <q-select
              v-else
              v-model="city"
              emit-value
              :options="cityList"
              use-input
              color="secondary"
              input-debounce="0"
              behavior="menu"
              label="Город"
              @filter="filterFn"
              hint="Введите название города"
              lazy-rules
              class="full-width"
              :rules="[ val => val && val.length > 0 || 'Выберите значение из списка']"
            >
              <template #before-options>
                Выберите вариант или продолжите ввод
              </template>
            </q-select>
          </div>

          <q-separator />
          <q-btn
            label="Подобрать компанию"
            icon-right="arrow_outward"
            size="xl"
            color="secondary"
            class="button-custom right-icon-secondary q-mt-xl q-mx-md"
            outline
          />
        </div>

        <q-btn
          size="lg"
          flat
          dense
          icon="close"
          class="close-icon"
          @click="drawer = !drawer"
        />
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Counter from 'layouts/counter/counter';
import { cities } from 'assets/cities';
import { scroll } from 'quasar';

const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: 'DrawerMenu',
  components: {
    Counter,
  },
  data() {
    return {
      drawer: false,
      cities,
      cityList: cities,
      city: '',
      items: [
        { name: 'Как работает сервис', sectionId: 'how-works-section' },
        { name: 'Подобрать компанию', sectionId: 'about-us-section' },
        { name: 'Почему нам доверяют', sectionId: 'trust-section' },
        { name: 'Полезная информация', sectionId: 'helpful-info' },
      ],
    };
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity ? this.getCurrentCity : '';
    },
    drawerWidth() {
      return this.$q.screen.width;
    },
  },
  methods: {
    scrollToElement(el) {
      const element = document.getElementById(el);
      const target = getScrollTarget(element);
      const offset = element.offsetTop;
      const duration = 1000;
      setScrollPosition(target, offset, duration);
      this.drawer = false;
    },
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.cityList = cities;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.cityList = cities.filter((v) => v.toLowerCase().indexOf(needle) > -1);
      });
    },
  },
};
</script>

<style lang="scss">
.scroll-wrapper {
  padding: 10px;
}
.close-icon {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
