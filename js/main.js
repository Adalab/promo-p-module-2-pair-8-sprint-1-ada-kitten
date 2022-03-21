"use strict";

// const content1='<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!</p></article></li>';
// const content2='<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>'
// const content3=' <li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>'
// listName.innerHTML = content1 + content2 + content3;

const newForm = document.querySelector(".js-new-form");
newForm.classList.remove("collapsed");
const listName = document.querySelector(".js-list");

const kittenImage = '<img src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"/>';
const kittenName = "Anastacio";

// let kittenName = "Anastacio";
// kittenName = kittenName.toUpperCase();
// document.write(kittenName);

const kittenDesc =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace = "British Shorthair";

const kittenImage2 = '<img class="card_img" src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"/>';
const kittenName2 = "Fiona";

const kittenImage3 = '<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"/>';
const kittenName3 = "Cielo";

listName.innerHTML += `<li class="card"> ${kittenImage} ${kittenName.toUpperCase()} ${kittenDesc} ${kittenRace} </li>`;
listName.innerHTML += `<li class="card"> ${kittenImage2} ${kittenName2} ${kittenDesc} ${kittenRace} </li>`;
listName.innerHTML += `<li class="card"> ${kittenImage3} ${kittenName3} ${kittenDesc} ${kittenRace} </li>`;

// list.innerHTML += `<li> ${item1} </li><li> ${item2} </li><li> ${item3} </li>`;

// otra forma de crear la lista (interpolar)
// let html = "";
// html += `<li> ${item1} <span> ${price1} </span> </li>`;
// html += `<li> ${item2} <span> ${price2} </span> </li>`;
// html += `<li> ${item3} <span> ${price3} </span> </li>`;
// list.innerHTML=html;
