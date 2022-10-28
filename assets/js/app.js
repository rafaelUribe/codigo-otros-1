const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
const $l = document.getElementById('location');
// se cambiaron los metodos a get element by id para manejarlos individualemnte

// se usa async para indicar que se va a trabajar con promesas
const displayUser = async (username) => {
  $n.textContent = 'cargando...';
  // se usaron bloques de try catch
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json()
    // se uso el metodo .json() para guardar los datos en variabla
    console.log(data);
    $n.textContent = `${data.name}`;
    // se cambiaron las comillas para poder imprimir los datos
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }
  catch(e){
    handleError(e)
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);