# POPCORNBCN - FRONTEND

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1746899721/PopcornBCN/Preview/PopcornBCNPreviewTotal_rjurio.png" alt="desktop and mobile preview" />
</div>

## Descripción

PopcornBCN es una página que permite ver la lista de películas disponibles en los cines de la ciudad de Barcelona. Enseña también la lista de cines disponibles como las sesiones de cada película. Además el user puede loguearse, añadir en su lista las películas favoritas y comentarlas. El admin es quien tiene la posibilidad de crear, editar, eliminar películas, cines, sesiones y comentarios, a través de formularios.

## Live Demo

link http://popcornbcn......

## Desarrollado con

- Javascript Vanilla
- HTML
- CSS

## Requisitos

Proyecto creado con Vite. Al abrir el proyecto instalar paquetes de NPM :

npm install

## Pagina web

### Página de inicio

En la página de inicio el user puede elegir navegar directamente en la web, eligiendo si ver películas o lista de cine:

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747118902/PopcornBCN/Preview/PageStart_yeccli.png" alt="start page" />
</div>

También puede hacer login, o registrarse si quiere crear una cuenta.

### Página de movies

La página de movies permite ver la lista de películas en los cines de Barcelona. Vemos en cada card el estado de la película (disponible, no disponible, próximamente).

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747119056/PopcornBCN/Preview/movies_d8pea6.jpg" alt="movies page" />
</div>

El user puede añadir a la lista las películas que quiere guardarse. Esto está permitido solo si está logueado.
Se pueden filtrar las películas:

- VER MI LISTA: fitlra las películas que el user ha añadido en su lista
- GÉNERO: filtra películas por género
- ESTADO: filta películas por estado

### Movie details

Al hacer click en una card, vamos a la página de detalles, y podremos acceder a toda la información de la película.

<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747125219/PopcornBCN/Preview/movieDetailsfigma_ahpgyt.png" alt="movies details" />

Al hacer click en "Sesiones" se pueden ver las sesiones existentes por cada película, permitiendo al user de ir a la página del cine que le interesa:
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747126555/PopcornBCN/Preview/screeningFigma_tgcngo.png" alt="screenings" />

En la parte más abajo el user puede ver y postear un comentario:
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747120871/PopcornBCN/Preview/commentsDetailMovie_d4iuej.jpg" alt="post comment" />

### Mi cuenta

En la página de mi cuenta, el user logueado podrà modificar sus datos, ver sus comentarios publicados y poder eliminarlos si quisiera. Si es user no está logueado saldrá la sección de Login/Registrarse.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747128443/PopcornBCN/Preview/MiCuentaFigma_e0mqzi.png" alt="mi cuenta" />

### Cines

En la página de cines está la lista de todos los cines de Barcelona. El link "Ir a la web" redirige a la página oficial de cada cine.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747130858/PopcornBCN/Preview/cines_i6wktt.jpg" alt="cines" />

### Contáctanos

En la página de soporte el user puede enviar un mail pulsando erl botón proporcionado, por si hubiera cualquier tipo de problema, comentario que se quiere aportar, etc etc.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747130920/PopcornBCN/Preview/contact_cu56ik.jpg" alt="soporte" />

### Admin

El user con role "admin" tiene una vista especial de la web, para agregar, editar o eliminar el contenido.

#### Página de admin

Esta sección aparece solo si el user logueado es el Admin. Permite tener control y visibilidad sobre los datos de cualquier user logueado.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747132086/PopcornBCN/Preview/adminpageFigma_zmvauk.png" alt="movie page admin" />

#### Películas

 <img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747131454/PopcornBCN/Preview/adminmovie_hiw9pa.jpg" alt="movie page admin" />

El admin puede agregar películas, o editar las existentes, a través de formularios que hacen peticiones al backend.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747131456/PopcornBCN/Preview/formMovie_xxucbg.png" alt="forms admin" />

#### Comentarios de películas

El admin tiene control sobre los comentarios posteados, y puede eliminar aquellos que considere necesario.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747132327/PopcornBCN/Preview/admincomments_prpazu.png" alt="comments delete admin" />

#### Sesiones de películas

Lo mismo puede hacer con las sesiones de cada película, añadiendo una nueva o editando las que ya existen.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747132538/PopcornBCN/Preview/sesionadmin_xmwq1y.png" alt="sesiones pelis admin" />

#### Cines

El admin puede agregar cines, o editar los existentes, a través de formularios que hacen peticiones al backend.
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1747131816/PopcornBCN/Preview/admincine_hqh2fa.png" alt="cine page admin" />
