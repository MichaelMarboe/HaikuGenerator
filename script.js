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

/*

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
        holder.push(continuousVerb(twoSyllVerb));
        holder.push(randomWord(oneSyllAdjective));
        holder.push(randomWord(twoSyllNoun));
    } else if (randomOrder === 3) {
        holder.push(continuousVerb(twoSyllVerb));
        holder.push(randomWord(twoSyllAdjective));
        holder.push(randomWord(oneSyllNoun));
    }
    console.log(holder);
    return holder;
}

//selects a verb at random from a given list and conjugates it to a continuous verb
const continuousVerb = list => {
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

