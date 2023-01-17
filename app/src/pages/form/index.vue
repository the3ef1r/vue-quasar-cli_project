<template>
  <q-page class="form q-px-xl q-py-md bg-grey-1">
    <section class="section">
      <div class="text-center text-h2 text-weight-bold">
        Заявка на процедуру банкротства
      </div>
      в компанию  {{ companyName }}
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-col-gutter-xl"
      >
        <div class="row q-col-gutter-xl">
          <div class="col-6">
            <q-input
              flat
              v-model="form.name"
              label="Имя"
              hint="Введите ваше имя"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Обязательное поле для заполнения']"
            />
          </div>
          <div class="col-6">
            <q-input
              flat
              v-model="form.surname"
              label="Фамилия"
              hint="Введите вашу фамилию"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Обязательное поле для заполнения']"
            />
          </div>
        </div>

        <div class="row q-col-gutter-xl">
          <div class="col-6">
            <div class="q-gutter-sm">
              <div class="text-weight-bold">
                Какая сумма задолжности
              </div>
              <q-radio
                v-for="(item,index) in summ"
                dense
                :key="index"
                v-model="summModel"
                :val="item.value"
                :label="item.label"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="q-gutter-sm">
              <div class="text-weight-bold">
                Какой срок просроченной задолжности
              </div>
              <q-radio
                v-for="(item,index) in time"
                dense
                :key="index"
                v-model="timeModel"
                :val="item.value"
                :label="item.label"
              />
            </div>
          </div>
        </div>
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'FormPage',
  computed: {
    companyName() {
      return this.$route.query?.companyName;
    },
  },
  data() {
    return {
      form: {
        name: '',
        surname: '',
      },
      summModel: '2',
      timeModel: '2',
      summ: [
        { value: '1', label: 'до 500 000р' },
        { value: '2', label: '500 000 - 1 000 000р' },
        { value: '3', label: 'свыше 1 000 000р' },
      ],
      time: [
        { value: '1', label: 'до 3х месяцев' },
        { value: '2', label: 'более 3х месяцев' },
        { value: '3', label: 'нет просрочек' },
      ],
    };
  },
};
</script>
