<template>
  <v-app-bar
    fixed
    color="#fcb69f"
    dark
    elevate-on-scroll
    scroll-threshold="500"
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        v-bind="props"
      ></v-img>
    </template>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  data: () => ({
    title: 'Normas SCT',
    subtile: 'Carreteras'
  })
}
</script>
