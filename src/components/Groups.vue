<template>
  <div>
    <form>
      <span>Sort By </span>
      <select name="Sort By" v-model="sortCategory">
        <option v-for="option in options" :value="option" :key="option.id">
          {{ option.text }}
        </option>
      </select>
      <p>Number of Groups <input v-model.number="groups" type="number"></p>
    </form>
    <button v-if="sortCategory && groups" v-on:click="categorySort">{{ sortCategory.text }} Sort</button>
    <ul>
      <li v-for="person in sorted" :key=person.id>
        {{ person }}
      </li>
    </ul>
  </div>
</template>

<script>
import { sortByCategory }  from './../../dev/index.js'

export default {
  data() {
    return  {
      groups: null,
      sortCategory: null,
      options: [
        { text: '-', value: null },
        { text: 'Gender, Team, Tenure', value: 'genderSort' },
        { text: 'Gender, Tenure, Team', value: 'genderSort' },
        { text: 'Team, Gender, Tenure', value: 'teamSort' },
        { text: 'Team, Tenure, Gender', value: 'teamSort' },
        { text: 'Tenure, Gender, Team', value: 'dateSort' },
        { text: 'Tenure, Team, Gender', value: 'dateSort' },
      ],
      sorted: []
    }
  },
  methods: {
    categorySort() {
      this.sorted = sortByCategory(this.sortCategory.value, this.people, this.groups)
    }
  },
  props: {
    people: Array
  }
}
</script>