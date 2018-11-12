<template>
  <div class="jumbotron">
    <h1 class="display-4">Seat Chart</h1>
    <p class="lead">This tool allows you to upload an excel file and sort according to the pre-defined categories. At its current state, you can only upload an excel file with headers of 'Name', 'Team', 'Date', and 'Gender'.</p>
    <hr class="my-4">
    <div class="xlsx_">
      <vue-xlsx-table @on-select-file="handleSelectedFile">
        Select A File To Upload
      </vue-xlsx-table>
      <span class="font-weight-normal"> {{ fileName }}</span>
    </div>
    <Groups v-if="people" :people=people></Groups>
  </div>
</template>

<script>
  import Groups from './Groups.vue'

  export default {
    components: {
      Groups
    },
    data() {
      return {
        people: null,
        fileName: null
      }
    },
    methods: {
      handleSelectedFile (convertedData) {
        this.fileName = document.getElementsByTagName('input')[0].files[0].name
        let file = JSON.parse(JSON.stringify(convertedData))
        this.people = file.body
      }
    }
  }
</script>

<style>
.xlsx_ {
  float: left;
  margin-bottom: .5em;
}
</style>
