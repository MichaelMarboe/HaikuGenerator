/*
Work list:
!!!
1 figure out linguistic structure for line 2 and 3
2 create real word lists
3 () for line2 and line3 OR one function for all with parameters (see comment in function line1)
4 HTML - set up HTML for clickable wor ds and buttons for line rerolls to enable single word and entire line rerolls
5 add function rerollLine(lineNumber) to reroll an entire line (just use functions in 3) (might be a redundant function)
6 add function rerollWord() to reroll a single word.  
7 CSS - bit of styling and fade animations, fonts, scaling etc.
*/

//could conjugate - ish, y? no general rules...
const adjectives1 = ["cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const adjectives2 = ["bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const nouns1 = ["chill", "man", "woman", "child", "girl", "boy", "gust", "hat", "frost", "scarf", "fog", "sled", "mist", "mug", "sled", "snow", "stew"];
const nouns2 = ["gale", "blanket", "candle", "chimney", "cocoa", "fire", "flakes", "hail", "glove", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];

//!! bug - they add one syllable when made to continuous form. Need to deal with this.
//might need to remove those that +add -ing
//Want to add more/your own? See note about adding verbs in README > EDITING GUIDE > 2 > Verbs.  
const verbs1 = ["walk", "run", "see", "call", "know", "say", "play"]
const verbs2 = ["freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "detain", "renew", "assert", "delay", "abandon"];

const conjunctions1 = ["and", "but"]; //for, so removed

const adverbs2 = ["calmly", "always", "almost", "tightly", "warmly", "weakly", "briefly", "fairly", "dimly", "mostly", "truly"];
const adverbs3 = ["lively", "happily", "hastily", "restfully", "busily", "evenly", "playfully", "rarely", "cruelly", "fatally", "lazily", "knowingly"];

const pronouns1 = ["he", "she"]


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
    //2A + 1N + 2V OR 1A + 2N + 2V
    let randomOrder = Math.floor(Math.random() * 4);
    console.log("random id is " + randomOrder);
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
    }
    console.log(holder);
    return holder;
}

const generateLine2 = () => {
    let holder = [];
    let randomOrder = Math.floor(Math.random() * 4);
    if (randomOrder === 0){
        holder.push(randomWord(adjectives1));
        holder.push(randomWord(conjunctions1));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs3));
    }
    if (randomOrder === 1){
        holder.push(randomWord(adjectives2));
        holder.push(randomWord(conjunctions1));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs2));
    }
    if (randomOrder === 2){
        holder.push(randomWord(verbs2) + "s");
        holder.push(randomWord(conjunctions1));
        holder.push(randomContinuousVerb(verbs2));
        holder.push(randomWord(adverbs2));
    }
    if (randomOrder === 3){
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
    if (randomOrder === 0){
        holder.push(randomWord(pronouns1));
        holder.push(randomWord(verbs1) + "s");
        holder.push(randomWord(adverbs3));   
    }
    console.log(holder);
    return holder;
}




//later: make so its called from user input and once at pageload of HTML
generateLine1();
generateLine2();
generateLine3();

//make later - push from list to innerhtml and call inside roll functions
const pushToDOM = list => {

}