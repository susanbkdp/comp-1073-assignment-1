// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.getElementById("noun1");
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");
const noun2 = document.getElementById("noun2");
const setting = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playback = document.getElementById("playback");
const random = document.getElementById("random");
const story = document.getElementById("story");

// Variables for pre-defined arrays
var arrayNoun1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat", "Person with Id 1179966"];
var arrayVerb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var arrayAdjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var arrayNoun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var arraySetting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements

var noun1Item = randomValueFromArray(arrayNoun1);
var verbItem = randomValueFromArray(arrayVerb);
var adjectiveItem = randomValueFromArray(arrayAdjective);
var noun2Item = randomValueFromArray(arrayNoun2);
var settingItem = randomValueFromArray(arraySetting);


function randomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Functions
-------------------------------------------------- */

function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Item = randomValueFromArray(arrayNoun1);
    choosenNoun1.textContent = noun1Item;
    // if-else to change count setting
    // increment the counter and check if it exceeds the array length
    if (noun1Count ++ >= arrayNoun1.length) {
        // reset the counter if it exceeds the array length
        noun1Count = 0;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    verbItem = randomValueFromArray(arrayVerb);
    choosenVerb.textContent = verbItem;
    // if-else to change count setting
    // increment the counter and check if it exceeds the array length
    if (verbCount ++ >= arrayVerb.length) {
        // reset the counter if it exceeds the array length
        verbCount = 0;
    }
    
}

function adjective_on_click() {
    // variable to get array element and displaying it
    adjectiveItem = randomValueFromArray(arrayAdjective);
    choosenAdjective.textContent = adjectiveItem;
    // increment the counter and check if it exceeds the array length
    if (adjectiveCount ++ >= arrayAdjective.length) {
        // reset the counter if it exceeds the array length
        adjectiveCount = 0;
    }
    
}

function noun2_on_click() {
    // variable to get array element and displaying it
    noun2Item = randomValueFromArray(arrayNoun2);
    choosenNoun2.textContent = noun2Item;
    // increment the counter and check if it exceeds the array length
    if (noun2Count ++ >= arrayNoun2.length) {
        // reset the counter if it exceeds the array length
        noun2Count = 0;
    }
    
}

function setting_on_click() {
    // variable to get array element and displaying it
    settingItem = randomValueFromArray(arraySetting);
    choosenSetting.textContent = settingItem;
    // increment the counter and check if it exceeds the array length
    if (settingCount ++ >= arraySetting.length) {
        // reset the counter if it exceeds the array length
        settingCount = 0;
    }

    
}

// concatenate the user story and display
function playback_on_click() {
    var userStory = choosenNoun1.textContent + " " + choosenVerb.textContent + " " + choosenAdjective.textContent + " " + choosenNoun2.textContent + " " + choosenSetting.textContent + ".";

    // display the story
    story.textContent = userStory;
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1Item = randomValueFromArray(arrayNoun1);
    verbItem = randomValueFromArray(arrayVerb);
    adjectiveItem = randomValueFromArray(arrayAdjective);
    noun2Item = randomValueFromArray(arrayNoun2);
    settingItem = randomValueFromArray(arraySetting);

    var randomStory = noun1Item + " " + verbItem + " " + adjectiveItem + " " + noun2Item + " " + settingItem + ".";

    // display the story
    story.textContent = randomStory;
}



/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);