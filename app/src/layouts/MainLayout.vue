<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-white text-white"
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
          <!--          <q-btn-->
          <!--            color="primary"-->
          <!--            icon="night_sight_auto_off"-->
          <!--            @click="changeDarkMode"-->
          <!--          />-->
          <q-btn
            icon="img:icons/location.svg"
            flat
            class="main-font-bold right-icon-secondary"
            :label="currentCity"
            icon-right="expand_more"
            @click="changeCity"
          />
        </div>
        <drawer-menu
          v-if="drawerWidth < 500"
          @change-city="changeCity"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-component />
    <change-city-dialog ref="changeCityDialog" />
  </q-layout>
</template>
<script>
import Counter from 'layouts/counter/counter';
import { mapGetters } from 'vuex';
import ChangeCityDialog from 'components/change-city-dialog/change-city-dialog';
import FooterComponent from 'layouts/components/footer';
import DrawerMenu from 'layouts/components/drawer-menu';

export default {
  name: 'MainLayout',
  components: {
    DrawerMenu, FooterComponent, ChangeCityDialog, Counter,
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity ? this.getCurrentCity : 'Выберите город';
    },
    drawerWidth() {
      return this.$q.screen.width;
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    changeDarkMode() {
      this.$q.dark.toggle();
    },
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
  max-width: 1240px;
  margin: 0 auto;
}
.toolbar {
  background: white;
  padding: 10px 20px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 10px;
  }
}
</style>
