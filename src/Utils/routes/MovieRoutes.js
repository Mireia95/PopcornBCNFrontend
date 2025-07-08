import { API } from '../API/API';

//delete movie
export const deleteMovie = async (movie) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/movies/${movie._id}`,
    method: 'DELETE',
    token: token
  });
};

//get movies
export const getMovies = async () => {
  const response = await API({ endpoint: '/movies' }); //res.json seràn los movies
  return response;
};

//get movie by id
export const getMovieById = async (id) => {
  const response = await API({ endpoint: `/movies/${id}` }); //res.json seràn los movies
  return response;
};

//post movie
export const postMovie = async (event) => {
  const token = JSON.parse(localStorage.getItem('token'));

  //recogo la info que me llega del form
  const [
    name,
    director,
    image,
    posterBG,
    country,
    originalLang,
    duration,
    year,
    releaseDate,
    state,
    description,
    trailer
  ] = event.target;

  //recupero los generos que están checkeados ✔
  const selectedGenres = [
    ...event.target.querySelectorAll('input[name="genre"]:checked')
  ].map((input) => input.value);

  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('director', director.value);
  formData.append('image', image.files[0]);
  formData.append('description', description.value);

  //añadimos los genres, que es un array de valores
  selectedGenres.forEach((genre) => {
    formData.append('genre', genre);
  });
  formData.append('duration', duration.value);
  formData.append('releaseDate', releaseDate.value);
  formData.append('year', year.value);
  formData.append('country', country.value);
  formData.append('originalLang', originalLang.value);
  formData.append('state', state.value);
  formData.append('trailer', trailer.value);
  formData.append('posterBG', posterBG.files[0]);

  const newMovie = await API({
    endpoint: '/movies',
    method: 'POST',
    isJson: false,
    token: token,
    body: formData
  });
  return newMovie;
};

//edit movie
export const editMovie = async ({ e, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const [
    name,
    director,
    ,
    ,
    country,
    originalLanguage,
    duration,
    year,
    releaseDate,
    state,
    description
  ] = e.target;

  //subo elementos de la petición
  const body = new FormData();
  body.append('name', name.value),
    body.append('director', director.value),
    body.append('country', country.value),
    body.append('originalLanguage', originalLanguage.value),
    body.append('duration', duration.value),
    body.append('year', year.value),
    body.append('releaseDate', releaseDate.value),
    body.append('state', state.value),
    body.append('description', description.value);

  //le paso el poster
  const posterForm = document.getElementById('poster');
  if (posterForm.files[0]) {
    //quiere decir que hemos subido un nuevo archivo
    body.append('poster', posterForm.files[0]);
  }

  //le paso el poster BG
  const posterBGForm = document.getElementById('posterBG');
  if (posterBGForm.files[0]) {
    //quiere decir que hemos subido un nuevo archivo
    body.append('posterBG', posterBGForm.files[0]);
  }

  //le paso el trailer
  const trailer = document.getElementById('trailer');
  if (trailer) {
    body.append('trailer', trailer.value);
  }

  //le paso los generos seleccionados en el form
  //recupero los inputs seleccionados
  const genresSelected = document.querySelectorAll(
    "input[name='genre']:checked"
  );

  //con un ciclo for of recupero los valores de los inputs, y los añado al array genresValues
  for (const genre of genresSelected) {
    body.append('genre[]', genre.value);
  }

  const response = await API({
    endpoint: `/movies/${movie}`,
    method: 'PUT',
    isJson: false,
    token: token,
    body
  });

  return response;
};
