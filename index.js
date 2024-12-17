const baseUrl = 'https://jsonplaceholder.typicode.com'
const inputId = document.querySelector('.id')
const btnGetById = document.querySelector('.btn-getId')
const btnGetAll = document.querySelector('.btn-getAll')
const listContainer = document.querySelector('.container-list')

const getAllPerson = async () => {
  const path = '/posts'
  try {
    const url = `${baseUrl}${path}`
    const requrest = new Request(url)
    const response = await fetch(requrest)
    if (!response.ok) throw new Error(response.statusText)
    const json = await response.json()
    const dataList = document.createElement('ol')
    const data = []

    for (let person of json) {
      const dataTitle = document.createElement('li')
      dataTitle.textContent = person.title
      data.push(dataTitle)
    }
    dataList.append(...data)
    listContainer.append(dataList)
  } catch (error) {
    console.log(error)
  }
}

async function addPerson(event) {
  event.preventDefault()

  const path = '/posts'

  try {
    const url = `${baseUrl}${path}`
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        title: event.target.title.value,
        body: event.target.body.value,
        id: 103,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    console.log(request, 'ini request')
    const response = await fetch(request)
    console.log(response, 'ini response')
    if (!response.ok) throw new Error(response.statusText)
    const json = await response.json()
    console.log(json, 'ini json')
    location.href = `${response.url}`
  } catch (error) {
    console.log(error)
  }
}
