
const fs = require('fs');
const findMostCommonLetter = require('G:/programming/techmagic/Nodejs/task1'); 

function analyzeText(filePath) {
  try {
    const text = fs.readFileSync(filePath, 'utf-8');
    
    const mostCommonLetter = findMostCommonLetter(text);
    
    console.log(`In the given text, the most common letter is: ${mostCommonLetter}`);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

// Передача шляху до текстового файлу через аргумент
const filePath = process.argv[2];
analyzeText(filePath);
