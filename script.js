/*
Work list:

1 figure out linguistic structure for line 2 and 3
2 create real word lists
3 () for line2 and line3 OR one function for all with parameters (see comment in function line1)
4 HTML - set up HTML for clickable words and buttons for line rerolls to enable single word and entire line rerolls
5 add function rerollLine(lineNumber) to reroll an entire line (just use functions in 3) (might be a redundant function)
6 add function rerollWord() to reroll a single word.  
7 CSS - bit of styling and fade animations, fonts, scaling etc.
*/

//might be easier to work with lists in lists - ie verb list with 1 list per syllabe count
const wordList1 = ["lol", "whatever", "hi", "fun", "mate", "second", "chair", "yolanda", "mountain", "eternal"];
const wordList2 = ["chition", "clam", "clown", "fish", "cod", "coelacanth", "conch", "copepod", "coral", "crab", "current", "scuttlefish"];
const wordList3 = ["beat", "beautiful", "because", "become", "before", "begin", "behavior", "behind", "believe", "benefit", "billion"];

const randomWord = list => {
    let randomIndex = Math.floor(Math.random()*list.length);
    let randomWord = list[randomIndex];
    return randomWord;
}

//later: should probably be renamed to "rollLine" + add parameters wordAmount and lineNumber (1-3) + then it could be one function instead of 3. 
const rollLineOne = () => {
    //two options for word order in line 1
    let orderRandomizer = Math.floor(Math.random()*2);
    let holder = [];
    //(if line 1 follow this logic), add logic for line 2 and 3
    if (orderRandomizer === 0){
        holder.push(randomWord(wordList1));
        holder.push(randomWord(wordList2));
        holder.push(randomWord(wordList3));
        console.log(holder);
        return holder;
    } else if (orderRandomizer === 1){
        holder.push(randomWord(wordList3));
        holder.push(randomWord(wordList2));
        holder.push(randomWord(wordList1));
        console.log(holder);
        return holder;
    }
}

//later: make so its called from user input and once at pageload of HTML
rollLineOne();

//make later - push from list to innerhtml and call inside roll functions
const pushToDOM = list => {

}