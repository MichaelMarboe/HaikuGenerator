const wordList1 = ["lol", "whatever", "hi", "fun", "mate", "second", "chair", "yolanda", "mountain", "eternal"]
const wordList2 = ["chition", "clam", "clown", "fish", "cod", "coelacanth", "conch", "copepod", "coral", "crab", "current", "scuttlefish"];

const randomWord = list => {
    let randomIndex = Math.floor(Math.random()*list.length);
    let randomWord = list[randomIndex];
    return randomWord;
}
