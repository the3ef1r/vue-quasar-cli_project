<template>
  <q-dialog
    v-model="show"
    :full-height="drawerWidth < 500"
    class="main-form-dialog"
    @before-hide="close"
  >
    <q-card class="modal-card">
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
              class="text-subtitle1 text-secondary"
              v-if="companyName"
            >
              В компанию "{{ companyName }}"
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
                anchor="center middle"
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
        <div
          class="q-col-gutter-md"
        >
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <q-input
                v-model="form.fullName"
                outlined
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
                outlined
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
                <div :class="{'mobile-phone-row': buttonContinueState && !acceptedPhone}">
                  <q-input
                    class=""
                    outlined
                    v-model="form.phoneNumber"
                    :disable="acceptedPhone"
                    label="Мобильный телефон *"
                    mask="phone"
                    color="secondary"
                    hint="Введите ваши данные"
                    lazy-rules
                    prefix="+7"
                    :rules="[ val => val && val.length > 0
                      || 'Необходимо заполнить “Номер телефона”']"
                  >
                    <template #hint>
                      <div v-if="!showSmsCode">
                        На указанный номер будет отправлено подтверждающее SMS
                      </div>
                      <div v-else>
                        Мы отправили СМС с кодом на номер +7 (ХХХ) ХХХ-ХХ-ХХ
                      </div>
                    </template>
                    <template
                      #append
                      v-if="acceptedPhone"
                    >
                      <q-icon
                        name="mdi-check-circle"
                        color="positive"
                      />
                    </template>
                  </q-input>
                  <template v-if="$q.screen.width < 599">
                    <button
                      class="continueNumber"
                      v-if="buttonContinueState && !acceptedPhone"
                      @click="sendPhoneSms"
                    >
                      <q-icon
                        size="xl"
                        name="mdi-chevron-right"
                        color="white"
                      />
                    </button>
                  </template>
                  <template v-else>
                    <button
                      class="continueNumber"
                      v-if="buttonContinueState && !acceptedPhone"
                      @click="sendPhoneSms"
                    >
                      Продолжить
                    </button>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div
            class="q-mt-md"
            v-if="showSmsCode && !acceptedPhone"
          >
            <div class="sms-code-subtitle">
              Укажите код из СМС
            </div>
            <div class="">
              <div class="row q-gutter-x-sm">
                <otp-input
                  class="sms-code-input"
                  ref="otpInput"
                  input-classes="otp-input"
                  separator=""
                  :num-inputs="4"
                  :should-auto-focus="true"
                  :is-input-num="true"
                  @on-complete="handleOnComplete"
                />
              </div>
              <div
                class=""
                v-if="true"
              >
                Повтор отправки через {{ currentTime }} сек
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
        </div>
      </q-card-section>

      <q-separator v-if="!requested" />

      <q-card-actions
        v-if="!requested"
        align="between"
        class="items-center q-pa-none actions"
      >
        <div class="row items-center">
          <q-checkbox
            v-model="agree"
            color="secondary"
          />
          <div class="">
            Согласие на
            <span
              class="text-secondary"
              @click="$refs.baseDialog.open()"
            >обработку персональных данных и данных об абонентах *</span>
          </div>
        </div>

        <q-btn
          :disable="!canSend"
          label="Отправить"
          icon-right="arrow_outward"
          color="secondary"
          class="base-button right-icon-secondary"
          outline
          type="submit"
          rounded
          @click="onSubmit"
        />
      </q-card-actions>
    </q-card>
    <base-dialog
      ref="baseDialog"
      title="Политика обработки персональных данных"
    >
      <politics-component />
    </base-dialog>
  </q-dialog>
</template>

<script>
import { cities } from 'src/assets/cities';
import { mapMutations } from 'vuex';
import { notifyErrorSimple } from 'src/services/service-notification';
import { sendSms } from 'src/api/sms-auth';
import OtpInput from '@bachdgvn/vue-otp-input';
import BaseDialog from 'components/base-dialog/base-dialog';
import PoliticsComponent from 'layouts/components/politics-component';

export default {
  name: 'MainFormDialog',
  components: {
    OtpInput,
    BaseDialog,
    PoliticsComponent,
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
      companyName: '',
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
    canSend() {
      return this.form.fullName !== ''
        && this.form.phoneNumber !== ''
        && this.acceptedPhone
        && this.city !== ''
        && this.agree;
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
    open(companyName) {
      if (companyName) this.companyName = companyName;
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
        this.acceptedPhone = true;
        this.showSmsCode = false;
      } catch (e) {
        notifyErrorSimple(e);
        this.errorMessage = true;
        this.showSmsCode = true;
      }
    },
    async sendPhoneSms() {
      try {
        await sendSms(this.form.phoneNumber);
        this.startTimer();
        this.showSmsCode = true;
      } catch (e) {
        notifyErrorSimple(e);
      }
    },
    async onSubmit() {
      try {
        this.loading = true;
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
.modal-card {
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
.actions {
  padding-top: 20px;
}
.continueNumber {
  background: radial-gradient(50% 50% at 50% 50%, #48ACE8 0%, #028CD6 100%);
  color: white;
  @media (max-width: $breakpoint-xs-max) {
    width: 48px;
  }
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

.popover-btn {
  width: 314px;
  height: 44px;
  background: #FAFAFA;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  font-family: 'Inter Tight', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  margin: 0 auto;
    .q-icon {
      height: 24px;
      width: 24px;
    }
  @media (max-width: $breakpoint-xs-max) {

  }
}
.mobile-phone-row {
  width: 100%;
  display: flex;
  .q-input {
    width: 100%;
    margin-right: 10px;
  }
}
.sms-code-subtitle {
  font-family: 'Inter Tight', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #4d4d4d;
  line-height: 23px;
  margin-bottom: 5px;
}
</style>
