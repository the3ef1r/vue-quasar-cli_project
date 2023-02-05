<template>
  <q-list>
    <q-expansion-item
      v-for="(item,index) in text"
      :key="index"
      :label="item.label"
      header-class="custom-accordion"
      class="box-shadow-main expansion-item--custom q-mb-lg"
      :default-opened="index === 0"
    >
      <q-card class="expansion-item--card">
        <q-separator class="q-mx-md" />
        <q-card-section>
          <div class="custom-text">
            {{ item.text }}
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    text: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss">
.expansion-item--custom {
  border-radius: 20px;
  font-family: 'Inter Tight',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  @media (max-width: $breakpoint-xs-max) {
    font-size: 16px;
  }
  .q-card__section {
    padding: 20px;
  }
}
.expansion-item--card,.expansion-item--custom {
  background: #FAFAFA;
}
.custom-accordion {
  padding: 30px 20px;
  //.q-focus-helper {
  //   border-radius: 20px;
  //}
}
.custom-text {
  font-family: 'Inter Tight', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  @media (max-width: $breakpoint-xs-max) {
    font-size: 13px;
  }
  color: #898989;
}
</style>
