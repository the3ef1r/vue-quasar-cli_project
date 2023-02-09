<template>
  <q-dialog
    v-model="show"
    :full-height="drawerWidth < 500"
    class="main-form-dialog"
    @before-hide="close"
  >
    <q-card class="test">
      <q-btn
        icon="close"
        flat
        size="lg"
        round
        dense
        class="text-grey-5 close-icon"
        v-close-popup
      />
      <q-card-section>
        <div class="text-center">
          <q-img
            class="q-mb-xl"
            style="max-width:332px"
            src="icons/logo_alt.svg"
          />
          <template v-if="!requested">
            <div class="heading-h4">
              Заявка на процедуру банкротства
            </div>
            <q-btn
              label="Ваши данные надёжно защищены"
              @click="popup = !popup"
            >
              <q-popup-proxy :value="popup">
                <q-banner>
                  <template #avatar>
                    <q-icon
                      name="img:icons/ri_shield-check-fill.svg"
                      color="primary"
                    />
                  </template>
                  Обеспечиваем безопасность и конфиденциальность
                  ваших персональных данных согласно Федеральному закону
                  №152-ФЗ «О персональных данных»
                </q-banner>
              </q-popup-proxy>
            </q-btn>
          </template>
          <template v-else>
            <div class="heading-h4">
              Спасибо
            </div>
            <div class="complete-text">
              Заявка на процедуру банкротства успешно отправлена
            </div>
            <div class="">
              Наши менеджеры свяжутся с Вами, в течение 15 минут!
            </div>
          </template>
        </div>
      </q-card-section>
      <q-card-section
        v-if="!requested"
        class="q-mb-xl-md"
      >
        <q-form
          @submit="onSubmit"
          class="q-col-gutter-md"
        >
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <q-input
                flat
                v-model="form.fullName"
                color="secondary"
                label="Фамилия, имя и отчество *"
                hint="Введите ваши данные"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Укажите ФИО как в паспорте']"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-select
                v-model="form.city"
                emit-value
                :options="cityList"
                use-input
                color="secondary"
                input-debounce="0"
                behavior="menu"
                label="Город"
                @filter="filterFn"
                hint="Введите название города"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Выберите значение из списка']"
              >
                <template #before-options>
                  Выберите вариант или продолжите ввод
                </template>
              </q-select>
            </div>
          </div>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <q-input
                flat
                v-model="form.phoneNumber"
                label="Мобильный телефон *"
                mask="phone"
                color="secondary"
                hint="Введите ваши данные"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Необходимо заполнить “Номер телефона”']"
              >
                <template #prepend>
                  <span>+ 7</span>
                </template>
                <template #hint>
                  На указанный номер будет отправлено подтверждающее SMS
                </template>
              </q-input>
              {{ form.phoneNumber.length }}
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-btn
                v-if="form.phoneNumber.length > 0"
                label="Отправить"
                @click="sendPhoneSms"
              />
            </div>
          </div>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Какая сумма вашего долга <span class="text-secondary"> *</span>
                </div>
                <q-radio
                  v-for="(item,index) in summ"
                  dense
                  :key="index"
                  color="secondary"
                  v-model="form.summModel"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Какое имущество у вас имеется?
                  <span class="text-secondary"> *</span>
                </div>
                <q-checkbox
                  v-for="(item,index) in estate"
                  dense
                  :key="index"
                  color="secondary"
                  v-model="form.estateModel"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
          </div>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Сколько времени вы не платите
                  по кредитам?<span class="text-secondary"> *</span>
                </div>
                <q-radio
                  v-for="(item,index) in summ"
                  dense
                  :key="index"
                  color="secondary"
                  v-model="form.howLongModel"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Имеется ли у вас действующая ипотека?<span class="text-secondary"> *</span>
                </div>
                <q-radio
                  v-for="(item,index) in ipoteka"
                  dense
                  :key="index"
                  color="secondary"
                  v-model="form.ipotekaModel"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
          </div>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Имеется ли обязательство по выплате алиментов?
                  <span class="text-secondary">*</span>
                </div>
                <q-radio
                  v-for="(item,index) in aliment"
                  dense
                  :key="index"
                  v-model="form.alimentModel"
                  color="secondary"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="q-gutter-sm column">
                <div class="text-weight-bold">
                  Потребуется ли рассрочка на услуги банкротства?
                  <span class="text-secondary"> *</span>
                </div>
                <q-radio
                  v-for="(item,index) in credit"
                  dense
                  :key="index"
                  color="secondary"
                  v-model="form.creditModel"
                  :val="item.value"
                  :label="item.label"
                />
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-separator />

      <q-card-actions
        align="between"
        class="items-center"
      >
        <q-checkbox
          color="secondary"
          label="Согласие на обработку персональных данных и данных об абонентах *"
          v-model="agree"
        />
        <q-btn
          :disable="!agree"
          label="Отправить"
          icon-right="arrow_outward"
          color="secondary"
          class="base-button right-icon-secondary"
          outline
          rounded
          @click="onSubmit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { cities } from 'src/assets/cities';
