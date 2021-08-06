/* REMEMBER:

replaceLine() replaces an entire line with a new, random sequence from lineXSequences[] - this is intentional.
replaceWord() MUST replace a word with the same type of word as there

*/


const adjectives1 = ["adj2", "cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const adjectives2 = ["adj1", "bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];
const nouns1 = ["n1", "chill", "man", "woman", "child", "girl", "boy", "gust", "hat", "frost", "scarf", "fog", "sled", "mist", "mug", "sled", "snow", "stew"];
const nouns2 = ["n2", "gale", "blanket", "candle", "chimney", "cocoa", "fire", "flakes", "hail", "glove", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];
const verbs1 = ["v1", "walk", "run", "see", "call", "know", "say", "play"]
const verbs2 = ["v2", "freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "renew", "assert", "delay", "abandon"];
const conjunctions1 = ["c1", "and", "but"];
const adverbs2 = ["adv2", "always", "almost", "tightly", "warmly", "weakly", "briefly", "fairly", "dimly", "mostly", "truly"];
const adverbs3 = ["adv3", "lively", "happily", "hastily", "restfully", "busily", "evenly", "playfully", "rarely", "cruelly", "fatally", "lazily", "knowingly"];
const pronouns1 = ["p1", "he", "she", "they", "it"];

//predefined possible sequences of words for each line
//if option 2 or 3 add +ing to verb.. also s to verbs
//easy fix - add seperate lists with conjunctions. Hard fix: inserts sequential conditions
const line1Sequences = [[adjectives2, nouns1, verbs2], [adjectives1, nouns2, verbs2], [verbs2, adjectives1, nouns2], [verbs2, adjectives2, nouns1]];
const line2Sequences = [[adjectives1, conjunctions1, verbs2, adverbs3], [adjectives2, conjunctions1, verbs2, adverbs2], [verbs2, conjunctions1, verbs2, adverbs2], [verbs2, adverbs2, verbs2, adjectives1]];
const line3Sequences = [[pronouns1, verbs1, adverbs3], [adverbs2, verbs2, nouns1], [verbs2, conjunctions1, adverbs2]];

let wordHolder = [[], [], []];
let repickReferences = [[], [], []];

//used to replace a single word
const allWords = [adjectives1, adjectives2, nouns1, nouns2, verbs1, verbs2, conjunctions1, adverbs2, adverbs3, pronouns1];

//can be used both for replacing references and pushing to references initially
//second is optional parameter, if used = will replace with array at given index
const pushToReferences = (array, replaceAtindex) => {
   if (replaceAtindex != undefined){
        repickReferences.splice(replaceAtindex, 1, array);
   } else {
        repickReferences.push(array); 
   } 
}

const getRandomWordFrom = array => {
    let randomIndex = Math.floor(Math.random()*array.length);
    //roll again if random index is 0
    if (randomIndex === 0){
        return getRandomWordFrom(array);
    } else {
        return array[randomIndex]; 
    }
}

//conjugation issue...
const generateLine = lineNumber => {
    //reset of this array in order to update it
    repickReferences[lineNumber] = [];
    let increment = 0;
    //separate for line reroll functionality
    if (lineNumber === 0){
        let randomIndex = Math.floor(Math.random()*line1Sequences.length);
        line1Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[0].push(getRandomWordFrom(nestedArray));
            repickReferences[2].push(nestedArray);
        })
    } else if (lineNumber === 1){
        let randomIndex = Math.floor(Math.random()*line2Sequences.length);
        line2Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[1].push(getRandomWordFrom(nestedArray));
            repickReferences[2].push(nestedArray);
        })
    } else if (lineNumber === 2){
        let randomIndex = Math.floor(Math.random()*line3Sequences.length);
        line3Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[2].push(getRandomWordFrom(nestedArray));
            repickReferences[2].push(nestedArray);
        })
    }
}

//clears content of passed line number from wordHolder and generates a new line 
const replaceLine = lineNumber => {
    wordHolder[lineNumber] = [];
    generateLine(lineNumber);
    document.getElementById("line"+lineNumber.toString()).innerHTML = wordHolder[lineNumber].join(" ");
}
/*
document.addEventListener("DOMContentLoaded", function (event) {
    generateLine(0);
    generateLine(1);
    generateLine(2);
    //needs to be done from words individually somehow
    document.getElementById("line0").innerHTML = wordHolder[0].join(" ");
    document.getElementById("line1").innerHTML = wordHolder[1].join(" ");
    document.getElementById("line2").innerHTML = wordHolder[2].join(" ");
});
*/

const initialize = () => {,
    let increment = 0;
    generateLine(0);
    generateLine(1);
    generateLine(2);
    wordHolder.forEach(array => {
        array.forEach(word => {
            console.log("word" + increment.toString());
            document.getElementById("word" + increment.toString()).innerHTML = wordHolder[increment] + "";
            increment++;
            console.log(increment);
        })
    });
}

const replaceWord = word => {
    
}