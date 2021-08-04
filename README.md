# HaikuGenerator

For README:

HAIKUS:
Haikus consist of 3 lines of words, with a free amount of words producing exactly 5 syllables in the 1st line, 7 in the second and 5 in the last. 

ABOUT THE CODE...

CHALLENGES: 

Grammatical accuracy
Grammatical structure can't be completely accurate - it would make the project huge in scope, and each word would need a lot of additional information applied and many words would need extremely specific (and in some cases even individual) rulesets. For example, you can add an s to many nouns to make them plural but many nouns don't follow this rule. Similar variations occur across all types of words. Language is messy.

Accuracy could be achieved by treating each word as an object with values that determine grammatical rules. Or, words could be crosschecked against other lists - for example, a list of words that don't take on the plural s in their plural form could be made. Then, you could check the words selected at random against those lists and add an s if they are found there. 

However, I don't know of any way to do this that wouldn't involve manually sorting through each and every word, so I've opted not to do this. As such, this tool is not intended to deliver 100% grammatically correct sentences but rather as a way to inspire by producing random combinations of words a very strict lyrical form (the haiku's 5-7-5 syllable form). 

Variation
The generator produces sentences with random words from lists. The combinations of words are predefined combinations of nouns, verbs and adjectives. Line 1, for example, can produce a sentence that consists of: A + N + V (Adjective + Noun + Verb)("bleak" + "man" + "shivers"). This produces a linguistically correct sequence of words. 

V + A + N is also possible, ie. "glaring chilly girl". A function (continuousVerb) is used to conjugate verbs to the -ing form. Only words that adhere to simple rules for conjugation can be conjugated correctly by this function. So, not every verb is acceptable, but the function is included because using this verb form randomly creates A LOT of variation in the possible sentence combinations.

Editing guide:

1) If you add more/your own words, it's important that you count the syllables and add them to the appropriate list - or the generator won't produce a correct haiku.
2) Note that NOT ALL WORDS within their categories are acceptable. The rules are:

Verbs: 
If they end with e (freeze, for example) it must be possible to conjugate them correctly to the continuous form by removing the last letter of the word and adding -ing. For example: freeze > freez > freezing = "freeze" is acceptable.
If they do not end with an e, they must be conjugatable to the continuous form by adding +ing. For example: renew + ing = renewing. "renew" is an acceptable verb. "ban" is not, as it would result in "baning" which is not a word.