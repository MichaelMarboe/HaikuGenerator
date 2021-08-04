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
const twoSyllAdjective = ["bare", "barren", "biting", "bitter", "bleak", "chilling", "clear", "drafty", "foggy", "frigid", "frosty", "frozen", "hazy", "melting", "wet", "white", "windy"];

const oneSyllNoun = ["chill", "gust", "hat", "frost", "scarf", "fog", "sled", "mist", "mug", "sled", "snow", "stew"];
const twoSyllNoun = ["gale", "blanket", "candle", "chimney", "cocoa", "fire", "flakes", "hail", "gloves", "ice", "igloo", "indoors", "jacket", "lodge", "rain", "snowfall", "winter", "season"];

const twoSyllVerb = ["freeze", "glare", "glisten", "jingle", "shiver", "sneeze", "snuggle", "waddle", "dispel", "unfold", "detain", "renew", "assert", "delay"]

const randomWord = list => {
    let randomIndex = Math.floor(Math.random() * list.length);
    let randomWord = list[randomIndex];
    return randomWord;
}

const generateLine = lineNumber => {
    if (lineNumber < 1 || lineNumber > 3) {
        console.log("Please type a valid line number - 1, 2 or 3.");
        return;
    } 
    let holder = [];
    //2A + 1N + 2V OR 1A + 2N + 2V
    //might be better if an s is added. Added as a +s - but might not make sense when line2 is added.
    //-s at random? Makes for more variation. 
    if (lineNumber === 1) {
        let randomOrder = Math.floor(Math.random() * 2);3
        if (randomOrder === 0) {
            holder.push(randomWord(twoSyllAdjective));
            holder.push(randomWord(oneSyllNoun));
            holder.push(randomWord(twoSyllVerb) + "s");
        } else if (randomOrder === 1) {
            holder.push(randomWord(oneSyllAdjective));
            holder.push(randomWord(twoSyllNoun));
            holder.push(randomWord(twoSyllVerb) + "s");
        }
        console.log(holder);
        return holder;
    } else if (lineNumber === 2) {

    } else if (lineNumber === 3) {

    }
}

//later: make so its called from user input and once at pageload of HTML
generateLine(1);

//make later - push from list to innerhtml and call inside roll functions
const pushToDOM = list => {

}