<template>
  <section-wrapper id="how-works-section">
    <div class="column">
      <div
        class="q-mb-md heading-h4"
      >
        Как работает сервис
      </div>
      <div class="row q-col-gutter-md">
        <div
          class="block col-md-4"
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="block-fill rounded-borders">
            <div class="index">
              {{ `0${index+1}` }}
            </div>
            <div class="full-height column justify-between items-start">
              <div class="text-subtitle1 q-mb-sm text-weight-bolder">
                {{ item.subtitle }}
              </div>
              <div class="text-body2 q-mb-md">
                {{ item.text }}
              </div>
            </div>
            <q-img
              class="picture-absolute"
              :src="`img/how-it-works/pic_${index+1}.svg`"
            />
          </div>
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>

import SectionWrapper from 'components/section-wrapper';

export default {
  name: 'HowWorksSection',
  components: { SectionWrapper },
  data() {
    return {
      items: [
        { subtitle: 'Выберите лучшее предложение', text: 'Мы подобрали ТОП юридических компаний в России по банкротству ФЛ' },
        { subtitle: 'Заявка в один клик', text: 'Выберете одну или несколько компаний и отправьте заявку' },
        {
          subtitle: 'Решение в течение 30 минут',
          text: 'Выберете одну или несколько компаний \n'
            + 'и отправьте заявку',
        },
      ],
    };
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>

.block-fill {

  min-height: 350px;
  position: relative;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  padding: 50px 50px 50px 35px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 25px;
  }
  overflow: hidden;
  .index {
    color: $secondary;
    font-size: 1.2rem;
    position: absolute;
    right: 20px;
    top: 12px;
  }
  .text-body2 {
    color: $grey-main
  }
  .picture-absolute {
    zoom: .86;
  }
  @media (max-width: $breakpoint-xs-max) {
    .picture-absolute {
      max-width: 114px;
      margin-right: 20px;
      zoom: 1;
    }
    min-height: 260px;
  }
}
.block {
  &:last-child {
    .block-fill {
      background-color: $secondary;
    }
    .index,.text-body2,.text-subtitle1 {
      color: white;
    }
  }
}
.text-subtitle1,.index {
  font-family: 'Unbounded', cursive;
  font-style: normal;
  font-weight: 500;
}
.text-subtitle1 {
  @media (max-width: $breakpoint-xs-max) {
    font-size: 16px;
  }
  font-size: 20px;
  min-height: 56px;
}
.picture-absolute {
  position: absolute;
  max-width: 178px;
  right: 20px;
  bottom: 0;
}
</style>
