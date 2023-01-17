<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar class="bg-white text-dark">
        <q-toolbar-title>
          <q-btn
            icon="safety_check"
            flat
          >
            Федеральная служба помощи
          </q-btn>
        </q-toolbar-title>

        <div class="counter">
          <div class="">
            <q-icon
              name="smart_toy"
            />{{ requestCount }} одобрено заявок
          </div>
          <div class="">
            на {{ currentDate }}
          </div>
        </div>
        <div class="location">
          <q-btn
            icon="location_on"
            flat
            :label="userLocation"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { getRequestCount } from 'src/helpers/external-query';
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
  name: 'MainLayout',
  data() {
    return {
      requestCount: '',
    };
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity();
    },
    currentDate() {
      return moment().format('DD.MM.YYYY');
    },
  },
  async mounted() {
    this.requestCount = await getRequestCount();
  },
};
</script>
