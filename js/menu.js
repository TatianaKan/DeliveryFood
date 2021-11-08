const restourant = 'db/tanuki'

const rwnderItems = (data)=> {
  console.log(data)
}

fetch(`./${restourant}.json`)
.then ((response) => response.json())
.then ((data) => {
  console.log(data)
})
.catch ((error)=> {
  console.log(error)
  })