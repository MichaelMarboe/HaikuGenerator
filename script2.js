/* worK:
2. auto initialize?
3. beautify; fix button positions, fix typography, colors, background image etc.
4. fix wordlists, ie. conjugated words must be added and place in linesequences.
//change name of generatePoem button after first roll to > reroll
*/

/*
These arrays hold all words that can be selected from. More words can be added easily.
New word classes and conjugations can also be added easily - but, if new arrays (of word types/conjugations) are added, add the mew array(s) to allWords[] as well.
NOTE: Numbers behind array names indicate syllable count in the words. Since Haiku is 5-7-5 syllables, it's important to separate them. 
*/
//fix syllables
const adjectives1 = ["cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const adjectives2 = ["bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const nouns1 = ["chill", "man", "child", "girl", "boy", "gust", "hat", "frost", "scarf", "fog", "mist", "mug", "sled", "snow", "stew"];
const nouns2 = ["woman", "gale", "blanket", "candle", "chimney", "cocoa", "fire", "flake", "hail", "glove", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];

const pluralNouns1 = ["chills", "men", "children", "girls", "boys", "gusts", "hats", "scarfs", "mugs", "sleds", "snow", "stews"];
const pluralNouns2 = ["children", "women", "gales", "blankets", "candles", "chimneys", "cocoas", "fires", "flakes", "igloos", "jackets", "lodges", "winters", "seasons"];

const verbs1 = ["walk", "run", "see", "call", "know", "say", "play"]
const verbs2 = ["freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "renew", "assert", "delay", "abandon"];

const continuousVerbs1 = ["walking", "running", "seeing", "calling", "knowing", "saying", "playing"];
const continuousVerbs2 = ["freezing", "glaring", "jingling", "sneezing", "snuggling", "waddling", "dying", "living", "rotting", "melting", "sitting", "howling", "loving"];

const singularVerbs1 = ["walks", "runs", "sees", "calls", "knows", "says", "plays"]
const singularVerbs2 = ["freezes", "glares", "glistens", "jingles", "shivers", "sneezes", "snuggles", "waddles", "unfolds", "renews", "asserts", "delays", "abandons"];

const conjunctions1 = ["and", "but"];

const adverbs2 = ["always", "almost", "tightly", "warmly", "weakly", "briefly", "fairly", "dimly", "mostly", "truly"];
const adverbs3 = ["lively", "happily", "hastily", "restfully", "busily", "evenly", "playfully", "rarely", "cruelly", "fatally", "lazily", "knowingly"];

const pronouns1 = ["he", "she", "they", "it"];

/*
Sequences of words can be added here. Possible sequences are predefined, NOT random.  
These are all syntactically correct, but there's room for more. Note that sentences may still be nonsensical albeit syntactically possible. That's poetry!
*/
const line1Sequences = [
    [adjectives2, nouns1, continuousVerbs2], 
    [adjectives2, pluralNouns1, continuousVerbs2], 
    [adjectives1, nouns2, continuousVerbs2], 
    [adjectives1, pluralNouns2, continuousVerbs2], 
    [continuousVerbs2, adjectives1, nouns2], 
    [continuousVerbs2, adjectives2, nouns1]
];

const line2Sequences = [
    [adjectives1, conjunctions1, verbs2, adverbs3], 
    [adjectives2, conjunctions1, verbs2, adverbs2], 
    [continuousVerbs2, conjunctions1, continuousVerbs2, adverbs2], 
    [verbs2, adverbs2, verbs2, adjectives1]];

const line3Sequences = [
    [pronouns1, verbs1, adverbs3], 
    [adverbs2, verbs2, nouns1], 
    [verbs2, conjunctions1, adverbs2]
];

/* 
Used to hold sequences when an entire line of words is pushed to the DOM.
Do not edit array structure manually.
*/
const wordHolder = [[], [], []];

/*
Necessary for search function that replaces a single word with a word from the origin array.
See function: replaceWord(wordNumber) 
*/
const allWords = [adjectives1, adjectives2, nouns1, nouns2, verbs1, verbs2, conjunctions1, adverbs2, adverbs3, 
    pronouns1, continuousVerbs2, continuousVerbs1, singularVerbs1, singularVerbs2, pluralNouns1, pluralNouns2];

/*
Returns a random word from a passed array.
*/
const getRandomWordFrom = array => {
    let randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex]; 
}

/*
Generates and replaces an entire line of words based on predefined word sequences in lineSequences[].
*/  
const generateLine = lineNumber => {
    //Reset the array within wordHolder[] that holds the given line.
    wordHolder[lineNumber] = [];
    if (lineNumber === 0){
        clearLineDOM(0);
        let randomIndex = Math.floor(Math.random()*line1Sequences.length);
        line1Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[0].push(getRandomWordFrom(nestedArray));
        })
        pushLineToDOM(0);
    } else if (lineNumber === 1){
        clearLineDOM(1);
        let randomIndex = Math.floor(Math.random()*line2Sequences.length);
        line2Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[1].push(getRandomWordFrom(nestedArray));
        })
        pushLineToDOM(1);
    } else if (lineNumber === 2){
        clearLineDOM(2);
        let randomIndex = Math.floor(Math.random()*line3Sequences.length);
        line3Sequences[randomIndex].forEach(nestedArray => {
            wordHolder[2].push(getRandomWordFrom(nestedArray));
        })
        pushLineToDOM(2);
    }
}

/*
1. Search through allWords[...] to find the array that holds the word (from the innerHTML) on the passed line. 
2. When a match is found in an array, replace with a word from this array and stop. 
*/
const replaceWord = (wordNumber) => {
    let wordString = document.getElementById("word"+wordNumber.toString()).innerHTML;
    allWords.forEach(array => {
        if (array.indexOf(wordString) != -1){
            wordString = getRandomWordFrom(array);
            document.getElementById("word" + wordNumber.toString()).innerHTML = getRandomWordFrom(array);
            return;
        }
    });
}

// --- DOM FUNCTIONS --- 

const clearLineDOM = lineNumber => {
    let line = document.getElementsByClassName("line" + lineNumber.toString());
    for (let i = 0; i < line.length; i++){
        //Blank space check - can't check against "undefined" so all <p> start with a space in DOM.
        if (line[i].innerHTML === " "){
            return;
        } else {
            line[i].innerHTML = "";
        }
    }
}

const pushLineToDOM = lineNumber => {
    let line = document.getElementsByClassName("line" + lineNumber.toString());
    for (let i = 0; i < line.length; i++) {
        if (wordHolder[lineNumber].length === i){
            return;
        }
        line[i].innerHTML = wordHolder[lineNumber][i]; 
    }
}

/*
Doubles as an initializer and as total reroll button. 
Clears all lines and rerolls sequences and words.  
*/
let firstRoll = false;
const rollAllLines = () => {
    if (firstRoll === false){
        firstRoll = true;
        document.getElementById("reroll").innerHTML = "Reroll all lines";
        let rerollButtons = document.getElementsByClassName("rerollLine");
        for (let i = 0; i < rerollButtons.length; i++){
            rerollButtons[i].classList.remove("hidden");    
        }
    }
    generateLine(0);
    generateLine(1);
    generateLine(2);
};
