//Targets here---------------------------->
var sideRadioButton = document.querySelector('.side-dish');
var mainDishRadioButton = document.querySelector('.main-dish');
var dessertRadioButton = document.querySelector('.dessert-dish');
var entireMealRadioButton = document.querySelector('.entire-meal');
var clearButton = document.querySelector('.clear-button');
var rightBoxContent = document.querySelector('.right-box-content');
var letsCookButton = document.querySelector('.left-box-button');
var footerBar = document.querySelector('.add-recipe-footer');

// var dropdown0 = document.querySelector('#blank');
// var dropdownSide = document.querySelector('.side');
// var dropdownMain = document.querySelector('.main');
// var dropdownDessert = document.querySelector('.dessert');
var dropdownList = document.querySelector('.dropdown');


var headerBtn = document.querySelector('.add-recipe-header-btn');
var footerBtn = document.querySelector('.add-recipe-footer-btn');

var recipeValue = document.querySelector('.recipe-value');



//Global Variables here---------------------------->
var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caesar Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies',
];
var mainDish = [
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza',
];
var dessert = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs',
];
// var testArray = [];

//Event Listeners here---------------------------->
letsCookButton.addEventListener('click', showMyMeal);
clearButton.addEventListener('click', clearAll);

headerBtn.addEventListener('click', showAddRecipeFooter);
footerBtn.addEventListener('click', addMeal);



//Functions here---------------------------->
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};


function showMyMeal() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)];
  var randomDessert = dessert[getRandomIndex(dessert)];

  if (sideRadioButton.checked === true) {
    getRandomSide(randomSide);
  }
  if (mainDishRadioButton.checked === true) {
     getRandomMainDish(randomMainDish); 
  } 
  if (dessertRadioButton.checked === true) {
    getRandomDessert(randomDessert);
  } 
  if (entireMealRadioButton.checked === true) {
    getEntireMeal(randomSide, randomMainDish, randomDessert);
  } 
  else {
    showErrorMessage()
  }
  showClearButton();
};

function getRandomSide(side) {
  rightBoxContent.innerHTML = `
  <h1 class="right-box-upper-message">You should make:<h1>
  <h2 class="right-box-main-message">${side}</h2>`
};

function getRandomMainDish(main) {
  rightBoxContent.innerHTML = `
    <h1 class="right-box-upper-message">You should make:<h1>
    <h2 class="right-box-main-message">${main}</h2>`
};

function getRandomDessert(dessert) {
  rightBoxContent.innerHTML = `
  <h1 class="right-box-upper-message">You should make:<h1>
  <h2 class="right-box-main-message">${dessert}</h2>`
};

function getEntireMeal(side, main, dessert) {
  rightBoxContent.innerHTML = `
  <h1 class="right-box-upper-message">You should make:<h1>
  <h2 class="right-box-main-message">${side}</h2>
  <h2 class="right-box-main-message">${main}</h2>
  <h2 class="right-box-main-message">${dessert}</h2>`
};


function clearAll() {
  clearButton.classList.add('hidden');
  sideRadioButton.checked = false;
  mainDishRadioButton.checked = false;
  dessertRadioButton.checked = false;
  entireMealRadioButton.checked = false;
  
  rightBoxContent.innerHTML = `
    <section class="right-box-content">
      <img id="right-img" src="./assets/cookpot.svg">
    </section>`
};

function showClearButton() {
  clearButton.classList.remove('hidden');
};

function showErrorMessage() {
  if (sideRadioButton.checked === false && mainDishRadioButton.checked === false && dessertRadioButton.checked === false) {
    rightBoxContent.innerHTML = `
          <div class="">
            <p>Please select an option</p>
          </div>`
  }
};

function showAddRecipeFooter() {
  footerBar.classList.toggle('hidden');
  };
 

function addSide() {
  sides.push(recipeValue.value);
};

function addMain() {
  mainDish.push(recipeValue.value);
};
  
function addDessert() {
  dessert.push(recipeValue.value)
  };


  function addMeal() {
   if (dropdownList.value === 'side1') {
     addSide();
   } else if (dropdownList.value === 'main1') {
     addMain();
   } else if (dropdownList.value === 'dessert1') {
     addDessert();
   } else {
     return;
   }
  };



  // dropdownSide = true;
    // dropdownMain = true; 
    // dropdownDessert = true;