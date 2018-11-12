function dateSort(a, b) {
  let dateA = new Date(a.Date)
  let dateB = new Date(b.Date)

  if (dateA < dateB) {
    return -1
  }

  if (dateA > dateB) {
    return 1
  }

  return 0
}

function genderSort(a, b) {
  let genderA = a.Gender.toUpperCase()
  let genderB  = b.Gender.toUpperCase()

  if (genderA < genderB) {
    return -1
  }

  if (genderA > genderB) {
    return 1
  }

  return 0
}

function teamSort(a, b) {
  let teamA = a.Team.toUpperCase()
  let teamB = b.Team.toUpperCase()

  if (teamA < teamB) {
    return -1
  }

  if (teamA > teamB) {
    return 1
  }

  return 0
}

function sortByCategory(sortName, people, numberOfGroups) {
  let sortFuncs = {
    'team': teamSort,
    'gender': genderSort,
    'date': dateSort
  }

  let sorted = people.sort(sortFuncs[sortName[0]])
  sorted = sorted.sort(sortFuncs[sortName[1]])
  sorted = sorted.sort(sortFuncs[sortName[2]])

  let index = 0;
  let tables = [];

  for (let i = 0; i < numberOfGroups; i++) {
    tables.push([])
  }

  for (let i = 0; i < sorted.length; i++) {
    tables[index].push(sorted[i])
    index++
    if (index == numberOfGroups) {
      index = 0
    }
  }

  return tables
}

export { sortByCategory }
