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