<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div
        class="text-h3"
        style="opacity:.4"
      >
        Произошла неполадочка... сейчас починим
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
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
