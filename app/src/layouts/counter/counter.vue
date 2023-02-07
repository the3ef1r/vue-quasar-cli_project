<template>
  <div class="counter">
    <div class="row">
      <div class="column items-center justify-center q-pl-md">
        <q-icon
          size="md"
          name="img:icons/robot.svg"
        />
      </div>
      <div class="column q-pl-sm q-pr-md ">
        <div class="main-font-bold">
          <span class="text-secondary q-mr-xs text-weight-medium">{{ requestCount }}</span>
          <span class="text-weight-bold">одобрено заявок</span>
        </div>
        <div class="text">
          На {{ currentDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRequestCount } from 'src/helpers/external-query';
import moment from 'moment';

export default {
  name: 'Counter',
  data() {
    return {
      requestCount: '',
    };
  },
  computed: {
    currentDate() {
      return moment().format('DD.MM.YYYY');
    },
  },
  async mounted() {
    this.requestCount = await getRequestCount();
  },
};
</script>
<style lang="scss" scoped>
.counter {
  border: 1px solid rgba(0, 0, 0, 0.08);

  border-radius: 80px;
  background-color: white;
  transition: all .3s ease-in;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    filter: none;
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
}
.text {
  color: $grey-main;
  font-family: 'Inter Tight', sans-serif;
  font-size: 13px;
  font-weight: 400;
}
</style>
