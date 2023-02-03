<template>
  <div class="filter-section bg-grey-4">
    <section class="section">
      <div
        class="text-h4 q-mb-md text-weight-bolder"
      >
        Банкротство физических лиц в <a
          href=""
          class="link-text"
          @click="method"
        >{{ getCurrentCity }}</a>
      </div>
      <div class="">
        На данный момент нами отобрано 6 компаний в вашем регионе.
        Для того, чтобы воспользоваться государственной процедурой списания
        долгов для физических лиц просто отправьте заявку.
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterSection',
  computed: {
    ...mapGetters('app', ['getCurrentCity']),
    currentCity() {
      return this.getCurrentCity();
    },
  },
  methods: {
    method() {
      return '123';
    },
  },
};
</script>
<style lang="scss">
.link-text {
  color: #48ACE8;
}
</style>
