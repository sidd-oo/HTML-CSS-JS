document.addEventListener("DOMContentLoaded", function () {
    const phrases = ["Doctor", "Pilot", "Army Officer", "Author", "Lawyer", "Software Engineer"];
    let dynamicText = document.getElementById("dynamic__text");
    dynamicText.textContent = ""

    let phrasesIndex = 0;
    let phraseLetterIndex = 0;
    const typingSpeed = 400;
    const erasingSpeed = 200;

    const printLetters = (phrase) => {
        if (phraseLetterIndex === phrase.length) {
            clearLetters();
        }
        else if(phraseLetterIndex < phrase.length) {
            dynamicText.textContent += phrase.charAt(phraseLetterIndex);
            console.log(dynamicText.textContent);
            phraseLetterIndex++;
            setTimeout(() => {
                printLetters(phrase);
            }, typingSpeed)
        }
    }

    const clearLetters = () => {
        if (phraseLetterIndex === -1) {
            phraseLetterIndex = 0;
            phrasesIndex = (phrasesIndex + 1) % phrases.length;
            printLetters(phrases[phrasesIndex])
        } else if (phraseLetterIndex > -1) {
            let str = "";
            for (let i = 0; i < phraseLetterIndex; i++) {
                str += phrases[phrasesIndex].charAt(i);
            }
            dynamicText.textContent = str;
            phraseLetterIndex--;
            setTimeout(clearLetters, erasingSpeed);
        }
        console.log(dynamicText.textContent);

    }

    printLetters(phrases[phrasesIndex]);
})