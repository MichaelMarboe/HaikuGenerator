# Winter Haiku Generator

The Winter Haiku Generator generates a random haiku poem with correct language syntax, adhering to the very simple rules of the Japanese haiku poem.

## The haiku
The haiku is a 3 line poem - no longer, no shorter. They are best known for their strict structure and their ability to paint vivid pictures with very few words. The 1st and 3rd has exactly 5 syllables of words, and the 2nd line has exactly 7 syllables of words.

## Why
I wrote it because I also do creative writing and I thought it'd be useful to have a generator that might be able to inspire novel and creative new ways to combine different types of words. In a way, the generator was conceived as a way to combat writer's block.

## Aim
Generating syntactically correct sentences randomly is far more difficult than it seems - language is messy, exceptions to grammatical rules are plentiful and coding these rules are quite challenging. The general aim was to invent a way to do it reliably and in such a way that new words and themes could easily be added. 

## Theme(s)
The winter theme was adopted to decrease the scope of the project, but if new words are added to the possible selection, many other themes could be created. Additional words could easily be added as well, simply by typing them into the literal arrays in script.js.

## Features
A range of features are available. 

  1. Function to reroll every line of the poem - see rollAllLines() in script.js
  2. Function to reroll a single line of the poem (which will also reroll syntactical structure) - see generateLine() in script.js
  3. Function to reroll a single word (which will **not** reroll syntactical structure) - see replaceLine() in script.js
  4. Functions for DOM manipulation are also available - see clearLineDOM(), pushLineToDOM() in script.js

## Possible additional features

These features would be cool to have and I plan to develop them if I ever have the time again.

  **1.Theme selector:** Function to select another theme of words than winter. New word lists would be needed but many could be recycled. 
  **2. Automatic conjugation:** Right now, conjugated forms of verbs are kept as separate word lists, but functions could be written. But, it will be challenging and some words might have to be excluded. 
  **3. Optional syntax selection:** A feature to allow users to pass sequences of sentence syntax to the program, for example "Generate a sentence that has 1 verb, 2 adverbs and... in this order...". 

## Limitations & Challenges: 

A range of limitations and challenges still exist. 

  1. The generator does not concern with whether or not the generated senses are non-sensical or not. It aims to handle sentence syntax, not sense. This is both to   reduce scope but also intentional - after all, it's poetry. :-)
  2. Currently, the generation of lines is limited by predefined syntax that has to be typed in manually in the code. This could be automated or at least made         simpler. 
  3. Syllables in words need to be counted before words are added to the arrays. This is quite a chore and there's a lot of room for error. 

## Code information

The code consists of a long list of arrays that contain different types of words with seperate lists for conjunctions.

CHALLENGES: 

Grammatical accuracy
Grammatical structure can't be completely accurate - it would make the project huge in scope, and each word would need a lot of additional information applied and many words would need extremely specific (and in some cases even individual) rulesets. For example, you can add an s to many nouns to make them plural but many nouns don't follow this rule. Similar variations occur across all types of words. Language is messy.

Accuracy could be achieved by treating each word as an object with values that determine the conjugated forms of the word, but writing all these objects manually is more than I bargained for with this project. You'd have to sort through each word manually and determine it's rules or at least sort them and use constructor functions to generate lists of words (as objects instead of strings).

But I decided against it. Instead, I made each word clickable so any user could manually replace single words. 

Variation
The generator produces sentences with random words from lists. The combinations of words are predefined combinations of nouns, verbs and adjectives. Line 1, for example, can produce a sentence that consists of: A + N + V (Adjective + Noun + Verb)("bleak" + "man" + "shivers"). This produces a linguistically correct sequence of words. 

V + A + N is also possible, ie. "glaring chilly girl". A function (continuousVerb) is used to conjugate verbs to the -ing form. Only words that adhere to simple rules for conjugation can be conjugated correctly by this function. So, not every verb is acceptable, but the function is included because using this verb form randomly creates A LOT of variation in the possible sentence combinations.

Editing guide:

1) If you add more/your own words, it's important that you count the syllables and add them to the appropriate list - or the generator won't produce a correct haiku.
2) Note that NOT ALL WORDS within their categories are acceptable. The rules are:

Verbs: 
If they end with e (freeze, for example) it must be possible to conjugate them correctly to the continuous form by removing the last letter of the word and adding -ing. For example: freeze > freez > freezing = "freeze" is acceptable.
If they do not end with an e, they must be conjugatable to the continuous form by adding +ing. For example: renew + ing = renewing. "renew" is an acceptable verb. "ban" is not, as it would result in "baning" which is not a word.
