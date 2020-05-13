<template>
  <v-app>
    <app-bar />
    <v-content id="content">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="stretch"
          justify="center"
        >
          <v-col class="text-center">
            <app-alert />
            <v-card>
              <v-card-title>
                <v-text-field
                  append-icon="search"
                  autofocus
                  clearable
                  hide-details
                  label="Buscar"
                  outlined
                  v-model="search"
                ></v-text-field>
              </v-card-title>
                <app-table
                  :headers="headers"
                  :items="standards"
                  :search="search"
                />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppAlert from './components/AppAlert.vue'
import AppBar from './components/AppBar.vue'
import AppTable from './components/AppTable.vue'
import headers from './utils/headers'
import standards from './utils/standards'

export default {
  name: 'App',

  components: {
    AppAlert,
    AppBar,
    AppTable
  },

  data: () => ({
    headers,
    search: '',
    standards
  }),

  created() {
    this.$vuetify.theme.dark = false
  }
}
</script>

<style scoped lang="sass">
  #content
    margin-top: 128px
</style>
