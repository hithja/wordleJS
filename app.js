const prompt = require('prompt-sync')();

// Secret words list
const WORDS_LIST = [
    "hello", "fruit", "apple", "grape", "mango", "peach", "lemon", "melon", "berry", "plums",
    "chair", "table", "spoon", "brick", "plant", "crown", "cloud", "storm", "light", "flame",
    "sword", "shield", "arrow", "spear", "horse", "zebra", "tiger", "eagle", "sheep", "goose",
    "ocean", "river", "earth", "stone", "flute", "music", "piano", "drums", "viola", "cello",
    "bread", "cream", "toast", "butter", "sugar", "honey", "gravy", "pizza", "bacon", "liver",
    "glass", "torch", "frame", "angle", "curve", "block", "stack", "level", "pixel", "slope",
    "flask", "shirt", "pants", "dress", "scarf", "socks", "boots", "glove", "shoes", "watch",
    "whale", "shark", "coral", "plant", "oasis", "jewel", "amber", "pearl", "crisp", "maple",
    "grasp", "trick", "smoke", "fluff", "swift", "bloom", "swarm", "twist", "cling", "whisk",
    "chess", "queen", "knight", "dodge", "punch", "sweep", "whirl", "thief", "guard", "brave"
];
const LETTER_COUNT = 5;

let guessedWord = WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];

let guess;
let trueLetters = "";

// Get a word from the user until `LETTER_COUNT` attempts are reached
for (let i = 0; i < LETTER_COUNT * 2; i++) {
    do {
        guess = prompt(`[${LETTER_COUNT*2 - i}] Enter a word (${LETTER_COUNT} letters): `);
    } while(LETTER_COUNT != guess.length);

    for (let j = 0; j < LETTER_COUNT; j++) {
       if (guessedWord.includes(guess[j])) if (!trueLetters.includes(guess[j])) trueLetters += guess[j];
    }

    if (guess == guessedWord) {
        console.log(`Congratulations! You guessed the word! You guessed the word on the ${LETTER_COUNT*2 - i} attempt!`);
        process.exit();
    }
    else {
        console.log(`Letters that contains in guessed word: ${trueLetters}`)
    }
}
console.log(`Game over! The guessed word was ${guessedWord}`);