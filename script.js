//could conjugate - ish, y? no general rules...
const adjectives1 = ["cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const adjectives2 = ["bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const nouns1 = ["chill", "man", "woman", "child", "girl", "boy", "gust", "hat", "frost", "scarf", "fog", "sled", "mist", "mug", "sled", "snow", "stew"];
const nouns2 = ["gale", "blanket", "candle", "chimney", "cocoa", "fire", "flakes", "hail", "glove", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];

//!! bug - they add one syllable when made to continuous form. Need to deal with this.
//might need to remove those that +add -ing
//Want to add more/your own? See note about adding verbs in README > EDITING GUIDE > 2 > Verbs.  
const verbs1 = ["walk", "run", "see", "call", "know", "say", "play"]
const verbs2 = ["freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "renew", "assert", "delay", "abandon"];

const conjunctions1 = ["and", "but"]; //for, so removed

const adverbs2 = ["calmly", "always", "almost", "tightly", "warmly", "weakly", "briefly", "fairly", "dimly", "mostly", "truly"];
const adverbs3 = ["lively", "happily", "hastily", "restfully", "busily", "evenly", "playfully", "rarely", "cruelly", "fatally", "lazily", "knowingly"];

const pronouns1 = ["he", "she", "it"]


const randomWord = list => {
    let randomIndex = Math.floor(Math.random() * list.length);
    let randomWord = list[randomIndex];
    return randomWord;
}

//selects a verb at random from a given list and conjugates it to a continuous verb
const randomContinuousVerb = list => {
    let randomIndex = Math.floor(Math.random() * list.length);
    let verb = list[randomIndex];
    let lastLetter = verb[verb.length - 1];
    if (lastLetter === "e") {
        conjugatedVerb = verb.slice(0, -1) + "ing";
        return conjugatedVerb;
    } else {
        conjugatedVerb = verb + "ing";
        return conjugatedVerb;
    }
}

const generateLine1 = () => {
    let holder = [];
    let randomOrder = Math.floor(Math.random() * 5);
    if (randomOrder === 0) {
        holder.push(randomWord(adjectives2));
        holder.push(randomWord(nouns1));
        holder.push(randomWord(verbs2) + "s");
    } else if (randomOrder === 1) {
        holder.push(randomWord(adjectives1));
        holder.push(randomWord(nouns2));
        holder.push(randomWord(verbs2) + "s");
    } else if (randomOrder === 2) {
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adjectives1));
        holder.push(randomWord(nouns2));
    } else if (randomOrder === 3) {
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adjectives2));
        holder.push(randomWord(nouns1));
    } else if (randomOrder === 4) {
        //line 1 and 3 are interchangeable
        return generateLine3();
    }
    console.log(holder);
    return holder;
}

const generateLine2 = () => {
    let holder = [];
    let randomOrder = Math.floor(Math.random() * 4);
    if (randomOrder === 0) {
        holder.push(randomWord(adjectives1));
        holder.push(randomWord(conjunctions1));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs3));
    }
    if (randomOrder === 1) {
        holder.push(randomWord(adjectives2));
        holder.push(randomWord(conjunctions1));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs2));
    }
    if (randomOrder === 2) {
        holder.push(randomWord(verbs2) + "s");
        holder.push(randomWord(conjunctions1));
        holder.push(randomWord(verbs2) + "s");
        holder.push(randomWord(adverbs2));
    }
    if (randomOrder === 3) {
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs2));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adjectives1));
    }
    console.log(holder);
    return holder;
}

const generateLine3 = () => {
    holder = [];
    let randomOrder = Math.floor(Math.random() * 4);
    console.log("line3 randomorder is " + randomOrder)
    if (randomOrder === 0) {
        holder.push(randomWord(pronouns1));
        holder.push(randomWord(verbs1) + "s");
        holder.push(randomWord(adverbs3));
    } else if (randomOrder === 1) {
        holder.push(randomWord(adverbs2));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(nouns1));
    } else if (randomOrder === 2) {
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(conjunctions1));
        holder.push(randomWord(adverbs2));
    } else if (randomOrder === 3) {
        return generateLine1();
    }
    console.log(holder);
    return holder;
}

//later: make so its called from user input and once at pageload of HTML
let line1 = generateLine1();
let line2 = generateLine2();
let line3 = generateLine3();

//make later - push from list to innerhtml and call inside roll functions

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("line1").innerHTML = line1.join(" ");
    document.getElementById("line2").innerHTML = line2.join(" ");
    document.getElementById("line3").innerHTML = line3.join(" ");
});

const rerollLine = lineNumber => {
    if (lineNumber === 1){
        line1 = generateLine1();
        document.getElementById("line1").innerHTML = line1.join(" ");
    } else if (lineNumber === 2){
        line2 = generateLine2();
        document.getElementById("line2").innerHTML = line2.join(" ");
    } else if(lineNumber === 3){
        line3 = generateLine3();
        document.getElementById("line3").innerHTML = line3.join(" ");
    }
}

/*
const initialize = () => {
    let wordIncrement = 0;
    let arrayIncrement = 0;
    generateLine(0);
    generateLine(1);
    generateLine(2);
    wordHolder.forEach(array => {
        array.forEach(word => {
            console.log(word);
            document.getElementById("word" + wordIncrement.toString()).innerHTML = array[arrayIncrement] + "";
            wordIncrement++;
            arrayIncrement++;
            if (arrayIncrement === array.length){
                arrayIncrement = 0;
            }
        })
    });
}
*/