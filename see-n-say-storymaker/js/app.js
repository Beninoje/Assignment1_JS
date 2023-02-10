// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// Declaring the arrays for each word section (noun, adjective, and verb)

var noun1Array = [
  " The monkey",
  " The cat",
  " The dog",
  " Mom",
  " Dad",
  " The kangaroo",
  " The rat",
];

var verbArray = [
  " painted",
  " drew",
  " ran",
  " welcomed",
  " ate",
  " slapped",
  " swam",
];

var adjectiveArray = [
  " a fat",
  " a small",
  " a fast",
  " an intelligent",
  " a dumb",
  " a curious",
  " a slow",
];

var noun2Array = [
  " banana",
  " orangutang",
  " pineapple",
  " giraffe",
  " rhino",
  " duck",
  " butterfly",
];

var noun3Array = [
  " in Italy",
  " on a chair",
  " in Romania",
  " in India",
  " on a couch",
  " on a TV",
  " in the pool",
];

// Retrieving elements and storing them in vars

var speakButton = document.querySelector(".btn").disabled = false;
var speakBtn = document.getElementById("speak-btn");
var noun1 = document.getElementById("noun1");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");
var noun2 = document.getElementById("noun2");
var noun3 = document.getElementById("noun3");

var noun1Container = document.querySelector(".noun1-container");
const noun1Options = document.querySelector(".noun1-options");
const verbOptions = document.querySelector(".verb-options");
const adjectiveOptions = document.querySelector(".adjective-options");
const noun2Options = document.querySelector(".noun2-options");
const noun3Options = document.querySelector(".noun3-options");
const storyText = document.querySelector(".storyText");

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}
/* New Way
--------------------------------------------------------*/

/* Noun1 Section
--------------------------------------------------------*/
//Loops through the array and graps each item in the array and adds them to the container
for (let i = 0; i < noun1Array.length; i++) {
  noun1Options.innerHTML += "<p>" + noun1Array[i] + "</p>";
}
noun1.onclick = function () {
  //Randomly select the a number between 1-7 and corrilate it to the array that contains the noun
  let i = Math.floor(Math.random() * (6 - 1) + 1);
  speakNow(noun1Array[i]);
  noun1.disabled = true;
  noun1.style.color = "#f4f4f4";
  story.textContent += noun1Array[i];
  generate.style.color = "#f4f4f4";
  generate.disabled = true;
};
/* Verb Section
--------------------------------------------------------*/
for (let i = 0; i < verbArray.length; i++) {
  verbOptions.innerHTML += "<p>" + verbArray[i] + "</p>";
}
verb.onclick = function () {
  //Randomly select the a number between 1-7 and corrilate it to the array that contains the noun
  if (noun1.disabled === true) {
	//checking if the previous buttons are disabled
    let i = Math.floor(Math.random() * (6 - 1) + 1);
    speakNow(verbArray[i]);
    verb.disabled = true;
    verb.style.color = "#f4f4f4";
    story.textContent += verbArray[i];
    generate.style.color = "#f4f4f4";
    generate.disabled = true;
  }
};

/* Adjective Section
--------------------------------------------------------*/
for (let i = 0; i < adjectiveArray.length; i++) {
  adjectiveOptions.innerHTML += "<p>" + adjectiveArray[i] + "</p>";
}
adjective.onclick = function () {
  if (noun1.disabled === true && verb.disabled === true) {
    let i = Math.floor(Math.random() * (6 - 1) + 1);
    adjectiveArray[i];
    speakNow(adjectiveArray[i]);
    adjective.disabled = true;
    adjective.style.color = "#f4f4f4";
    story.textContent += adjectiveArray[i];
    generate.style.color = "#f4f4f4";
    generate.disabled = true;
  }
};
/* Noun2 Section
--------------------------------------------------------*/
for (let i = 0; i < noun2Array.length; i++) {
  noun2Options.innerHTML += "<p>" + noun2Array[i] + "</p>";
}
noun2.onclick = function () {
  if (
    noun1.disabled === true &&
    verb.disabled === true &&
    adjective.disabled === true
  ) {
    let i = Math.floor(Math.random() * (6 - 1) + 1);
    noun2Array[i];
    speakNow(noun2Array[i]);
    noun2.disabled = true;
    noun2.style.color = "#f4f4f4";
    story.textContent += noun2Array[i];
    generate.style.color = "#f4f4f4";
    generate.disabled = true;
  }
};
/* Noun3 Section
--------------------------------------------------------*/
for (let i = 0; i < noun3Array.length; i++) {
  noun3Options.innerHTML += "<p>" + noun3Array[i] + "</p>";
}

noun3.onclick = function () {
  if (
    noun1.disabled === true &&
    verb.disabled === true &&
    adjective.disabled === true &&
    noun2.disabled === true
  ) {
    let i = Math.floor(Math.random() * (6 - 1) + 1);
    noun3Array[i];
    speakNow(noun3Array[i]);
    noun3.disabled = true;
    noun3.style.color = "#f4f4f4";
    story.textContent += noun3Array[i];
    generate.style.color = "#f4f4f4";
  }
};

/* Event Listeners
-------------------------------------------------- */

const story = document.querySelector(".story");
const readStory = document.querySelector("#readStory");
readStory.onclick = function () {
  speakNow(story.textContent);
};

var generate = document.querySelector("#generate");
generate.onclick = function () {
  let a = Math.floor(Math.random() * (6 - 1) + 1);
  let b = Math.floor(Math.random() * (6 - 1) + 1);
  let c = Math.floor(Math.random() * (6 - 1) + 1);
  let d = Math.floor(Math.random() * (6 - 1) + 1);
  let e = Math.floor(Math.random() * (6 - 1) + 1);
  story.textContent += noun1Array[a];
  story.textContent += verbArray[b];
  story.textContent += adjectiveArray[c];
  story.textContent += noun2Array[d];
  story.textContent += noun3Array[e];
  speakNow(story.textContent);
  generate.disabled = true;
  noun1.disabled = true;
  verb.disabled = true;
  adjective.disabled = true;
  noun2.disabled = true;
  noun3.disabled = true;
  generate.style.color = "#f4f4f4";
  noun1.style.color = "#f4f4f4";
  noun2.style.color = "#f4f4f4";
  adjective.style.color = "#f4f4f4";
  verb.style.color = "#f4f4f4";
  noun3.style.color = "#f4f4f4";
};
// When the 'reset' button is clicked, the entire application resets by way of the webpage reloading into a new session
var reset = document.querySelector("#reset");
reset.onclick = function () {
  location.reload();
};
