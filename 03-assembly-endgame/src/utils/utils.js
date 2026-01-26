import { words } from "../data/words";

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}
export function getSuccessText() {
    const options = [
        "Nice one! 🎯",
        "Great guess! 🔥",
        "Boom! That’s correct 💥",
        "You’re on fire! 🚀",
        "Correct! Keep going 💪",
        "That letter fits perfectly ✨"
    ];
    return options[Math.floor(Math.random() * options.length)];
}
export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}