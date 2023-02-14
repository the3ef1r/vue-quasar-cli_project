<template>
  <section-wrapper
    class="helpful-info"
    id="helpful-info"
  >
    <div class="q-mb-md heading-h4">
      Полезная информация
    </div>
    <accordeon />
  </section-wrapper>
</template>

<script>
import SectionWrapper from 'components/section-wrapper';
import Accordeon from './components/accordion';

export default {
  name: 'HelpfulInfo',
  components: { SectionWrapper, Accordeon },
};
</script>
