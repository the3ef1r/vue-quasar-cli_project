<template>
  <q-list bordered>
    <q-expansion-item
      group="somegroup"
      v-for="(item,index) in items"
      :key="index"
      :label="item.label"
      header-class="text-primary"
    >
      <q-card>
        <q-card-section>
          {{ item.text }}
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator />
  </q-list>
</template>

<script>
export default {
  name: 'Accordeon',
  data() {
    return {
      items: [
        { label: 'Преимущества подачи заявки через “Федеральную службу помощи”', text: 'Lorem Ipsum' },
        { label: 'Кто может стать банкротом?', text: 'Lorem Ipsum' },
        { label: 'С чего начать процедуру банкротства?', text: 'Lorem Ipsum' },
        { label: 'Какие последствия признания банкротом?', text: 'Lorem Ipsum' },
        { label: 'Ньюансы и последствия', text: 'Lorem Ipsum' },
      ],
    };
  },
};
</script>
