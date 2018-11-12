<template>
  <div>
    <div class="input-group mb-3">
      <input class="form-control" v-model.number="groups" type="number" placeholder="Enter Number of Groups">
    </div>
    <select class="form-control" v-model="sortCategory">
      <option v-for="option in options" :value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>
    <button class="btn btn-primary btn-lg btn-block" v-if="sortCategory && groups" v-on:click="categorySort">{{ sortCategory.text }} Sort</button>
    <ul class="list-group">
      <li v-for="group in sorted" :key=group.id>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th score="col">Name</th>
              <th score="col">Team</th>
              <th score="col">Gender</th>
              <th score="col">Start Date</th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="person in group" :key="person.id">
                <td>{{ person.Name }}</td>
                <td>{{ person.Team }}</td>
                <td>{{ person.Gender }}</td>
                <td>{{ new Date(person.Date).toLocaleDateString("en-US") }}</td>
              </tr>
            </tbody>
        </table>
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
      options: [
        { text: 'Gender, Team, Tenure', value: ['gender', 'team', 'date'] },
        { text: 'Gender, Tenure, Team', value: ['gender', 'date', 'team'] },
        { text: 'Team, Tenure, Gender', value: ['team', 'date', 'gender'] },
        { text: 'Tenure, Gender, Team', value: ['date', 'gender', 'team'] }
      ],
      sortCategory: null,
      sorted: []
    }
  },
  methods: {
    categorySort() {
      this.sorted = sortByCategory(this.sortCategory, this.people, this.groups)
    }
  },
  props: {
    people: Array
  }
}
</script>

<style>
ul {
  list-style: none
}

.btn {
  margin-bottom: 1em;
}

.form-control {
  margin-bottom: 1em;
}
</style>
