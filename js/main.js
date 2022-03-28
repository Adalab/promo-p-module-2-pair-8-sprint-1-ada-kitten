'use strict';

// const content1='<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!</p></article></li>';
// const content2='<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>'
// const content3=' <li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>'
// listName.innerHTML = content1 + content2 + content3;

const listName = document.querySelector('.js-list');
const form = document.querySelector('.form');
// let kittenName = "Anastacio";
// kittenName = kittenName.toUpperCase();
// document.write(kittenName);
let input_search_desc = document.querySelector('.js_in_search_desc');
// input_search_desc.value = 'Cariñoso';
//input_search_desc.value = ''; //para que me salgan todos
let descrSearchText = input_search_desc.value;

const kittenDesc =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace1 = 'British Shorthair';

const kittenDesc2 =
  'Cariñoso, simpático, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace2 = 'Maine Coon';

const kittenDesc3 =
  'Revoltoso, le gusta molestar y jugar. Es una maravilla acariciarle!';
const kittenRace3 = 'Persa';

const kittenImage =
  '<img src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"/>';
const kittenName = 'Anastacio';

const kittenImage2 =
  '<img class="card_img" src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"/>';
const kittenName2 = 'Fiona';

const kittenImage3 =
  '<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"/>';
const kittenName3 = 'Cielo';

//1. Busca la sección new-form que contiene el formulario y elimina la clase collapsed a esta etiqueta
let newForm = document.querySelector('.js-new-form');
newForm.classList.remove('collapsed');

// //2. Añade nuevamente la clase de la etiqueta anterior a collapsed
// // newForm.classList.add('collapsed');

// //3. Cambia tu fichero main.js para verificar que clase tiene esta sección para agregarla/quitarla
// if (newForm.classList.contains('collapsed')) {
//   newForm = newForm.classList.remove('collapsed');
//   //completa el código
// } else {
//   //completa el código
//   newForm = newForm.classList.add('collapsed');
// }

//4. Bonus: No se ha especificado la raza, ¿qué se muestra entonces?
// No se ha especificado la raza.

// let html = '';
// if (kittenRace1 === '') {
//   html += `<h3 class='card_race'>No se ha especificado la raza</h3>`;
// } else {
//   html = kittenRace1;
// }
// if (kittenDesc.includes(descrSearchText)) {
//   listName.innerHTML += `<li class="card"> 
//   ${kittenImage}
//   <h3 class="card_title">${kittenName.toUpperCase()}</h3>
//   <h4 class="card_race">${html}</h4>
//   <p class="card_description">
//   ${kittenDesc}
//   </p>
// </li>`;
// }

// if (kittenRace2 === '') {
//   html += `<h3 class='card_race'>No se ha especificado la raza</h3>`;
// } else {
//   html = kittenRace2;
// }
// if (kittenDesc2.includes(descrSearchText)) {
//   listName.innerHTML += `<li class="card"> 
//   ${kittenImage2}
//   <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
//   <h4 class="card_race">${html}</h4>
//   <p class="card_description">
//   ${kittenDesc2}
//   </p>
// </li>`;
// }

// if (kittenRace3 === '') {
//   html += `<h3 class='card_race'>No se ha especificado la raza</h3>`;
// } else {
//   html = kittenRace3;
// }
// if (kittenDesc3.includes(descrSearchText)) {
//   listName.innerHTML += `<li class="card"> 
//   ${kittenImage3}
//   <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
//   <h4 class="card_race">${html}</h4>
//   <p class="card_description">
//   ${kittenDesc3}
//   </p>
// </li>`;
// }

input_search_desc.value = 'Maine Coon';

//1. Mostrar/ocultar formulario

const icon = document.querySelector('.js_icon');

// icon.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (newForm.classList.contains('collapsed')) {
//     newForm.classList.remove('collapsed');
//   } else {
//     newForm.classList.add('collapsed');
//   }
// });

//2. Validar formulario nuevo gatito
// const buttonAdd = document.querySelector('.js-btn-add');
// buttonAdd.addEventListener('click', (event) => {
//   event.preventDefault();
// });

//Busca los inputs del formulario y el label para el mensaje de error y añade las clases de js.
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace =document.querySelector('.js-input-race')
const labelMesageError = document.querySelector('.js-label-error');

//"Debe rellenar todos los valores".

const buttonAdd = document.querySelector('.js-btn-add');
buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    labelMesageError.innerHTML = '';
  }
});

//3. Validar formulario búsqueda
const buttonSearch = document.querySelector('.js__buttonSearch');
const errorSearch = document.querySelector('.js_errorSearch');
buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  let descrSearchText = input_search_desc.value;
  if (descrSearchText === '') {
    errorSearch.innerHTML = 'Debe rellenar todos los valores';
  } else {
    errorSearch.innerHTML = '';
  }
});

//4. Cancelar formulario
const buttonCancel = document.querySelector('.js_buttonCancel');
// let newForm = document.querySelector('.js-new-form');
buttonCancel.addEventListener('click', (event) => {
  event.preventDefault();
  newForm.classList.add('collapsed');

  //Recuerda también limpiar los valores de los inputs.

  inputDesc.value="";
  inputName.value="";
  inputPhoto.value="";
  inputRace.value="";

})

//Ejercicio 1 Funciones

function showNewCatForm(){
    newForm.classList.remove('collapsed');
}

function hideNewCatForm(){
    newForm.classList.add('collapsed');
}
//funcion manejadora
function handleClickNewCatForm(event) {
    event.preventDefault();


    if (newForm.classList.contains('collapsed')) {
       showNewCatForm();
    
      } else {
        hideNewCatForm();
      }
  }

  icon.addEventListener('click', handleClickNewCatForm);

  //Ejercicio  2 Funciones
   
  
  function renderKitten(photo, desc, name, race) {

  listName.innerHTML += `<li class="card"> 
  ${photo}
  <h3 class="card_title">${name.toUpperCase()}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
  ${desc}
  </p>
</li>`;
  
  }

  renderKitten ("http", "bonita","Kitty","perritocaliente" );
  renderKitten ("http", "simpatico","ivan","3" );
  renderKitten ("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!', "Anastacio", "Bristish shorthair")
  renderKitten ("https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg","Cariñoso, simpático, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!", "fiona","Maine Coon")
  renderKitten ('<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"/>', 'Revoltoso, le gusta molestar y jugar. Es una maravilla acariciarle!', "cielo", "persa")

  //3 ejercicio de las funciones

  //modifica el evento para cumplir una función manejadora

function addNewKitten(event) {

  event.preventDefault(); //eventDefault es un método
  const catInfo = renderKitten();
  paintHtml(catInfo); //ejecutando la estructura
}

buttonAdd.addEventListener('click', renderKitten);
