<template>
  <div class="helpful-info">
    <section class="section">
      <div
        class="text-h4 q-mb-md text-weight-bolder"
      >
        Полезная информация
      </div>
      <accordeon />
    </section>
  </div>
</template>

<script>
import Accordeon from './components/accordeon';

export default {
  name: 'HelpfulInfo',
  components: { Accordeon },
};
</script>
