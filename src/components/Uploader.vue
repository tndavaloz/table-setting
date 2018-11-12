<template>
  <div>
    <h1>Excel File</h1>
    <vue-xlsx-table @on-select-file="handleSelectedFile">
      Select File
    </vue-xlsx-table>
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
        people: null
      }
    },
    methods: {
      handleSelectedFile (convertedData) {
        let file = JSON.parse(JSON.stringify(convertedData))
        this.people = file.body
      }
    }
  }
</script>