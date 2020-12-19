//Targets here---------------------------->
var sideRadioButton = document.querySelector('.side-dish');
var mainDishRadioButton = document.querySelector('.main-dish');
var dessertRadioButton = document.querySelector('.dessert-dish');
var entireMealRadioButton = document.querySelector('.entire-meal');
// var clearButton = document.querySelector('.clear-button');
var clearButton = document.querySelector('.clear-button');
// var errorButton = document.querySelector('.error');

var rightBoxContent = document.querySelector('.right-box-content');

var letsCookButton = document.querySelector('.left-box-button');


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
// var entireMeal = [];


//Event Listeners here---------------------------->
letsCookButton.addEventListener('click', showMyMeal);
clearButton.addEventListener('click', clearAll);
// errorButton.addEventListener('click', showErrorMessage)


//Functions here---------------------------->
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};


function showMyMeal() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)];
  var randomDessert = dessert[getRandomIndex(dessert)];
  // var entireMeal = randomSide + randomMainDish + randomDessert;

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
  rightBoxContent.innerHTML = `
    <section class="right-box-content">
      <img id="right-img" src="./assets/cookpot.svg">
    </section>`
    console.log('test'); 
};

function showClearButton() {
  clearButton.classList.remove('hidden');
};

function showErrorMessage() {
  if (sideRadioButton.checked === false && mainDishRadioButton.checked === false && dessertRadioButton.checked === false) {
    rightBoxContent.innerHTML = `
    <p>Need to select an option first</p>`
  }
};
