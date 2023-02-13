<template>
  <q-dialog
    v-model="show"
    full-width
    :full-height="isMobile"
    @before-hide="close"
  >
    <q-card class="q-sm-pa-xl">
      <q-card-section
        class="column q-pb-none"
        style="position: sticky;
          top: 0px;
          background: #fff;
          z-index: 10;"
      >
        <div
          class="heading-h4 q-mb-xs"
        >
          Ваш город
        </div>
        <q-input
          v-model="search"
          color="secondary"
          label="Введите название города"
        />
        <q-btn
          icon="close"
          flat
          round
          dense
          class="text-grey-5 close-btn"
          v-close-popup
        />
      </q-card-section>
      <q-card-section>
        <my-component
          :data="filtredCities"
          @set-city="setCity"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { cities } from 'src/assets/cities';
import { mapMutations } from 'vuex';
import MyComponent from 'components/change-city-dialog/myComponent';

export default {
  name: 'ChangeCityDialog',
  components: { MyComponent },
  data() {
    return {
      show: false,
      cities,
      search: '',
    };
  },
  computed: {
    filtredCities() {
      return cities.filter((name) => name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    isMobile() {
      return this.$q.screen.width < 599.98;
    },
  },
  methods: {
    ...mapMutations('app', ['setCurrentCity']),
    open() {
      this.show = true;
    },
    close() {
      this.search = '';
      this.show = false;
    },
    setCity(name) {
      this.setCurrentCity(name);
      this.close();
    },
  },
};
</script>
<style scoped lang="scss">
.close-btn {
  @media (max-width: $breakpoint-xs-max) {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}
</style>
