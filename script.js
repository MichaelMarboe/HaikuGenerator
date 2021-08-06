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

const oneSyllAdjective = ["cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const twoSyllAdjective = ["bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const oneSyllNoun = ["chill", "man", "woman", "child", "girl", "boy", "gust", "hat", "frost", "scarf", "fog", "sled", "mist", "mug", "sled", "snow", "stew"];
const twoSyllNoun = ["gale", "blanket", "candle", "chimney", "cocoa", "fire", "flakes", "hail", "gloves", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];

//Want to add more/your own? See note about adding verbs in README > EDITING GUIDE > 2 > Verbs.  
const twoSyllVerb = ["freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "detain", "renew", "assert", "delay", "abandon"]

const randomWord = list => {
    let randomIndex = Math.floor(Math.random() * list.length);
    let randomWord = list[randomIndex];
    return randomWord;
}

const generateLine1 = () => {
    let holder = [];
    //2A + 1N + 2V OR 1A + 2N + 2V
    let randomOrder = Math.floor(Math.random() * 4);
    if (randomOrder === 0) {
        holder.push(randomWord(twoSyllAdjective));
        holder.push(randomWord(oneSyllNoun));
        holder.push(randomWord(twoSyllVerb) + "s");
    } else if (randomOrder === 1) {
        holder.push(randomWord(oneSyllAdjective));
        holder.push(randomWord(twoSyllNoun));
        holder.push(randomWord(twoSyllVerb) + "s");
    } else if (randomOrder === 2) {
        holder.push(randomContinuousVerb(twoSyllVerb));
        holder.push(randomWord(oneSyllAdjective));
        holder.push(randomWord(twoSyllNoun));
    } else if (randomOrder === 3) {
        holder.push(randomContinuousVerb(twoSyllVerb));
        holder.push(randomWord(twoSyllAdjective));
        holder.push(randomWord(oneSyllNoun));
    }
    console.log(holder);
    return holder;
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

//later: make so its called from user input and once at pageload of HTML
generateLine1();

//make later - push from list to innerhtml and call inside roll functions
const pushToDOM = list => {

}
/*
const A1 = [1, "cold", "crisp", "dark", "gray", "harsh", "long", "numb", "wet"];
const A2 = [2, "bare", "barren", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const V1 = [1, "run", "walk", "go", "end", "talk", "chat", "sing", "yell", "wish", "act"];
const V2 = [2, "freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "unfold", "detain", "renew", "assert", "delay", "abandon"];

const allWords = [A1, A2, V1, V2];

//returns a list with [syllablecount as int, word]
const randomWord = list => {
    function selectWord() {
        let randomIndex = Math.floor(Math.random() * list.length);
        //recurse if index is 0 
        if (randomIndex === 0){
            return selectWord();
        } else {
            return list[randomIndex];
        } 
    }
    let holder = [list[0], selectWord()];
    console.log(holder);
    return holder;
}

//helper function
const randomGlobalList = () => {
    return Math.floor(Math.random() * allWords.length);
}

const generateLine = syllableCount => {
    if (syllableCount !== 7){
        console.log("Error - param syllableCount must be 5 or 7");
        return;
    }
    let holder = [];
    if (syllableCount === 7){
        for (let i = syllableCount; i > 0; i--){
            //push one random word from random list within allWords 
            holder.push(randomWord(allWords[randomGlobalList()]));
        }
        console.log(holder);
    }
}

generateLine(7);
*/