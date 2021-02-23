<template>
  <v-alert border="left" dense dismissible text type="info">
    {{ caption }}
  </v-alert>
</template>

<script>
export default {
  name: "AppAlert",

  data: () => ({
    caption: "Actualizado: 2020-05-05"
  })
};
</script>
