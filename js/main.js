var elGridButton = document.querySelector(".list-view__button-grid");
var elListButton = document.querySelector(".list-view__button-list");
var elCategoryMain = document.querySelector('.category-main');
var elGridView = document.querySelector('.category-main__right-grid');
var elOutComes = document.querySelector('.outcomes');

elGridButton.addEventListener("click", function () {
  switchOutcomeToListView();
})

elListButton.addEventListener("click", function () {
  switchOutcomeToGridView();
})

function switchOutcomeToListView() {
  elCategoryMain.classList.remove('category-main-open-grid');
  elCategoryMain.classList.add("category-main-open-list");
}

function switchOutcomeToGridView() {
  elCategoryMain.classList.add('category-main-open-grid');
  elCategoryMain.classList.remove("category-main-open-list");
}

var elFilterButton = document.querySelector(".applied-filter__btn-button");
var body = document.querySelector(".body");
elFilterButton.addEventListener("click", function () {
  body.classList.add("body-open");
})

var elLeftWrapper = document.querySelector(".category-main__left-wrapper");


window.addEventListener("click", (e) =>{
  if(e.target == elLeftWrapper ){
    body.classList.remove("body-open");
  }
})

window.addEventListener('resize', function (event) {
  var newWidth = window.innerWidth;
  if (newWidth <= 790) {
    elCategoryMain.classList.remove('category-main-open-list');
    elCategoryMain.classList.add('category-main-open-grid');
  }
});

var newWidth = window.innerWidth;
if (newWidth <= 790) {
  elCategoryMain.classList.remove('category-main-open-list');
  elCategoryMain.classList.add('category-main-open-grid');
}