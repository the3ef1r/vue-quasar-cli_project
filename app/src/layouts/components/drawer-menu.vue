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
        <div class="column">
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
              @click="scrollTo"
              v-for="(item,index) in items"
              :key="index"
            >
              {{ item.name }}
            </div>
          </div>

          <q-separator />
          <div class="column items-center q-my-xl ">
            <q-btn
              icon="img:icons/location.svg"
              flat
              class="main-font-bold right-icon-secondary"
              :label="currentCity"
              icon-right="expand_more"
              @click="$emit('change-city')"
            />
          </div>

          <q-separator />

          <q-btn
            rounded
            label="Подобрать компанию"
            color="secondary"
            class="base-button"
            icon-right="arrow_outward"
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

export default {
  name: 'DrawerMenu',
  components: {
    Counter,
  },
  data() {
    return {
      drawer: false,
      items: [
        { name: 'Как работает сервис' },
        { name: 'Подобрать компанию' },
        { name: 'Почему нам доверяю' },
        { name: 'Полезная информация' },
      ],
    };
  },
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity;
    },
    drawerWidth() {
      return this.$q.screen.width;
    },
  },
  methods: {
    scrollTo() {
      this.drawer = false;
      return '';
    },
  },
};
</script>

<style lang="scss">
.close-icon {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
