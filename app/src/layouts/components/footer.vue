<template>
  <footer
    class="footer text-white"
  >
    <div class="column wrapper">
      <q-img
        style="max-width:332px"
        src="icons/footer/footer-logo.svg"
      />
      <div class="q-my-md inline-sm">
        <div class="">
          ООО "Федлекс"
        </div>
        <div class="">
          ОГРН 1176313006924 | ИНН 6330075453
        </div>
        <div class="">
          samara@vse-bankrotstvo.ru | 8 (800) 350-08-14
        </div>
      </div>
      <div class="inline-sm">
        <div class="">
          Пользовательское соглашение
        </div>
        <div class="">
          Политика обработки персональных данных
        </div>
      </div>
      <div class="row items-center footer-logos">
        <q-img
          class="q-my-lg"
          src="icons/footer/elaw.svg"
        />
        <q-img
          src="icons/footer/gosuslugi.svg"
        />
      </div>
      <q-separator class="q-my-lg bg-grey-7" />
      <div class="">
        © {{ currentYear }}, Федеральная служба помощи. Все права защищены
      </div>
    </div>
  </footer>
</template>

<script>
import moment from 'moment';

export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return moment().format('YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #4D4D4D;
  padding: 30px 10px;
  .wrapper {
    max-width: 1240px;
    @media (max-width: $breakpoint-xs-max) {
      padding: 0;
    }
    padding: 0 20px;
    margin: 0 auto;
  }
  .inline-sm {
    display: flex;
    div + div {
      @media (max-width: $breakpoint-xs-max) {
        margin-left: 0;
      }
      margin-left: 20px;
    }
    @media (max-width: $breakpoint-xs-max) {
      display: block;
    }
  }
  .footer-logos {
    height: 60px;
    .q-img {
      max-width: 120px;
    }
    .q-img + .q-img {
      @media (max-width: $breakpoint-xs-max) {
        margin-left: 10px;
      }
      margin-left: 20px;
    }
  }
}
</style>
