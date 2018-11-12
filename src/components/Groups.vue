<template>
  <div>
    <form>
      <span>Sort By </span>
      <select name="Sort By" v-model="selected">
        <option v-for="option in options" :value="option.value" :key="option.id">
          {{ option.text }}
        </option>
      </select>
      <p>Number of Groups <input v-model.number="groups" type="number"></p>
    </form>
    <button v-on:click="sortByD">Team, Tenure, Gender Sort</button>
    <ul>
      <li v-for="person in sorted" :key=person.id>
        {{ person }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return  {
      groups: null,
      selected: null,
      options: [
        { text: 'Gender, Team, Tenure', value: 'A' },
        { text: 'Gender, Tenure, Team', value: 'B' },
        { text: 'Team, Gender, Tenure', value: 'C' },
        { text: 'Team, Tenure, Gender', value: 'D' },
        { text: 'Tenure, Gender, Team', value: 'E' },
        { text: 'Tenure, Team, Gender', value: 'F' },
      ],
      sorted: []
    }
  },
  methods: {
    dateSort(a, b) {
      let dateA = new Date(a.Date)
      let dateB = new Date(b.Date)

      if (dateA < dateB) {
        this.genderSort(a, b)
      }

      if (dateA > dateB) {
        return 1
      }

      return 0
    },
    genderSort(a, b) {
      let genderA = a.Gender.toUpperCase()
      let genderB  = b.Gender.toUpperCase()

      if (genderA < genderB) {
        return -1
      }

      if (genderA > genderB) {
        return 1
      }

      return 0
    },
    teamSort(a, b) {
      let teamA = a.Team.toUpperCase()
      let teamB = b.Team.toUpperCase()

      if (teamA < teamB) {
        return -1
      }

      if (teamA > teamB) {
        return 1
      }

      return this.dateSort(a, b)
    },
    sortByD: function() {
      this.sorted = this.people.sort(this.teamSort)
      let index = 0;
      let tables = [];

      for (let i = 0; i < this.groups; i++) {
        tables.push([])
      }

      for (let i = 0; i < this.sorted.length; i++) {
        tables[index].push(this.sorted[i])
        index++
        if (index == this.groups) {
          index = 0
        }
      }

      this.sorted = tables;
      // eslint-disable-next-line
      console.log(this.sorted)
    }
  },
  props: {
    people: Array
  }
}
</script>