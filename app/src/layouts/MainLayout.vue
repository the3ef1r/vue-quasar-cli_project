<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-white bg-primary text-white"
    >
      <q-toolbar
        class=" text-dark toolbar"
      >
        <q-toolbar-title>
          <q-img
            style="max-width:332px"
            src="icons/logo.svg"
          />
        </q-toolbar-title>

        <counter class="layout_counter q-mr-xl" />
        <div class="location">
          <q-btn
            icon="img:icons/location.svg"
            flat
            class="main-font-bold right-icon-secondary"
            :label="currentCity"
            icon-right="expand_more"
            @click="changeCity"
          />
        </div>
        <q-btn
          class="xs"
          flat
          dense
          icon="img:icons/menu.svg"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer
      class="footer"
    >
      <div class="section">
        <q-img
          style="max-width:332px"
          src="icons/footer-logo.svg"
        />
      </div>
    </footer>
    <change-city-dialog ref="changeCityDialog" />
  </q-layout>
</template>
<script>
import Counter from 'layouts/counter/counter';
import { mapGetters } from 'vuex';
import ChangeCityDialog from 'components/change-city-dialog/change-city-dialog';

export default {
  name: 'MainLayout',
  components: { ChangeCityDialog, Counter },

  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity;
    },
  },
  data() {
    return {
      dialogModel: false,
    };
  },
  methods: {
    changeCity() {
      this.$refs.changeCityDialog.open();
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: $breakpoint-xs-max) {
  .location, .layout_counter {
    display: none;
  }
}
.toolbar,.footer .section {
  max-width: 1200px;
  margin: 0 auto;
}
.toolbar {
  background: white;
  padding: 10px 0;
  @media (max-width: $breakpoint-xs-max) {
    padding: 10px;
  }
}
.footer {
  background: #4D4D4D;
  .section {
    padding: 50px 0;
  }
}
</style>
