const axios = require('axios')

// Obtener los primeros 3 usuarios SECUENCIAL
async function obtenerPostsUsuariosSecuancial(cuantos) {
  try{
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    const users = response.data.slice(0, cuantos);

    for (let i = 0; i < cuantos; i++) {
      response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users[i].id}`)
      const posts = response.data
      console.log(`${users[i].name} tiene ${posts.length} posts`)
    }
  } catch (error) {
    console.log(error)
  }
}

async function obtenerPostsUsuariosConcurrente(cuantos) {
  let response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
  const users = response.data.slice(0, cuantos);
  let promesas = users.map(user =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  )
  // Parte concurrente
  const responses = await Promise.all(promesas)
  responses.forEach((response, i) => {
    const posts = response.data
    console.log(`${users[i].name} tiene ${posts.length} posts`)
  })
  
}

obtenerPostsUsuariosSecuancial(3)


obtenerPostsUsuariosConcurrente(3)
