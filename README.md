# Winter Haiku Generator

The Winter Haiku Generator generates a random haiku poem with correct language syntax, adhering to the very simple rules of the Japanese haiku poem. [You can demo it here (not optimized for mobile/very small screens).](https://michaelmarboe.github.io/HaikuGenerator/)

## The haiku
The haiku is a 3 line poem. They are best known for their strict structure and their ability to paint vivid pictures with very few words. The 1st and 3rd has exactly 5 syllables of words, and the 2nd line has exactly 7 syllables of words.

## Aim
Generating syntactically correct sentences randomly is far more difficult than it seems - language is messy, exceptions to grammatical rules are plentiful and coding these rules is quite challenging. The general aim was to invent a way to do it reliably and in such a way that new words and themes could easily be added. 

## Theme(s)
The winter theme was adopted to decrease the scope of the project, but if new words are added to the possible selection, many other themes could be created. Additional words could easily be added as well, simply by typing them into the literal arrays in script.js.

## Features
Available features:

  1. Function to reroll every line of the poem - see rollAllLines() in script.js
  2. Function to reroll a single line of the poem (which will also reroll syntactical structure) - see generateLine() in script.js
  3. Function to reroll a single word (which will **not** reroll syntactical structure) - see replaceWord() in script.js
  4. Functions for DOM manipulation are also available - see clearLineDOM(), pushLineToDOM() in script.js

## Possible additional features

These features would be cool to have and I plan to develop them if I ever have the time again:

  1. Theme selector: Function to select another theme of words than winter. New word lists would be needed but many could be recycled. 
  2. Automatic conjugation: Right now, conjugated forms of verbs are kept as separate word lists, but functions could be written. But, it will be challenging and some words might have to be excluded. 
  3. Optional syntax selection: A feature to allow users to pass sequences of sentence syntax to the program, for example "Generate a sentence that has 1 verb, 2 adverbs and... in this order...". 

## Limitations & Challenges: 

  1. The generator does not concern with whether or not the generated senses are non-sensical or not. It aims to handle sentence syntax, not sense. This is both to   reduce scope but also intentional - after all, it's poetry. :-)
  2. Currently, the generation of lines is limited by predefined syntax that has to be typed in manually in the code. This could be automated or at least made         simpler. 
  3. Syllables in words need to be counted before words are added to the arrays. This is quite a chore and there's a lot of room for error. 

## Code information

**The HTML - important:** The code relies on specific classes and ID's that are defined in the HTML. Be careful if you edit this document. In short, each word of the poems are different paragraphs and every line of the poem is its own div. They each carry IDs and classes that enable the script to single out individual words and individual sentences.

**Word arrays:** The code consists of a long list of arrays that contain different types of words with separate lists for conjungations of the same words. New words can be added as strings to these arrays freely. The number at the end of each array name indicate syllable count.

**Sequence arrays:** The sequence arrays (for example, const line1Sequences = []) contain sequences of words as arrays. Each index holds a possible sequence of words as nested arrays of words that are later used to produce sentences with correct syntax. More sequences can be added here. The order in which they appear here is the order in which they will appear in the DOM.

**Search array:** The search array contains **every** word list. It is used for replacing individual words - see **Word replacer** below.

**Line generator (generateLine(lineNumber)):** This functions is key. It takes a parameter of line number (0, 1 or 2). Then, it picks a random word sequence from the corresponding sequence arrays (line1sequences[], for example). From each nested array within the sequence array, it picks a random word and pushes the results in the correct order to the DOM.

**Word replacer:** The word replacer (replaceWord(wordNumber)) replaces a single word on user mouse click input. It relies on the search array allWords[]. It takes a word as number parameter (for example 0, 3 or 7), pulls the word from the DOM as a string and searches the allWords[] array for this specific word. When the word is found, the word is replaced by a word from the same array (meaning the same type of word, for example a noun with 2 syllables). This way, the syntax of the sentence won't be altered and this function does not need any information about what words the line generator picked. If an identical word is selected at random, the function recurses.

The rest of the functions should be self-explanatory and are mostly helper functions that provide DOM functionality.  

**Note:** The code must be run in a browser since it refers to the HTML object document - most terminals will produce an error message if you attempt to run ("missing object" or the like). 
 
## Closing

Hope you enjoy the haiku generator! If you want to contact me about it, drop me a line.
