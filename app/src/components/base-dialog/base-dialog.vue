<template>
  <q-dialog
    v-model="show"
    :full-height="isMobile"
    @before-hide="close"
  >
    <q-card class="q-sm-pa-xl">
      <q-btn
        icon="close"
        flat
        round
        dense
        class="text-grey-5 close-btn"
        v-close-popup
      />
      <q-card-section
        class="column q-pb-none"
        style="position: sticky;
          top: 0px;
          background: #fff;
          z-index: 10;"
      >
        <div class="heading-h4 q-mb-xs">
          {{ title }}
        </div>
      </q-card-section>
      <q-card-section>
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isMobile() {
      return this.$q.screen.width < 599.98;
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.search = '';
      this.show = false;
    },
  },
};
</script>
<style scoped lang="scss">
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}
</style>