import { mapMutations } from 'vuex';
import { notifyErrorSimple } from 'src/services/service-notification';
import { backendApi } from 'src/api/backend';
import { sendSms } from 'src/api/sms-auth';

export default {
  name: 'MainFormDialog',
  data() {
    return {
      show: false,
      popup: false,
      requested: false,
      agree: false,
      cities,
      cityList: cities,
      search: '',
      form: {
        fullName: '',
        city: '',
        phoneNumber: '',
        summModel: '1',
        howLongModel: '1',
        estateModel: [],
        ipotekaModel: 'yes',
        alimentModel: 'yes',
        creditModel: 'yes',
      },
      estate: [
        { value: '1', label: 'квартира (единственное жильё)' },
        { value: '2', label: 'земельный участок / загородный дом' },
        { value: '3', label: 'автомобиль' },
        { value: '4', label: 'иное имущество' },
        { value: '5', label: 'нет имущества' },
      ],
      summ: [
        { value: '1', label: 'до 300 000 руб' },
        { value: '2', label: '300 000 - 500 000 руб' },
        { value: '3', label: '500 000 - 1 000 000 руб' },
        { value: '4', label: '1 000 000 - 1 500 000 руб' },
        { value: '5', label: 'более 1 500 000 руб' },
      ],
      time: [
        { value: '1', label: 'до 3-х месяцев' },
        { value: '2', label: 'от 3-х до 12-ти месяцев' },
        { value: '3', label: 'больше года' },
        { value: '4', label: 'плачу вовремя' },
      ],
      ipoteka: [
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' },
      ],
      aliment: [
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' },
      ],
      credit: [
        { value: 'yes', label: 'Да' },
        { value: 'no', label: 'Нет' },
      ],
    };
  },
  computed: {
    filtredCities() {
      return cities.filter((name) => name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    drawerWidth() {
      return this.$q.screen.width;
    },
  },
  methods: {
    ...mapMutations('app', ['setCurrentCity']),
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.cityList = cities;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.cityList = cities.filter((v) => v.toLowerCase().indexOf(needle) > -1);
      });
    },
    open() {
      this.show = true;
    },
    close() {
      this.search = '';
      this.requested = false;
      this.show = false;
    },
    setCity(name) {
      this.setCurrentCity(name);
    },
    async sendPhoneSms() {
      try {
        await sendSms('79100070701');
      } catch (e) {
        notifyErrorSimple(e);
      }
    },
    async onSubmit() {
      try {
        this.loading = true;
        const request = {
          ...this.form,
        };
        await backendApi.post('/url-for-api', request);
      } catch (e) {
        notifyErrorSimple('Произошла ошибка при отправке заявки', e);
      } finally {
        this.requested = true;
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.test {
  max-width: 1100px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 0;
  }
  padding: 10px 90px 50px 90px;
  min-width: 50%;

}
.close-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 100;
}
</style>
