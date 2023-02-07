<template>
  <div class="wrapper">
    <div
      v-for="(item,index) in letters"
      :key="index"
      class="block"
    >
      <div class="letter">
        {{ item }}
      </div>
      <div
        class="list"
        v-for="(city,id) in getCities(item)"
        :key="id"
      >
        <div
          class="name"
          @click="$emit('set-city',city)"
        >
          {{ city }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uniq, groupBy } from 'lodash';

export default {
  name: 'MyComponent',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    test() {
      return groupBy(this.data, (value) => value[0]);
    },
    letters() {
      const allLetters = this.data.map((word) => word[0]);
      return uniq(allLetters);
    },
  },
  methods: {
    getCities(letter) {
      return this.data.filter((city) => city[0] === letter);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  columns: auto 4;
  column-gap: 32px;
  margin-top: 20px;
  @media (max-width: $breakpoint-xs-max) {
    height: auto;
    overflow-x: hidden;
  }
  .block {
    min-height: 130px;
    font-family: 'Inter Tight', sans-serif;
    margin-bottom: 20px;
  }
  .list + .list {
    margin-top: 10px;
  }
  .letter {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #FE7209;
    margin-bottom: 10px;
  }
  .name {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #121212;
    &:hover {
      cursor: pointer;
      background: #fafafa;
    }
  }
}
</style>
