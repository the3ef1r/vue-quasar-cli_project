<template>
  <div class="fullscreen bg-secondary text-white text-center q-pa-md flex flex-center">
    <div>
      <div
        style="font-size: 20vh"
        class="heading-h4"
      >
        404
      </div>

      <div
        class="text-h3 q-mt-xl"
        style="opacity:.6"
      >
        Произошла неполадочка... сейчас починим
      </div>

      <q-btn
        class="q-mt-xl bg-white"
        unelevated
        size="md"
        to="/"
        text-color="secondary"
        label="Назад"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNotFound',
};
</script>
