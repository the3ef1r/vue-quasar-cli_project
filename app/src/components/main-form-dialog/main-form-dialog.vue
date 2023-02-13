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
            <div
              class="popover-btn"
            >
              <q-icon
                name="img:icons/ri_shield-check-fill.svg"
                color="primary"
                class="q-mr-sm"
              />
              {{ label }}
              <q-popup-edit
                anchor="center top"
                v-model="label"
              >
                <div class="popover">
                  Обеспечиваем безопасность и конфиденциальность
                  ваших персональных данных согласно Федеральному закону
                  №152-ФЗ «О персональных данных»
                </div>
              </q-popup-edit>
            </div>
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
                filled
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
                filled
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
                  <div class="q-px-md q-py-sm bg-grey-2">
                    Выберите вариант или продолжите ввод
                  </div>
                </template>
              </q-select>
            </div>
          </div>
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-6">
              <div class="column">
                <div class="items-start justify-between flex row">
                  <q-input
                    class="col-auto"
                    flat
                    v-model="form.phoneNumber"
                    filled
                    label="Мобильный телефон *"
                    mask="phone"
                    color="secondary"
                    hint="Введите ваши данные"
                    lazy-rules
                    :rules="[ val => val && val.length > 0
                      || 'Необходимо заполнить “Номер телефона”']"
                  >
                    <template #prepend>
                      <span>+ 7</span>
                    </template>
                    <template #hint>
                      На указанный номер будет отправлено подтверждающее SMS
                    </template>
                  </q-input>
                  <button
                    class="continueNumber col-auto"
                    v-if="buttonContinueState"
                    @click="sendPhoneSms"
                  >
                    Продолжить
                  </button>
                </div>

                <div
                  class="q-mt-md"
                  v-if="showSmsCode"
                >
                  <div class="">
                    Укажите код из СМС
                  </div>
                  <div class="">
                    <div class="row q-gutter-x-sm justify-center">
                      <otp-input
                        class="sms-code-input"
                        ref="otpInput"
                        input-classes="otp-input"
                        separator="-"
                        :num-inputs="4"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        @on-complete="handleOnComplete"
                      />
                      <!--                      <q-input-->
                      <!--                        outlined-->
                      <!--                        v-for="i in inputLength"-->
                      <!--                        v-model="fieldValues[i - 1]"-->
                      <!--                        v-bind="$attrs"-->
                      <!--                        mask="#"-->
                      <!--                        @keyup="onKeyUp($event, i - 1)"-->
                      <!--                        @update:model-value="onUpdate($event, i - 1)"-->
                      <!--                        :key="i"-->
                      <!--                        :ref="el => updateFieldRef(el, i - 1)"-->
                      <!--                        maxlength="1"-->
                      <!--                        input-class="text-center"-->
                      <!--                        style="width: 6ch"-->
                      <!--                      />-->
                    </div>
                    <div
                      class=""
                      v-if="true"
                    >
                      Повтор отправки через 00:{{ currentTime }} сек
                    </div>
                  </div>
                </div>
              </div>
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
import OtpInput from '@bachdgvn/vue-otp-input';

export default {
  name: 'MainFormDialog',
  components: {
    OtpInput,
  },
  data() {
    return {
      show: false,
      label: 'Ваши данные надёжно защищены',
      popup: false,
      requested: false,
      errorMessage: false,
      showSmsCode: false,
      acceptedPhone: false,
      agree: false,
      timer: null,
      cities,
      cityList: cities,
      search: '',
      currentTime: 30,
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
    buttonContinueState() {
      return this.form.phoneNumber.length === 16;
    },
  },
  methods: {
    ...mapMutations('app', ['setCurrentCity']),
    async handleOnComplete(value) {
      await this.sendSmsCode(value);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime -= 1;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
      this.errorMessage = false;
    },
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
      this.requested = false;
      this.errorMessage = false;
      this.showSmsCode = false;
      this.acceptedPhone = false;
      this.agree = false;
      this.form = {
        fullName: '',
        city: '',
        phoneNumber: '',
        summModel: '1',
        howLongModel: '1',
        estateModel: [],
        ipotekaModel: 'yes',
        alimentModel: 'yes',
        creditModel: 'yes',
      };
    },
    setCity(name) {
      this.setCurrentCity(name);
    },
    async sendSmsCode(code) {
      console.log(code);
      try {
        // send code here await checkSmsCode
        // answer
        this.acceptedPhone = true;
        this.showSmsCode = false;
      } catch (e) {
        notifyErrorSimple(e);
        this.startTimer();
        this.errorMessage = true;
      }
    },
    async sendPhoneSms() {
      try {
        await sendSms('79100070701');
        this.showSmsCode = true;
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
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  destroyed() {
    this.stopTimer();
  },
};
</script>
<style lang="scss" scoped>
.popover {
  max-width: 320px;
  padding: 20px 15px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  .text {
    font-family: 'Inter Tight', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
}
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
.continueNumber {
  background: radial-gradient(50% 50% at 50% 50%, #48ACE8 0%, #028CD6 100%);
  color: white;
  width: 135px;
  display: flex;
  align-items: center;
  border: 1px solid #4D4D4D;
  font-family: 'Inter Tight', sans-serif;
  font-style: normal;
  font-weight: 400;
  height: 56px;
  font-size: 16px;
  line-height: 23px;
  border-radius: 10px;
  justify-content: center;
}
.sms-code-input {
  input {
    background: #FAFAFA;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    width: 50px;
    text-align: center;
    height: 50px;
    font-family: 'Inter Tight',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }
}
.popover-btn {
  width: 314px;
  height: 44px;
  background: #FAFAFA;
  border-radius: 60px;
}
</style>
