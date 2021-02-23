<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="itemsPerPage"
    :search="search"
    multi-sort
  >
    <template v-slot:item.url="{ item }">
      <a :href="item.url" target="_blank">
        {{ item.url }}
      </a>
    </template>
    <template v-slot:item.book_id="" style="display: none"></template>
    <template v-slot:item.theme_id="" style="display: none"></template>
    <template v-slot:item.part_id="" style="display: none"></template>
    <template v-slot:item.title_id="" style="display: none"></template>
    <template v-slot:item.chapter_id="" style="display: none"></template>
  </v-data-table>
</template>

<script>
export default {
  name: "AppTable",

  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: false,
      default: ""
    }
  },

  data: () => ({
    itemsPerPage: 10
  })
};
</script>
