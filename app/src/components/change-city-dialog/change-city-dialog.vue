<template>
  <q-dialog
    v-model="show"
    @before-hide="close"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="heading-h4">
          Ваш город
        </div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          class="text-grey-5"
          v-close-popup
        />
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="search"
          label="Введите название города"
        />
        <div
          v-for="(city,index) in filtredCities"
          :key="index"
          @click="setCity(city)"
        >
          {{ city }}
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { cities } from 'src/assets/cities';
import { mapMutations } from 'vuex';

export default {
  name: 'ChangeCityDialog',
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
