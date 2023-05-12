/* El codigo realiza una solicitud API Fetch para obtener datos de la pagina https://api.github.com para obtener el nombre, dirección de blog y su dirección de un usuario y colocarlo en el Doom y poder observar los datos */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');/* para seleccionar una clase se indica con punto al inicio */
const $b = document.querySelector('.blog'); /* Las clases se indican con punto no con # ese es para el id */
const $l = document.querySelector('.location');

async function displayUser(username) { /* si vas a usar await se tiene que usar una función asincrona */
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();/* Se tiene que crear una variable data con los datos obtenidos de fetch */
    /* console.log(data); // Este console.log ya no es necesario*/
    $n.textContent = `${data.name}`; /* Para usar valores con ${} se tienen que usar apostrofes graves `` */
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch(error) {
    handleError(error); /* Indicar que se hara en caso de no consumir la api */
  };
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');/* Se puede definir el catch aqui mismo o en la funcion, lo puse en la funcion para que quede más claro */